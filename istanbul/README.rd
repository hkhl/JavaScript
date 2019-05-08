http://www.ruanyifeng.com/blog/2015/06/istanbul.html

run: Istanbul cover **.js

istanbul check-coverage 命令用来设置门槛，同时检查当前代码是否达标。
$ istanbul check-coverage --statement 90
ERROR: Coverage for statements (75%) does not meet global threshold (90%)
上面命令设置语句覆盖率的门槛是 90% ，结果就报错了，因为实际覆盖率只有75%。
除了百分比门槛，我们还可以设置绝对值门槛，比如只允许有一个语句没有被覆盖到。

$ istanbul check-coverage --statement -1
上面命令使用负数，表示绝对值门槛。这样一来，上面的例子就通过了覆盖率测试，不会再报错了。
百分比门槛和绝对值门槛，可以结合使用。

$ istanbul check-coverage --statement -5 --branch -3 --function 100
上面命令设置了3个覆盖率门槛：5个语句、3个 if 代码块、100%的函数。注意，这三个门槛是"与"（and）的关系，只要有一个没有达标，就会报错。

