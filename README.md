# JavaScript
## 使用Node.js搭建静态服务器
一、什么是NodeJS
>JS是脚本语言，脚本语言都需要一个解析器才能运行。对于写在HTML页面里的JS，浏览器充当了解析器的角色。而对于需要独立运行的JS，NodeJS就是一个解析器。
每一种解析器都是一个运行环境，不但允许JS定义各种数据结构，进行各种计算，还允许JS使用运行环境提供的内置对象和方法做一些事情。例如运行在浏览器中的JS的用途是操作DOM，浏览器就提供了document之类的内置对象。而运行在NodeJS中的JS的用途是操作磁盘文件或搭建HTTP服务器，NodeJS就相应提供了fs、http等内置对象。

二、作为一个Web服务器应具备以下几个功能：<br>
1、能显示以.html/.htm结尾的Web页面 <br>
2、能直接打开以.js/.css/.json/.text结尾的文件内容 <br>
3、显示图片资源 <br>
4、自动下载以.apk/.docx/.zip结尾的文件 <br>
//下面两项还未完成，持续更新ing <br>
5、形如http://xxx.com/a/b/ , 则查找b目录下是否有index.html,如果有就显示，如果没有就列出该目录下的所有文件及文件夹，并可以进一步访问。<br>
6、形如http://xxx.com/a/b,  则作301重定向到http://xxx.com/a/b/ , 这样可以解决内部资源引用错位的问题。<br>