'use strict';

/*
 * ===========================
 *
 * 函数重载
 * @author   : LiChaoJun
 * @datetime : 2017/11/02
 *
 * ===========================
 */

/*
 *	什么是函数重载？
 *	1.JS中不存在函数重载的概念;
 *	2.但一个函数通过判断参数列表来实现不同的功能，称为模拟函数重载;
 */

/*
 *  应用情况,什么时候会用到?
 *  举例:有一个公用方法
 *  1.如果不传参数时，返回第一种结果;
 *  2.如果传一个参数时，返回第二种结果;
 *  3.如果传二个参数时，返回第三种结果;
 *  4.如果传大于二个参数时，返回第四种结果;
 *  ...以此类推
 */

/*传统方法一*/
var reloadFunc = function() {
	switch (arguments.length) {
		case 0:
			console.log('未传入参数，执行方法一');
			break;
		case 1:
			console.log('传入一个参数，执行方法二');
			break;
		case 2:
			console.log('传入二个参数，执行方法三');
			break;
		default:
			console.log('传入大于二个参数，执行方法四');
	}
}

reloadFunc();
reloadFunc('one');
reloadFunc('one', 'two');
reloadFunc('one', 'two', 'three');



/*
 * 我们希望对象Company拥有一个find方法，当不传任何参数时，
 * 就会把Company.names里面的所有人的平均分数返回回来；
 * 因为find方法是根据参数的个数不同而执行不同的操作的，
 * 所以，需要有一个reloadCompanyFind方法，能够如下的为Company添加find的重载：
 */
var company = {
	names: [{
		name: "张三",
		score: 98
	}, {
		name: "李四",
		score: 88
	}, {
		name: "王五",
		score: 72
	}, {
		name: "赵六",
		score: 56
	}],
	//返回所有人的平均分数
	find: function() {
		var allScore = 0;
		for (var i = 0; i < this.names.length; i++) {
			allScore += this.names[i].score;
		}
		return allScore / 4;
	}
};
var reloadCompanyFind = function(object, method, func) {
	var oldMethod = object[method];
	//给object 重新赋予新的方法
	object[method] = function() {
		if (func.length == arguments.length) {
			return func.apply(this, arguments);
		} else if (typeof oldMethod == 'function') {
			return oldMethod.apply(this, arguments);
		}
	};
};
reloadCompanyFind(company, 'find', function(name, name2) {
	//返回其他人的姓名数组
	var otherNames = [];
	for (var i = 0; i < this.names.length; i++) {
		if (this.names[i].name != name && this.names[i].name != name2) {
			otherNames.push(this.names[i].name);
		}
	}
	return otherNames;
});
reloadCompanyFind(company, 'find', function(name) {
	//返回当前人的分数
	for (var i = 0; i < this.names.length; i++) {
		if (name == this.names[i].name) {
			return name + '的分数是' + this.names[i].score;
		}
	}
});
console.log(company.find());
console.log(company.find('张三'));
console.log(company.find('张三', '李四'));
//PS：感觉此方法不如传统方法直观