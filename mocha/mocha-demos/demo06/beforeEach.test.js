var expect = require('chai').expect;

describe('beforeEach示例', function() {
  var foo = false;
  var count = 1;
  before(function() {
    foo = true;
	//count++;             //整个测试用例前执行一次
  });
  
  beforeEach(function(){  //每个测试用例（it）前都回执行一次
	count++;
  });

  it('修改全局变量应该成功', function() {
	console.log(count);
    expect(foo).to.be.equal(true);
  });


  
   it('修改全局变量应该成功2', function() {
	console.log(count);
    expect(foo).to.be.equal(true);
  });
});
