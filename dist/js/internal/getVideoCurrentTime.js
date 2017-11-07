/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports) {

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


/***/ })

/******/ });