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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * class root
 *
 * @param {Object}
 *      @param {string} target:装载容器的css选择器 例如："div.horizontal-right"
 *      @param {string[]} scroxtLi:滚动元素内容 例如：["<li>第一条</li>", "<li>第二条</li>", "<li>第三条</li>"]
 *      @param {number} distance:定时器移动的单位距离 例如：-0.5|0.5
 * @returns {null}
 * @example
 *
 * class Horizontal extends root {}
 *
 */
var root = /** @class */ (function () {
    function root(_a) {
        var target = _a.target, scroxtLi = _a.scroxtLi, distance = _a.distance;
        /**
         * [options 构造函数参数]
         * @type {Object}
         */
        this.options = {
            target: "",
            scroxtLi: [],
            distance: 0
        };
        this.extendOpt(arguments[0]);
        this.scroxtUl = ".scroxt-ul .clearfix";
        this.createELe();
    }
    /**
     * @param {Object} 构造函数参数赋值
     */
    root.prototype.extendOpt = function (opt) {
        var that = this;
        for (var key in opt) {
            if (opt.hasOwnProperty(key)) {
                that.options[key] = opt[key];
            }
        }
    };
    /**
     * 生成滚动元素内容 <ul class=[scroxtUl]>[scroxtLi.join("")]</ul>
     */
    root.prototype.createELe = function () {
        var that = this;
        var ulScope = ~~(Math.random() * 100) + (new Date()).getTime();
        var str = "<ul class=\"" + that.scroxtUl.replace(/\./g, '') + "\" date-scroxt=\"" + ulScope + "\">";
        str += this.createContent();
        str += "</ul>";
        var target = document.querySelector(this.options.target);
        target.innerHTML = str;
        this.scroxtUlEle = document.querySelector("[date-scroxt=\"" + ulScope + "\"]");
    };
    root.prototype.createContent = function () {
        return this.options.scroxtLi.join("");
    };
    return root;
}());
/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ })
/******/ ]);