
前提： npm init -y;   npm install  (安装node——modeules)
*.js文件当前目录， 测试test.*.js 文件放在test目录下
run:istanbul cover node_modules/mocha/bin/_mocha
在window系统上因为路径的原因，不能使用 istanbul cover _mocha 命令，而要使用 istanbul cover node_modules/mocha/bin/_mocha , 官方说明上 usage on windows 部分也提到了这一点