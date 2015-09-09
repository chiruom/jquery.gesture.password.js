# jQuery.gesture.password.js
## jQuery手势密码插件
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)     [![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

**jQuery.gesture.password.js是一个在web前端实现手势密码功能的插件（9个点的那种）**
支持PC和手机，支持Zepto。
具备一定的可定制性和扩展性。

**Demo地址：http://www.liyawei.cn/**



###文档

**1**.第一步引入本插件的js文件,需要和jQuery一起引用。
```html
<script src="js/jquery-1.11.1.min.js"></script>
<script src="js/jquery.gesture.password.js"></script>
```
---
**2**.新建一个div，这里把id值设为**gesturepwd**
```html
<div id="gesturepwd"></div>
```

---
**4**.现在来初始化插件咯，需要传递一些参数。所有的参数都不是必须的，默认值就如下。
```javascript
$("#gesturepwd").GesturePasswd({
backgroundColor:"#252736",  //背景色
color:"#FFFFFF",   //主要的控件颜色
roundRadii:25,    //大圆点的半径
pointRadii:6, //大圆点被选中时显示的圆心的半径
space:30,  //大圆点之间的间隙
width:240,   //整个组件的宽度
height:240,  //整个组件的高度
lineColor:"#00aec7",   //用户划出线条的颜色
zindex :100  //整个组件的css z-index属性
});
```
(注意：插件css的position属性为**relation**，即相对定位。)

---
**5**.用户密码的表示：
```
九个点，从左到右从上到下，依次表示为 1 2 3 4 5 6 7 8 9 。
```
---
**6**.一个重要的事件：**hasPasswd**,
当用户手势指示完毕，组件会触发一个hasPasswd事件，表示已取得用户所输入的密码。该事件会带有一个sting类型的参数，为用户的密码。
你需要在组件外部监听这个事件以获取用户输入的密码。
```javascript
$("#gesturepwd").on("hasPasswd",function(e,passwd){

    //passed为用户所输入的密码，进行处理，加密后交给后端验证等。。。

}
```

---

**7**.在验证了用户密码的正确或错误后，你可以在组件外部对组件触发事件 **passwdRight** 或 **passwdWrong**来告诉组件，已让它的线条变成绿色或红色。
```javascript
$("#gesturepwd").on("hasPasswd",function(e,passwd){

    //passed为用户所输入的密码，进行处理，加密后交给后端验证等。。。

    var result= //用户密码对或错
    if(result == true){
        $("#gesturepwd").trigger("passwdRight");
        setTimeout(function(){

        //密码验证正确后的其他操作，打开新的页面等。。。

        },500)  //延迟半秒以照顾视觉效果
    }
    else{
        $("#gesturepwd").trigger("passwdWrong");

         //密码验证错误后的其他操作。。。

    }
}


```

---

**8**.终了~

---
###许可

你可以随意使用本项目，只需要在您的项目中添加这么一行注释：
```html
jquery.danmu.js (//github.com/chiruom//) - Licensed under the MIT license
```