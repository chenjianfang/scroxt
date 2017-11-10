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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = isDOM;
/**
 * @param {Element} ele:判断元素
 * @returns {Boolean} true:是元素节点，false:不是
 * @example
 *
 * isDOM(document.body)
 */
function isDOM(ele) {
    if (ele && ele.nodeType) {
        return ele.nodeType === 1;
    }
    else {
        return false;
    }
}


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
/* harmony export (immutable) */ __webpack_exports__["default"] = getEleAttr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDOM__ = __webpack_require__(0);

/**
 * @param {any} css selector
 * @param {string} element attribute
 * @returns {string} attribute value
 * @example
 *
 * getEleAttr(".container","width") // => "200px"
 * getEleAttr(document.body,"height") // => "left"
 *
 */
function getEleAttr(ele, attr) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__isDOM__["default"])(ele)) {
        return window.getComputedStyle(ele, null).getPropertyValue(attr);
    }
    else if (typeof ele === 'string' && document.querySelector(ele)) {
        return window.getComputedStyle(document.querySelector(ele), null).getPropertyValue(attr);
    }
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStyleCSS;
/**
 * @param {string} cssText css文本字符串
 * @returns void
 * @example
 *
 * addStyleCSS("body{display:block}");
 *
 */
function addStyleCSS(cssText) {
    var style = document.createElement('style'), head = document.head || document.getElementsByTagName('head')[0];
    style.type = 'text/css';
    if (style.styleSheet) {
        var func = function () {
            try {
                style.styleSheet.cssText = cssText;
            }
            catch (e) {
                console.error(e);
            }
        };
        //如果当前styleSheet不能用，则异步
        if (style.styleSheet.disabled) {
            setTimeout(func, 10);
        }
        else {
            func();
        }
    }
    else {
        var textNode = document.createTextNode(cssText);
        style.appendChild(textNode);
    }
    head.appendChild(style);
}


/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * class root
 * @param {string} target: 插入滚动弹幕的元素
 * @param {Array<string>} data: 弹幕内容
 * @param {number} speed: 弹幕移动的速度  取值[1-10]
 * @returns voild
 * @example
 *
 * class initital extend root
 *         or
 * new root({
 *     target:"body",
 *     data: ["第一条","第二条","第三条"],
 *     speed:-5
 * })
 *
 */
var root = /** @class */ (function () {
    function root(_a) {
        var target = _a.target, data = _a.data, speed = _a.speed;
        /**
         * [options 构造函数参数]
         * @type {Options}
         */
        this.options = {
            target: "",
            data: [],
            speed: 5
        };
        this.extendOpt(arguments[0]);
        this.targetElement = document.querySelector(this.options.target);
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
     * [createElement 生成滚动元素]
     * @param {string = ""} className [滚动元素类名]
     * @return {Array<HTMLElement>} divBox [滚动元素数组]
     */
    root.prototype.createElement = function (className) {
        if (className === void 0) { className = ""; }
        // const scope = ~~(Math.random()*100) + (+new Date());
        var target = this.targetElement;
        var divBox = [];
        var divWrapElement = document.querySelector(".scroxt-wrapper");
        if (!divWrapElement) {
            divWrapElement = document.createElement('div');
            divWrapElement.className = "scroxt-wrapper";
            target.appendChild(divWrapElement);
        }
        for (var i = 0, len = this.options.data.length; i < len; i++) {
            var div = document.createElement('div');
            div.className = className;
            var text = document.createTextNode(this.options.data[i]);
            div.appendChild(text);
            divWrapElement.appendChild(div);
            divBox.push(div);
        }
        return divBox;
    };
    return root;
}());
/* harmony default export */ __webpack_exports__["default"] = (root);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = removeElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDOM__ = __webpack_require__(0);

/**
 * @param {Element} ele:删除的元素的css选择器
 * @example
 *
 * removeElement(".content")
 
 * removeElement("[data-id='2014']")
 */
function removeElement(ele) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__isDOM__["default"])(ele)) {
        ele.parentNode.removeChild(ele);
    }
    else if (typeof ele === 'string' && document.querySelector(ele)) {
        var element = document.querySelector(ele);
        element.parentNode.removeChild(element);
    }
    else {
        console.error("参数错误");
    }
}


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_removeElement__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_addStyleCSS__ = __webpack_require__(3);
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
 * class Vertical   垂直滚动
 * @returns voild
 */
var Vertical = /** @class */ (function (_super) {
    __extends(Vertical, _super);
    function Vertical(opt) {
        var _this = _super.call(this, opt) || this;
        /**
         * [targetHeight target高度]
         * @type {number}
         */
        _this.targetHeight = 0;
        /**
         * [divWrapElementHeight 元素总宽度]
         * @type {number}
         */
        _this.divWrapElementHeight = 0;
        /**
         * [distance 移动的距离]
         * @type {number}
         */
        _this.distance = 0;
        _this.targetHeight = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(_this.targetElement, 'height'));
        _this.createStyle();
        _this.startRun();
        return _this;
    }
    /**
     * [createStyle 创建内嵌css]
     */
    Vertical.prototype.createStyle = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__internal_addStyleCSS__["default"])("\n    \t\t\n    \t");
    };
    Vertical.prototype.startRun = function () {
        this.divWrapElementHeight = this.createVertical();
        if (this.targetHeight > this.divWrapElementHeight)
            return;
        this.STRun();
    };
    /**
     * [createVertical 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:垂直滚动元素集
     */
    Vertical.prototype.createVertical = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__internal_removeElement__["default"])(".scroxt-wrapper");
        var verticalArr1 = this.createElement("scroxt-vertical");
        var verticalArr2 = this.createElement("scroxt-vertical");
        this.divWrapElement = document.querySelector(".scroxt-wrapper");
        var divWrapElementHeight = this.computeHeight(verticalArr1.concat(verticalArr2));
        return divWrapElementHeight;
    };
    /**
     * [computeWidth 计算元素宽度]
     * @param {Array<HTMLElement>} ElementArr [元素集合]
     */
    Vertical.prototype.computeHeight = function (ElementArr) {
        var height = 0;
        for (var i = 0, len = ElementArr.length; i < len; i++) {
            height += Math.ceil(+(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(ElementArr[i], "height").replace("px", "")));
        }
        return height;
    };
    /**
     * [STRun 定时器]
     */
    Vertical.prototype.STRun = function () {
        this.STMove();
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__["default"])(function () {
            this.STRun();
        }.bind(this));
    };
    /**
     * [STMove 一帧移动]
     */
    Vertical.prototype.STMove = function () {
        if (this.options.speed < 0) {
            if (this.distance <= -this.divWrapElementHeight / 2) {
                this.createVertical();
                this.distance = 0;
            }
        }
        else {
            if (this.distance >= this.targetHeight - this.divWrapElementHeight / 2) {
                this.createVertical();
                this.distance = this.targetHeight - this.divWrapElementHeight;
            }
        }
        this.divWrapElement.style.transform = "translate3d(0px, " + this.distance + "px, 0px)";
        this.divWrapElement.style.webkitTransform = "translate3d(0px, " + this.distance + "px, 0px)";
        this.distance += this.options.speed * 0.1;
    };
    return Vertical;
}(__WEBPACK_IMPORTED_MODULE_0__root__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Vertical);


/***/ })
/******/ ]);