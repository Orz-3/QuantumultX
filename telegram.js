/**
 * TG频道图片推送
 * @author: Peng-YM
 * 更新地址：https://raw.githubusercontent.com/Peng-YM/QuanX/master/Tasks/telegram.js
 * 使用方法：
 * 1. 在channels里面添加频道的id，比如说对于频道https://t.me/ABCD，则填入"ABCD"
 * 比如 channels = ["ABCD", "CDEF"]
 * 2. 在maxMedias设置每个频道最多显示的图片数量，比如说设置为3，则只会显示最近3张图片。
 * 3. alwaysNotice控制是否重复显示已经看过的图片，如果设置为false，则只会显示更新的图片。
 */

let channels = ["Orzmimi"];
let maxMedias = 3;
let alwaysNotice = false;

const $ = API("telegram");
if ($.read("channels") !== undefined) {
    channels = JSON.parse($.read("channels"));
}
if ($.read("maxMedias") !== undefined) {
    maxMedias = parseInt($.read("maxMedias"));
}
if ($.read("alwaysNotice") !== undefined) {
    alwaysNotice = $.read("alwaysNotice");
}

const updated = JSON.parse($.read("updated") || "{}");

Promise.all(
    channels.map(async (channel) => {
        $.log(`Checking channel ${channel}...`);
        await $.get(`https://rsshub.app/telegram/channel/${channel}`)
            .then((response) => {
                const body = response.body;
                const channelLink = `https://t.me/s/${channel}`;
                const channelName = body.match(/CDATA\[(.*) - Telegram 频道\]/)[1];


                $.log(`Channel Name: ${channelName}, Link: ${channelLink}`);

                // collect medias
                let medias = [];
                response.body.match(/<item>[\s\S]*?<\/item>/g).forEach((item) => {
                    const mediaCollection = Array.from(item.matchAll(/(?:img|video) src="(.*?)"/g), m => m[1]).filter(m => m !== "undefined");
                    const updateTime = new Date(item.match(/<pubDate>(.*?)<\/pubDate>/)[1]).getTime();
                    if (mediaCollection) {
                        if (alwaysNotice || updated[channel] === undefined || updated[channel] < updateTime) {
                            medias = medias.concat(mediaCollection);
                            $.log(mediaCollection);
                        } else return;
                    }
                });

                $.log(`All medias: ${medias}`)

                // push notifications
                for (let i = 0; i < Math.min(medias.length, maxMedias); i++) {
                    $.notify(`[Telegram] ${channelName}`, "", "", {
                        "media-url": medias[i],
                        "open-url": medias[i]
                    });
                    $.log(`MEDIA: ${medias[i]}`);
                }

                // update timestamp
                updated[channel] = new Date().getTime();
                $.write(JSON.stringify(updated), "updated");
            })
            .catch((error) => {
                $.notify("[Telegram]", "", `❌ 未找到频道: ${channel}`);
                $.error(error);
            });
    })
)
    .catch((err) => $.error(err))
    .finally(() => $.done());


// prettier-ignore
/*********************************** API *************************************/
function API(t = "untitled", s = !1) { return new class { constructor(t, s) { this.name = t, this.debug = s, this.isQX = "undefined" != typeof $task, this.isLoon = "undefined" != typeof $loon, this.isSurge = "undefined" != typeof $httpClient && !this.isLoon, this.isNode = "function" == typeof require, this.isJSBox = this.isNode && "undefined" != typeof $jsbox, this.node = (() => this.isNode ? { request: "undefined" != typeof $request ? void 0 : require("request"), fs: require("fs") } : null)(), this.cache = this.initCache(), this.log(`INITIAL CACHE:\n${JSON.stringify(this.cache)}`), Promise.prototype.delay = function (t) { return this.then(function (s) { return ((t, s) => new Promise(function (e) { setTimeout(e.bind(null, s), t) }))(t, s) }) } } get(t) { return this.isQX ? ("string" == typeof t && (t = { url: t, method: "GET" }), $task.fetch(t)) : new Promise((s, e) => { this.isLoon || this.isSurge ? $httpClient.get(t, (t, i, o) => { t ? e(t) : s({ status: i.status, headers: i.headers, body: o }) }) : this.node.request(t, (t, i, o) => { t ? e(t) : s({ ...i, status: i.statusCode, body: o }) }) }) } post(t) { return this.isQX ? ("string" == typeof t && (t = { url: t }), t.method = "POST", $task.fetch(t)) : new Promise((s, e) => { this.isLoon || this.isSurge ? $httpClient.post(t, (t, i, o) => { t ? e(t) : s({ status: i.status, headers: i.headers, body: o }) }) : this.node.request.post(t, (t, i, o) => { t ? e(t) : s({ ...i, status: i.statusCode, body: o }) }) }) } initCache() { if (this.isQX) return JSON.parse($prefs.valueForKey(this.name) || "{}"); if (this.isLoon || this.isSurge) return JSON.parse($persistentStore.read(this.name) || "{}"); if (this.isNode) { const t = `${this.name}.json`; return this.node.fs.existsSync(t) ? JSON.parse(this.node.fs.readFileSync(`${this.name}.json`)) : (this.node.fs.writeFileSync(t, JSON.stringify({}), { flag: "wx" }, t => console.log(t)), {}) } } persistCache() { const t = JSON.stringify(this.cache); this.log(`FLUSHING DATA:\n${t}`), this.isQX && $prefs.setValueForKey(t, this.name), (this.isLoon || this.isSurge) && $persistentStore.write(t, this.name), this.isNode && this.node.fs.writeFileSync(`${this.name}.json`, t, { flag: "w" }, t => console.log(t)) } write(t, s) { this.log(`SET ${s} = ${JSON.stringify(t)}`), this.cache[s] = t, this.persistCache() } read(t) { return this.log(`READ ${t} ==> ${JSON.stringify(this.cache[t])}`), this.cache[t] } delete(t) { this.log(`DELETE ${t}`), delete this.cache[t], this.persistCache() } notify(t, s, e, i) { const o = "string" == typeof i ? i : void 0, n = e + (null == o ? "" : `\n${o}`); this.isQX && (void 0 !== o ? $notify(t, s, e, { "open-url": o }) : $notify(t, s, e, i)), this.isSurge && $notification.post(t, s, n), this.isLoon && $notification.post(t, s, e), this.isNode && (this.isJSBox ? require("push").schedule({ title: t, body: s ? s + "\n" + e : e }) : console.log(`${t}\n${s}\n${n}\n\n`)) } log(t) { this.debug && console.log(t) } info(t) { console.log(t) } error(t) { console.log("ERROR: " + t) } wait(t) { return new Promise(s => setTimeout(s, t)) } done(t = {}) { this.isQX || this.isLoon || this.isSurge ? $done(t) : this.isNode && !this.isJSBox && "undefined" != typeof $context && ($context.headers = t.headers, $context.statusCode = t.statusCode, $context.body = t.body) } }(t, s) }
/*****************************************************************************/
