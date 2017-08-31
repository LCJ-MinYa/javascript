## 占位方法
	* 设置5个相同的tabBaritem,将中间的tabBaritem设置为不显示内容。[self creatNav:[[UIViewController alloc] init] image:[UIImage imageNamed:@""] selectImage:[UIImage imageNamed:@""] title:nil];
 	* 并且在viewWillAppear中增加发布按钮。
 
## 重新自定义布局子空间UITabBar

* 新增UITabBar类并且继承自UITabBar
* 在UITabBar.m中实现自定义布局原始的4个tabBar，并且添加自身创建的UIButton
* 采用KVC来替换TabBar[self setValue:[[LCJTabBar alloc] init] forKeyPath:@"tabBar"];

## 优势:
	1.第二组不会有系统的UITabBar的内存占用浪费。
	2.灵活性更高，可定制性更高，位置和内容可以自行设置.
