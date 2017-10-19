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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * 设置定时器profix
 *
 * 例子：
 *
 * setTimeTask(function(){
 *     console.log(1)
 * });
 *
 */
var setTimeTask = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();
/* harmony default export */ __webpack_exports__["default"] = (setTimeTask);


/***/ }),
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


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * class Horizontal
 * @returns voild
 */
var Horizontal = /** @class */ (function (_super) {
    __extends(Horizontal, _super);
    function Horizontal(opt, scroxtLiGap) {
        if (scroxtLiGap === void 0) { scroxtLiGap = 10; }
        var _this = _super.call(this, opt) || this;
        //计算子元素占用宽度总和
        _this.sumWidth = 0;
        _this.distance = 0;
        _this.scroxtLiGap = scroxtLiGap;
        _this.targetWidth = +window.getComputedStyle(document.querySelector(opt.target), null).getPropertyValue("width").replace("px", "");
        _this.arrange();
        _this.startRun();
        return _this;
    }
    Horizontal.prototype.arrange = function () {
        this.sumWidth = 0;
        for (var i = 0, len = this.scroxtUlEle.childNodes.length; i < len; i++) {
            var currentEle = this.scroxtUlEle.childNodes[i];
            currentEle.style.whiteSpace = "nowrap";
            var temp = window.getComputedStyle(currentEle, null).getPropertyValue("width");
            this.sumWidth += (Math.ceil(+temp.replace("px", "")) + this.scroxtLiGap);
        }
        this.scroxtUlEle.style.width = this.sumWidth + "px";
        var rectObj = document.querySelector(this.options.target).getBoundingClientRect();
        this.targetLeft = rectObj.left;
        this.targetRight = rectObj.right;
    };
    //元素滚动
    Horizontal.prototype.startRun = function () {
        this.copyscroxtUlEle();
        this.STRun();
    };
    Horizontal.prototype.STRun = function () {
        this.STMove();
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__["default"])(function () {
            this.STRun();
        }.bind(this));
    };
    Horizontal.prototype.copyscroxtUlEle = function () {
        this.scroxtUlEle.innerHTML += this.scroxtUlEle.innerHTML;
        this.scroxtUlEle.style.width = this.sumWidth * 2 + "px";
        this.addHorizontalStyle();
    };
    Horizontal.prototype.addHorizontalStyle = function () {
        for (var i = 0, len = this.scroxtUlEle.childNodes.length; i < len; i++) {
            var currentEle = this.scroxtUlEle.childNodes[i];
            currentEle.style.cssFloat = "left";
        }
        this.scroxtUlEle.addClass += " clearfix";
    };
    Horizontal.prototype.STMove = function () {
        this.distance += this.options.distance;
        var rectObj = this.scroxtUlEle.getBoundingClientRect();
        this.scroxtUlHalfPosition = rectObj.left + (rectObj.right - rectObj.left) / 2;
        if (this.distance < 0) {
            if (this.scroxtUlHalfPosition <= this.targetLeft) {
                this.distance = 0;
                this.createELe();
                this.copyscroxtUlEle();
                this.scroxtUlEle.style.left = "0px";
                this.scroxtUlEle.style.marginLeft = "0px";
            }
        }
        else {
            if (this.scroxtUlHalfPosition >= this.targetRight) {
                this.distance = 0;
                this.createELe();
                this.copyscroxtUlEle();
                var target = document.querySelector(this.options.target);
                target.style.position = "relative";
                this.scroxtUlEle.style.right = "0px";
                this.scroxtUlEle.style.marginRight = "0px";
                this.scroxtUlEle.style.position = "absolute";
            }
        }
        this.scroxtUlEle.style.transform = "translate3d(" + this.distance + "px, 0px, 0px)";
        this.scroxtUlEle.style.webkitTransform = "translate3d(" + this.distance + "px, 0px, 0px)";
    };
    return Horizontal;
}(__WEBPACK_IMPORTED_MODULE_0__root__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Horizontal);


/***/ })
/******/ ]);