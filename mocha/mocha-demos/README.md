http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
This repo is for my article ["A Mocha tutorial of Examples"](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html) (in Chinese).

> "Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun."
>
> -- [Mochajs.org](https://mochajs.org/)

![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015120301.png)

## How to use

First, clone the repo.

```bash
$ git clone https://github.com/ruanyf/mocha-demos.git
```

Then, install the dependencies locally and Mocha globally.

```bash
$ cd mocha-demos
$ npm install
$ npm install --global mocha
```

Enter the `demo01` subdirectory.

```bash
$ mocha add.test.js
```

Now, play with the other examples under the repo's demo* directories.

## Index

- [demo01: basic usage](https://github.com/ruanyf/mocha-demos/tree/master/demo01)
- [demo02: command parameters](https://github.com/ruanyf/mocha-demos/tree/master/demo02)
- [demo03: mocha.opts](https://github.com/ruanyf/mocha-demos/tree/master/demo03)
- [demo04: ES6 testing](https://github.com/ruanyf/mocha-demos/tree/master/demo04)
- [demo05: async testing](https://github.com/ruanyf/mocha-demos/tree/master/demo05)
- [demo06: hooks](https://github.com/ruanyf/mocha-demos/tree/master/demo06)
- [demo07: exclusive/inclusive Tests](https://github.com/ruanyf/mocha-demos/tree/master/demo07)
- [demo08: browser testing](https://github.com/ruanyf/mocha-demos/tree/master/demo08)
- [demo09: generating spec](https://github.com/ruanyf/mocha-demos/tree/master/demo09)

## License

MIT
mocha命令后面紧跟测试脚本的路径和文件名，可以指定多个测试脚本。
$ mocha file1 file2 file3
Mocha默认运行test子目录里面的测试脚本。所以，一般都会把测试脚本放在test目录里面，然后执行mocha就不需要参数了。请进入demo02子目录，运行下面的命令。

Mocha默认运行test下第一级目录，子目录的测试脚本不会执行。 想要执行需要加上蚕食 --recursive。此时只要是test目录下的脚本，都会执行。
