// /**
//  * @param {Element} _:删除的元素的css选择器
//  * @example
//  *
//  * removeElement(".content")
 
//  * removeElement("[data-id='2014']",true)
//  */

// let videoElement = null;
// let lock = false;
// let currentTime = 0;
// function setVideoElement(vd){
// 	videoElement = document.querySelector(vd);
// 	videoElement.addEventListener("timeupdate",function(){
// 		console.log(currentTime);
// 		currentTime = videoElement.currentTime;
// 	});
// }


// export default function getVideoCurrentTime(vd){

// 	if(!videoElement){
// 		setVideoElement(vd);
// 		return 0;
// 	}else{
// 		return 1;
// 	}

// }

// var videoElement = null;
// var videoCurrentTime = 0;
// function getVideoCurrentTime(vd){
// 	if(videoElement !== null) return videoCurrentTime;
// 	videoElement = document.querySelector(vd);
// 	videoElement.addEventListener("timeupdate",function(){
// 		console.log(videoCurrentTime);
// 		videoCurrentTime = videoElement.currentTime;
// 	});
// }
// 

// export default function getVideoCurrentTime(vd){
// 	const video = document.querySelector(vd);
// 	if (video.readyState == 4) {  // android会走此逻辑
// 	    foo();
// 	} else {    // iOS走此逻辑
// 	    video.addEventListener("canplaythrough", function() {
// 	        foo();
// 	    }, false);
// 	    video.load();    // 需要主动触发下，不然不会加载
// 	}
// }


