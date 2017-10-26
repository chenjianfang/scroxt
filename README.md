README
=======================================
## scroxt.js   Overview
scroxt.js是一个字体滚动的插件库，包括弹幕滚动，单行水平左右滚动、文本垂直滚动上下，用于简单快捷生成滚动字体。性能优秀，通过CPU加速，缓存字体元素，帧运动，达到最流畅的效果。兼容Chrome、Firefox、Opera、IE9及IE9以上浏览器。

[scroxt.js官网](http:sztinghao.top) 

## Build

```
npm install

```

## Getting Started

[demo](https://github.com/chenjianfang/scroxt/tree/master/demo)

### 水平滚动

```
new scroxt.Horizontal({
    target: ".my-ele",
    data: ['第一条','第2条','第3条'],
    speed: -5
});

```

### 垂直滚动

```
new scroxt.Vertical({
    target: ".my-ele",
    data: ['第一条','第2条','第3条','第4条','第5条'],
    speed: 5
});

```

```
...
<link rel="stylesheet" type="text/css" href="./src/css/scroxt.css">
	<div class="scroll-box-barrage">
	    <div class="scroxt-video-barrage">
	        <video id="my-video" preload="auto" width="640" height="auto">
	          <source src="http://14.215.100.242/v.cctv.com/flash/mp4video6/TMS/2011/01/05/cf752b1c12ce452b3040cab2f90bc265_h264818000nero_aac32-1.mp4" type='video/mp4'>
	        </video>
	    </div>
	</div>
	<script type="text/javascript" src="./dist/js/scroxt.js"></script>
	<script type="text/javascript">
		new scroxt.Barrage({
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
	</script>
...

```

