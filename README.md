README
=======================================
## scroxt.js   Overview
scroxt.js是一个字体滚动的插件库，包括视频弹幕滚动，直播弹幕、直播弹幕强制模式、单行水平左右滚动、文本垂直滚动上下，用于简单快捷生成滚动字体。性能优秀，通过CPU加速，缓存字体元素，帧运动，达到最流畅的效果。兼容Chrome、Firefox、Opera、IE9及IE9以上浏览器。

<!-- [scroxt.js官网](http:sztinghao.top)  -->

## Installation

Using npm

```
npm install --save scroxt

```

In a browser:

```
<script src="scroxt.min.js"></script>
```

In a webpack

```
import scroxt form "scroxt"
```


## 更新
2017.11.08 视频弹幕增加播放，暂停，重播，快进，快退接口。详细查看[视频弹幕](https://github.com/chenjianfang/scroxt#三视频弹幕)

2017.11.10 垂直、水平滚动增加限制，只有两倍的内容的高度或者宽度才会滚动。水平滚动增加gap字段，gap指定水平滚动每条内容的间隔，默认10

2017.11.13 水平滚动和垂直滚动增加暂停、开始接口。fix边框bug

2017.12.14 水平滚动和垂直滚动增加标签元素滚动


## Getting Started

你能很方便的使用插件用于字体滚动，scroxt是对一个对象，滚动方式不同对应不同的类名，像水平滚动的类名是Horizontal作为scroxt的属性，使用的时候只要new scroxt.Horizontal来生成滚动字体。这里有详细的例子 

[demo](https://github.com/chenjianfang/scroxt/tree/master/demo)

#### 一、水平滚动

```
var scroxtHorizontal = new scroxt.Horizontal({
    target: ".my-ele",
    data: ['第一条','第2条','第3条'],
    speed: -5,
    gap: 20
});

```
参数：
- target：水平滚动字体的容器css选择器
- data：字体数组
- speed: 滚动方向:负数为自下而上滚动，正数为自上而下滚动。滚动速度: 单位帧移动的距离= speed * 0.1。speed的大小范围为 1-10。
- gap: 每条内容的间隔，默认为10px

scroxt.Horizontal实例参数：
- stopMove(): 停止移动
- startMove(): 开始移动

#### 二、垂直滚动

```
var scroxtVertical = new scroxt.Vertical({
    target: ".my-ele",
    data: ['第一条','第2条','第3条','第4条','第5条'],
    speed: 5
});

```

参数：
- target：垂直滚动字体的容器css选择器
- data：字体数组
- speed: 滚动方向：负数为从右到左滚动，正数为从左到右。滚动速度：speed的大小范围为 1-10。单位帧移动的距离= speed * 0.1。

scroxt.Vertical实例参数：
- stopMove(): 停止移动
- startMove(): 开始移动

#### 三、视频弹幕

```
...
<div class="scroll-box-barrage">
    <div class="scroxt-video-barrage">
        <video id="my-video" preload="auto" width="640" height="auto">
          <source src="http://14.215.100.242/v.cctv.com/flash/mp4video6/TMS/2011/01/05/cf752b1c12ce452b3040cab2f90bc265_h264818000nero_aac32-1.mp4" type='video/mp4'>
        </video>
    </div>
    <div class="play">播放</div>
    <div class="pause">暂停</div>
    <div class="fast-forward">快进</div>
</div>
<script type="text/javascript" src="./dist/js/scroxt.js"></script>
<script type="text/javascript">
	var scroxtBarrage = new scroxt.Barrage({
	    video: "#my-video",
	    dataTime: [{
	    	data:"第一条弹幕",
	    	time:1
	    },{
	    	data:"第二条弹幕",
	    	time:3
	    },{
	    	data:"第三条弹幕",
	    	time:2
	    }]
	});
	//播放
	document.querySelector(".play").addEventListener("click",function(){
	    scroxtBarrage.play();
	});
	//暂停
	document.querySelector(".pause").addEventListener("click",function(){
	    scroxtBarrage.stop();
	});
	//前进5s
	document.querySelector(".fast-forward").addEventListener("click",function(){
	    scroxtBarrage.moveInterval(5);
	});
</script>
...

```

scroxt.Barrage参数：
- video：视频标签的css选择器
- dataTime：弹幕数组，数组每一项由data和time字段组成，data是每条弹幕的内容，time是弹幕出现的时间/秒单位(video播放的时间);

scroxt.Barrage实例参数：
- play(): 开始播放
- stop(): 暂停播放
- restart(): 重新播放
- moveInterval(s): 快进s秒
- moveInterval(-s): 后退s秒

#### 四-1、直播弹幕

```
...
<div class="scroll-box-barrage">
    <div class="scroxt-video-barrage" style="width: 100%;">
        <img class="video-bg" src="./img/bg.png" style="width: 100%;height: auto;display: block;vertical-align: middle;">
    </div>
</div>
<script type="text/javascript" src="./dist/js/scroxt.js"></script>
<script type="text/javascript">
var scroxtLive = new scroxt.Live({
    target: ".scroxt-video-barrage",
});
var i = 0;
setInterval(function(){
    i++;
    scroxtLive.addBarrage(i+"你好啊")
},100)
//用户自己发的弹幕
setTimeout(function(){
    scroxtLive.addBarrage("一一一一一一一一一一",true)
},3000);
</script>
...

```

参数：
- target：目标容器元素
方法：
- addBarrage：添加弹幕

#### 四-2、直播弹幕兼容低版本的浏览器
火狐浏览器、IE9以下、浏览器操作元素滚动达到一定数量会出现严重掉帧的情况。所以在强制模式下，插件控制弹幕数量（屏幕最多65条弹幕）。但用户自己看到的弹幕不能缺失，当用户自己发弹幕时，通过给addBarrage方法传第二个参数true，只在用户自己电脑上出现弹幕，已达到欺骗的目的。api如下：
```
<script type="text/javascript">
var scroxtLive = new scroxt.Live({
    target: ".scroxt-video-barrage",
    strongLock:true
});

//用户自己发的弹幕
setTimeout(function(){
    scroxtLive.addBarrage("一一一一一一一一一一",true)
},3000);
</script>

```

联系作者：qq-1737752975