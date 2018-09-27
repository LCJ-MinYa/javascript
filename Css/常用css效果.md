## modal中内容(未知宽度高度)绝对居中
```css
.father-box{
    display: none;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: rgba(0,0,0,0.6);
}
.child-box{
    position: absolute;
    width: 240px;
    overflow: hidden;
    top: 50%;
    left: 50%;
    -o-transform: translate3d(-50%,-50%,0);
    -webkit-transform: translate3d(-50%,-50%,0);
    transform: translate3d(-50%,-50%,0);
}
```

## modal侧滑效果
```css
.father-box{
    display: none;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 5;
    background: rgba(0,0,0,0.6);
}
.child-box{
    position: absolute;
    top: 0;
    right: -45%;
    width: 45%;
    height: 100%;
    background: #fff;
    padding-top: 4.2rem;
}
```

```javascript
/* 显示和隐藏modal
 * 显示=》先显示modal，再显示对应的内容节点
 * 隐藏=》先隐藏内容节点，再隐藏modal
 * 拿显示来说，为什么不将内容节点的显示放在modal显示的回调中，从测试来看，并行UI更舒服一些
 */
var hideModal = function() {
    $(".child-box").animate({
        right: '-45%'
    }, 300);
    $(".father-box").fadeOut(300);
}

var showModal = function() {
    $(".father-box").fadeIn(300);
    $(".child-box").animate({
        right: 0
    }, 300);
}

/* 点击内容节点外的空白区域隐藏（事件冒泡）*/
$(".child-box").on('click', function() {
    event.stopPropagation();
})
```

## 安卓字体未垂直居中
```css
/*安卓中单独设置normal，ios中设置line-height: xx px*/
p{
    line-height: normal
}
```

## img图片（未知宽高）在div中居中显示
```css
.father-box{
    width: 100%;
    height: 9.35rem;
    position: relative;
    overflow: hidden;
}
.father-box img{
    display: block;
    width: 80%;
    height: auto;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
```

## css中计算属性calc
```css
div{
    width:-webkit-calc(100% - 2.5rem);
    width:-moz-calc(100% - 2.5rem);
    width:calc(100% - 2.5rem);
}
```

## 手机端1px实现
```css
/* 第一种
 * 伪类缩放
 */
div:before{
    content: "";
    display: block;
    position: absolute;
    left: -50%;
    width: 200%;
    height: 1px;
    background: #eaeaea;
    bottom: 0;
    -webkit-transform:scale(0.5);
    transform: scale(0.5);
}
```