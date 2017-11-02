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