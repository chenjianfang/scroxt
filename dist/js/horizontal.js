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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
        console.log("参数错误");
    }
}


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
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
 * class Horizontal
 * @returns voild
 */
var Horizontal = /** @class */ (function (_super) {
    __extends(Horizontal, _super);
    function Horizontal(_a) {
        var target = _a.target, data = _a.data, speed = _a.speed, _b = _a.gap, gap = _b === void 0 ? 20 : _b;
        var _this = _super.call(this, { target: target, data: data, speed: speed }) || this;
        /**
         * [sumWidth 水平滚动元素总宽度]
         * @type {number}
         */
        _this.sumWidth = 0;
        /**
         * [distance 移动的距离]
         * @type {number}
         */
        _this.distance = 0;
        /**
         * [targetWidth target宽度]
         * @type {number}
         */
        _this.targetWidth = 0;
        /**
         * [divWrapElementWidth 元素总宽度]
         * @type {number}
         */
        _this.divWrapElementWidth = 0;
        /**
         * [targetElementBorderWidth target border width]
         * @type {number}
         */
        _this.targetElementBorderWidth = 0;
        _this.scroxtGap = gap;
        _this.createStyle();
        _this.init();
        return _this;
    }
    /**
     * [createStyle 创建内嵌css]
     */
    Horizontal.prototype.createStyle = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__internal_addStyleCSS__["default"])("\n            .scroxt-wrapper::after{\n                display: block;\n                content: \"\";\n                clear: both;\n            }\n            .scroxt-horizontal{\n                float: left;\n                margin-right: " + this.scroxtGap + "px;\n                white-space: nowrap;\n            }\n        ");
    };
    /**
     * [init 入口]
     */
    Horizontal.prototype.init = function () {
        this.targetWidth = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(this.targetElement, 'width'));
        this.targetElementBorderWidth = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(this.targetElement, 'border-width'));
        this.createHorizontal();
        if (this.divWrapElementWidth < this.targetWidth)
            return;
        this.STRun();
    };
    /**
     * [createHorizontal 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:水平滚动元素集
     */
    Horizontal.prototype.createHorizontal = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__internal_removeElement__["default"])(".scroxt-wrapper");
        var ElementArr1 = this.createElement("scroxt-horizontal");
        var ElementArr2 = this.createElement("scroxt-horizontal");
        var ElementArr = ElementArr1.concat(ElementArr2);
        this.divWrapElementWidth = this.computeWidth(ElementArr) + ElementArr.length * this.scroxtGap;
        var divWrapElement = document.querySelector(".scroxt-wrapper");
        divWrapElement.style.width = this.divWrapElementWidth + 'px';
        return divWrapElement;
    };
    /**
     * [computeWidth 计算元素宽度]
     * @param {Array<HTMLElement>} ElementArr [元素集合]
     */
    Horizontal.prototype.computeWidth = function (ElementArr) {
        var width = 0;
        for (var i = 0, len = ElementArr.length; i < len; i++) {
            width += Math.ceil(+(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(ElementArr[i], "width").replace("px", "")));
        }
        return width;
    };
    /**
     * [STRun 定时运行]
     */
    Horizontal.prototype.STRun = function () {
        this.STMove();
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__["default"])(function () {
            this.STRun();
        }.bind(this));
    };
    /**
     * [STMove 单位帧移动]
     */
    Horizontal.prototype.STMove = function () {
        var divWrapElement = document.querySelector(".scroxt-wrapper");
        var rectObj = divWrapElement.getBoundingClientRect();
        var divWrapElementHalfPosition = rectObj.left + (rectObj.right - rectObj.left) / 2;
        var targetRect = this.targetElement.getBoundingClientRect();
        if (this.options.speed < 0) {
            var targetLeftPosition = targetRect.left + this.targetElementBorderWidth;
            if (divWrapElementHalfPosition + this.options.speed * 0.1 <= targetLeftPosition) {
                this.distance = 0;
                divWrapElement = this.createHorizontal();
                divWrapElement.style.left = "0px";
                divWrapElement.style.marginLeft = "0px";
            }
        }
        else {
            var targetRightPosition = targetRect.right - this.targetElementBorderWidth * 2;
            if (divWrapElementHalfPosition + this.options.speed * 0.1 >= targetRightPosition) {
                this.distance = -this.divWrapElementWidth + this.targetWidth;
                divWrapElement = this.createHorizontal();
                divWrapElement.style.right = "0px";
                divWrapElement.style.marginRight = "0px";
            }
        }
        divWrapElement.style.transform = "translate3d(" + this.distance + "px, 0px, 0px)";
        divWrapElement.style.webkitTransform = "translate3d(" + this.distance + "px, 0px, 0px)";
        this.distance += this.options.speed * 0.1;
    };
    return Horizontal;
}(__WEBPACK_IMPORTED_MODULE_0__root__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Horizontal);


/***/ })
/******/ ]);