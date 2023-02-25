教程：

1、需要电脑系统windows，jellyfin，potplayer, 油猴浏览器插件。

2、编辑potplayer.ps1文件，把D:\\PotPlayer64\\PotPlayerMini64.exe改成你本地potplayer播放器的路径。

3、编辑potplayer.reg文件，把D:\\JellyfinPotPlayer\\potplayer.ps1改成你本地potplayer.ps1文件的路径。

4、win+R键打开运行，输入powershell点击确定会填出窗口，输入set-executionpolicy remotesigned，然后输入y，回车。

5、双击potplayer.reg文件添加注册表。

6、打开油猴，添加新脚本，把userscript.js文件全部复制进去，然后把userscript.js文件里的jellyfinIp改成你jellyfin的ip和端口号。

7、找到jellyfin里你的任意视频，右键点击复制串流URL地址，用地址里的api_key=后的内容替换userscript.js里apiKey。

8、保存油猴，刷新页面，大功告成，可以愉快看视频了！

常见问题：
1、powershell一闪而过，应该是第1步和第4步没弄好。

2、点击没反应：刷新页面再尝试。

3、点击打开的视频是上一集：刷新页面再打开。

4、想用原来的播放器播放：右键点击播放或者停用JellyfinPotplayer油猴插件。

5、点击某一季视频的封面打不开：目前只能选择具体某一集播放。