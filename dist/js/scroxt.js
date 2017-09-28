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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var root = /** @class */ (function () {
    function root(_a) {
        var target = _a.target, scroxtLi = _a.scroxtLi, distance = _a.distance;
        this.options = {
            target: "",
            scroxtLi: [],
            distance: 0
        };
        this.extendOpt(arguments[0]);
        this.scroxtUl = ".scroxt-ul .clearfix";
        this.createELe();
    }
    root.prototype.extendOpt = function (opt) {
        var that = this;
        for (var key in opt) {
            if (opt.hasOwnProperty(key)) {
                that.options[key] = opt[key];
            }
        }
    };
    //创建元素组件
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
        var str = "";
        for (var i = 0, len = this.options.scroxtLi.length; i < len; i++) {
            str += this.options.scroxtLi[i];
        }
        return str;
    };
    return root;
}());
/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__ = __webpack_require__(1);
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
 * 水平滚动
 *

 *
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
        this.scroxtUlEle.style.transform = "translateX(" + this.distance + "px)";
        this.scroxtUlEle.style.webkitTransform = "translateX(" + this.distance + "px)";
    };
    return Horizontal;
}(__WEBPACK_IMPORTED_MODULE_0__root__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Horizontal);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__ = __webpack_require__(1);
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
 * 垂直滚动
 *
 * 例子
 *

 * 生成一个垂直滚动的字幕
 *
 */
var Vertical = /** @class */ (function (_super) {
    __extends(Vertical, _super);
    function Vertical(opt) {
        var _this = _super.call(this, opt) || this;
        _this.distance = 0;
        _this.copyLock = false;
        _this.targetHeight = +window.getComputedStyle(document.querySelector(opt.target), null).getPropertyValue("height").replace("px", "");
        _this.startRun();
        return _this;
    }
    Vertical.prototype.startRun = function () {
        this.sumHeight = +window.getComputedStyle(this.scroxtUlEle).getPropertyValue("height").replace("px", "");
        this.STRun();
    };
    Vertical.prototype.STRun = function () {
        this.STMove();
        if (this.sumHeight < this.targetHeight)
            return;
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__["default"])(function () {
            this.STRun();
        }.bind(this));
    };
    Vertical.prototype.copyscroxtUlEle = function () {
        this.scroxtUlEle.innerHTML += this.scroxtUlEle.innerHTML;
    };
    Vertical.prototype.STMove = function () {
        this.distance += this.options.distance;
        if (this.options.distance < 0) {
            if (this.distance <= -this.sumHeight || !this.copyLock) {
                _super.prototype.createELe.call(this);
                this.copyscroxtUlEle();
                this.distance = 0;
                this.copyLock = true;
            }
        }
        else {
            if (this.distance >= 0) {
                _super.prototype.createELe.call(this);
                this.copyscroxtUlEle();
                this.distance = -this.sumHeight;
            }
        }
        this.scroxtUlEle.style.transform = "translateY(" + this.distance + "px)";
        this.scroxtUlEle.style.webkitTransform = "translateY(" + this.distance + "px)";
    };
    return Vertical;
}(__WEBPACK_IMPORTED_MODULE_0__root__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Vertical);


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__horizontal__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertical__ = __webpack_require__(3);
/**
 * 水平滚动
 *
 * 例子
 *
 *
 */

/**
 * 垂直滚动
 *
 * 例子
 *
 * new Vertical({
 *     gun: ".scroll-ele",
 *     clip: [".horizontal", ".clearfix"],
 *     bullets: ["<li>第一条</li>", "<li>第二条</li>", "<li>第三条</li>"],
 *     distance: -0.5
 * })
 * 生成一个垂直滚动的字幕
 *
 */

var scroxt = {};
scroxt.Horizontal = __WEBPACK_IMPORTED_MODULE_0__horizontal__["default"];
scroxt.Vertical = __WEBPACK_IMPORTED_MODULE_1__vertical__["default"];
window.scroxt = scroxt;


/***/ })
/******/ ]);