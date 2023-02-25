Add-Type -Assembly System.Web
$path=$args[0]
$path=$path -replace "potplayer://" , ""
$path= [System.Web.HttpUtility]::UrlDecode($path)
$path=$path -replace   "potplayer:  " , "potplayer://"
echo $path
& "D:\\PotPlayer\\PotPlayerMini64.exe" $path