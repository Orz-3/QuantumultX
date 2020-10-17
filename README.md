## QuantumultX小白配置

### 配置说明：

  本配置由神机规则修改而来，修改了默认策略组，增加了正则筛选策略组，并集成了Nobyda的去广告脚本和重写，同时集合了大量task类签到脚本，默认皆为禁用，可按需求启用<br>

### 补充说明：

  喜欢简洁的可以使用Orz-3lite.conf，去掉了正则筛选和部分策略组，如果你是自建节点，请务必选择这个<br>

### 使用方法：

  1.点击库中的Orz-3.conf文件，点击raw获取真实地址，复制地址备用<br>

  2.Quan X主界面，点击右下角风车，然后弹出界面下拉至 配置文件-下载，点击下载，将上一步复制的地址粘贴到弹出窗口，然后点确定<br>

  3.Quan X主界面，点击右下角风车，然后弹出界面下拉至 Mitm ，点击生成证书<br>

  4.然后回到Quan X，继续点击配置证书，根据提示安装证书<br>

  5.安装成功后启用证书，并到系统的 设置-通用-关于本机 点击信任证书<br>

  6.打开重写和Mitm<br>

  7.添加节点/订阅，并左滑添加订阅标签（重要，不添加标签是无法筛选的）<br>
  
  8.开始使用<br>

### 注意事项：

  1.默认16个策略组，其中8个为正则筛选，分别将 香港，台湾，新加坡，美国，日本和韩国地区节点筛选出来，同时把IPLC或IEPL这种高倍率的游戏，或禁止下载的节点单独放进了IPLC策略组中，其余地区节点则放进了特殊地区策略组中<br>

  2.其余8个策略组均是套用上面的筛选策略组，因此请先确定8个地区策略中选中的节点可用<br>

  3.分流中，已将动画疯默认为台湾地区<br>

  4.集成了Nobyda库中的去广告类js<br>

  5.集成大量task，默认皆为禁用，请根据需求启用，启用需额外在重写中启用JS-GetCookie，并按脚本中说明获取cookie方可用<br>

  6.如果你购买Quantumult X还不足30天，无法一键更新，在启用Get-Cookie时，请搜索并单独缓存你需要的获取cookie脚本<br>

  7.默认已解锁Tiktok<br>


######  配置中内容收集整理自以下大佬 （Task脚本由于作者，贡献者众多，这里仅标出我采集脚本的库，同样感谢未能标出的各位贡献者）

#### 特别感谢：

  * [@ConnersHua](https://github.com/ConnersHua)

  * [@KOP-XIAO](https://github.com/KOP-XIAO)

  * [@JasonLee-Go](https://github.com/JasonLee-Go)

 #### JS脚本作者： 

 * [@NobyDa](https://github.com/NobyDa)
 
 * [@yichahucha](https://github.com/yichahucha)

 * [@onewayticket255](https://github.com/onewayticket255)

 * [@Choler](https://github.com/Choler)
 
  #### Task脚本作者：

  * [@chavyleung](https://github.com/chavyleung)

  * [@Peng-YM](https://github.com/Peng-YM)

  * [@zZPiglet](https://github.com/zZPiglet)

  * [@Sunert](https://github.com/Sunert)
  
  * [@lowking](https://github.com/lowking)
  
  * [@songyangzz](https://github.com/songyangzz)
    
  * [@toulanboy](https://github.com/toulanboy)
  
  * [@lxk0301](https://gitee.com/lxk0301)
  
  * [@vinewx](https://ooxx.be/js/)
  
  * [@chouchoui](https://github.com/chouchoui)
  
  * [@evilbutcher](https://github.com/evilbutcher)  
  
  * [@id77](https://github.com/id77)   
  
  * [@dompling](https://github.com/dompling)  
  
  * [@iepngs](https://github.com/iepngs)  
  
  * [@barrym-chen](https://github.com/barrym-chen) 

  * [@iisams](https://github.com/iisams)
  
  * [@congcong0806](https://github.com/congcong0806)
  
  * [@XidNDD](https://github.com/XidNDD) 
  
  * [@wangdelu2020](https://github.com/wangdelu2020) 
  
  * [@passerby-b](https://gitee.com/passerby-b) 
  
