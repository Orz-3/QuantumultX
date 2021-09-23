![示例](https://raw.githubusercontent.com/Orz-3/mini/none/yaofan.png)

## QuantumultX小白配置

### 配置说明：

  本配置由神机规则修改而来，修改了默认策略组，增加了正则筛选策略组，并集成了Nobyda的去广告脚本和重写，附带按task脚本作者分类的task订阅，可按需求订阅<br>

### 使用方法：

  1.(移动端先点View code打开库里文件列表)点击库中的Orz-3.conf文件，点击raw获取真实地址，复制地址备用<br>

  2.Quan X主界面，点击右下角风车，然后弹出界面下拉至 配置文件-下载，点击下载，将上一步复制的地址粘贴到弹出窗口，然后点确定<br>

  3.Quan X主界面，点击右下角风车，然后弹出界面下拉至 Mitm ，点击生成证书<br>

  4.然后回到Quan X，继续点击配置证书，根据提示安装证书<br>

  5.安装成功后启用证书，并到系统的 设置-通用-关于本机 点击信任证书<br>

  6.打开重写和Mitm<br>

  7.添加节点/订阅，具体为在Quan X主界面点击右下角风车-节点-引用(订阅)，然后点右上角添加，填写标签和资源路径（重要，不添加标签是无法筛选的）<br>
  
  8.开始使用<br>

### 注意事项：

## 分流

  1.默认10个策略组，其中5个为正则筛选，分别将 香港，台湾，新加坡，美国，日本地区节点筛选出来<br>

  2.其余5个策略组均是套用上面的筛选策略组，因此请先确定5个地区策略中选中的节点可用<br>
  
  *全球加速→国外网站*
  
  *苹果服务→Appstore，Testflight*
  
  *港台番剧→哔哩哔哩，爱奇艺*
  
  *国际媒体→YouTube、Netflix、Amazon Prime Video 这类覆盖地区广泛或没有进行区域限制的流媒体服务*
  
  *黑白名单→Final，即规则没有涉及到的*

  3.限定区域的流媒体服务已经指向对应区域策略（UK和KR除外因为没做相应地区策略）TikTok默认指定全球加速，国内网站默认指定Direct，去广告默认指定Reject<br>

## 重写

  Youtube去广告：不适用允许 UDP 转发的节点及 Premium <br>

  Bilibili换区：需先在重写中开启对应重写，然后点击风车-其他设置-关闭温和策略机制 此脚本也支持搜索换区，只需在在搜索框添加后缀" 港", " 台", " 中". 即可搜索指定区域番剧。例如: 进击的巨人 港 <br>

  比价脚本：包含京东和淘宝的比价，其中淘宝不生效或失效的需要卸载重装，注意不开脚本进淘宝会失效
  
  Cookie：这个是Task脚本获取Cookie用的，Task脚本请在Task文件夹内按需求添加订阅，使用需额外在重写中启用JS-GetCookie，并按脚本中说明获取cookie方可用

  Tiktok枷锁：默认已解锁Tiktok日区，如需改区，本地在[rewrite_local]下方添加(?<=_region=)CN(?=&) url 307 JP  将JP更改成你想改的区域<br>
  
## BoxJS

BoxJS访问地址设定为 http://boxjs.com:9999/




######  配置中内容收集整理自以下大佬 （Task脚本作者移动到Task文件夹下的readme中）

#### 特别感谢：

  * [@ConnersHua](https://github.com/ConnersHua)

  * [@KOP-XIAO](https://github.com/KOP-XIAO)

  * [@JasonLee-Go](https://github.com/JasonLee-Go)

 #### JS脚本作者： 

 * [@NobyDa](https://github.com/NobyDa)
 
 * [@yichahucha](https://github.com/yichahucha)

 * [@Choler](https://github.com/Choler)
 
 * [@srk24](https://github.com/srk24)
 
 * [@blackmatrix7](https://github.com/blackmatrix7)

 * [@JDHelloWorld](https://github.com/JDHelloWorld)
 
 * [@StimeKe](https://github.com/StimeKe)

#### BoxJS作者： 

 * [@chavyleung](https://github.com/chavyleung)
 
