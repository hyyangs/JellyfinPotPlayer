jellyfin调用potplayer播放串流URL视频教程：

1、需要电脑系统windows，jellyfin，potplayer, 油猴浏览器插件。

2、编辑potplayer.ps1文件，把D:\\PotPlayer64\\PotPlayerMini64.exe改成你本地potplayer播放器的路径。

3、编辑potplayer.reg文件，把D:\\JellyfinPotPlayer\\potplayer.ps1改成你本地potplayer.ps1文件的路径。

4、win+R键打开运行，输入powershell点击确定会填出窗口，输入set-executionpolicy remotesigned，然后输入y，回车。

5、双击potplayer.reg文件添加注册表。

6、编辑userscript.js文件，把let jellyfinIp = '127.0.0.1:8096'改成你jellyfin的ip和端口号。

6、在你的jellyfin里选择任意视频，右键点击复制串流URL地址，把userscript.js文件里的let apiKey = 'XXXX'中的XXXX改成你刚刚复制串流URL地址里api_key=后的内容。

7、打开油猴，添加新脚本，把userscript.js文件里的内容全部复制，保存。

8、保存油猴，刷新页面，大功告成，可以愉快看视频了！

常见问题：

1、点击视频封面和播放按钮会调用potplayer；视频右键点击“播放”会调用jellyfin自带的默认播放器。

2、powershell一闪而过，应该是第2步和第4步没弄好。

3、点击没反应：刷新页面再尝试。

4、点击打开的视频是上一集：刷新页面再打开。

5、想用回jellyfin自带的播放器播放：视频右键填出菜单点击播放或者停用JellyfinPotplayer油猴插件。

6、点击某一季视频的封面打不开：目前只能选择具体某一集播放。