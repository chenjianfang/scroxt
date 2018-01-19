(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (setTimeTask);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 取消定时器profix
 *
 * 例子
 *
 * clearTimeTask(st);
 */
var clearTimeTask = (function () {
    return window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        window.clearTimeout;
})();
/* harmony default export */ __webpack_exports__["a"] = (clearTimeTask);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getEleAttr;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDOM__ = __webpack_require__(5);

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
    if (Object(__WEBPACK_IMPORTED_MODULE_0__isDOM__["a" /* default */])(ele)) {
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
/* harmony export (immutable) */ __webpack_exports__["a"] = addStyleCSS;
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        var divBox = [];
        var divWrapElement = document.querySelector(".scroxt-wrapper");
        if (!divWrapElement) {
            divWrapElement = document.createElement('div');
            divWrapElement.className = "scroxt-wrapper";
            this.targetElement = document.querySelector(this.options.target);
            this.targetElement.appendChild(divWrapElement);
        }
        for (var i = 0, len = this.options.data.length; i < len; i++) {
            var div = document.createElement('div');
            div.className = className;
            // const text = document.createTextNode(this.options.data[i]);
            var text = this.options.data[i];
            div.innerHTML = text;
            // div.appendChild(text);
            divWrapElement.appendChild(div);
            divBox.push(div);
        }
        return divBox;
    };
    return root;
}());
/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDOM;
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDOM__ = __webpack_require__(5);

/**
 * @param {Element} ele:删除的元素的css选择器
 * @example
 *
 * removeElement(".content")
 
 * removeElement("[data-id='2014']")
 */
function removeElement(ele) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__isDOM__["a" /* default */])(ele)) {
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__horizontal__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertical__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barrage__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__live__ = __webpack_require__(12);




/**
 * [scroxt scroxt全局对象]
 * @type {any}
 */
var scroxt = {};
/**
 * class Horizontal 水平滚动
 * @param {target:string,data:string[],speed:number} obj 类构造参数
 * target:target目标容器的css选择器。data:数据的数组，speed：弹幕滚动速度[0-10]
 * @returns voild
 * @example
 *
 * new scroxt.Horizontal({
 *     target: ".my-ele",
 *     data: ['第一条','第2条','第3条'],
 *     speed: -5
 * });
 */
Object.defineProperty(scroxt, 'Horizontal', {
    value: __WEBPACK_IMPORTED_MODULE_0__horizontal__["a" /* default */],
    writable: false,
    enumerable: false,
    configurable: false
});
/**
 * class Vertical 垂直滚动
 * @param {target:string,data:string[],speed:number} obj 类构造参数
 * target:target目标容器的css选择器。data:数据的数组，speed：弹幕滚动速度[0-10]
 * @returns voild
 * @example
 *
 * new scroxt.Vertical({
 *     target: ".my-ele",
 *     data: ['第一条','第2条','第3条'],
 *     speed: -5
 * });
 */
Object.defineProperty(scroxt, 'Vertical', {
    value: __WEBPACK_IMPORTED_MODULE_1__vertical__["a" /* default */],
    writable: false,
    enumerable: false,
    configurable: false
});
/**
 * class Barrage
 * @param {video: string,dataTime: {data:string,time:number}[]} obj 类构造参数
 * video:video标签的css选择器。dataTime:数据的数组对象，data:弹幕的内容，time弹幕出现的时间(单位/秒)
 * @returns voild
 * @example
 *
 * new scroxt.Barrage({
 *     video: "#my-video",
 *     dataTime: [{
 *         data:"第一条",  // 第一条弹幕
 *         time:1          // 第一条弹幕出现的时间 1秒
 *     },{
 *         data:"第二条",  // 第二条弹幕
 *         time:1		   // 第一条弹幕出现的时间 1秒
 *     },{
 *         data:"第三条",  // 第三条弹幕
 *         time:2          // 第一条弹幕出现的时间 2秒
 *     }]
 * });
 */
Object.defineProperty(scroxt, 'Barrage', {
    value: __WEBPACK_IMPORTED_MODULE_2__barrage__["a" /* default */],
    writable: false,
    enumerable: false,
    configurable: false
});
/**
 * class Barrage
 * @param {target: string,strongLock: boolean} obj 类构造参数
 * target:target标签的css选择器。[strongLock]:强制模式，默认false
 * @returns voild
 * @example
 *
 *1.非强制模式，所有弹幕都会出现，但是某些浏览器可能会因为弹幕数量过多导致卡顿
 * var scroxtLive = new scroxt.Live({
 *     target: ".scroxt-video-barrage"
 * });
 *scroxtLive.addBarrage("第一条弹幕");
 *scroxtLive.addBarrage("第二条弹幕");
 *
 *2.强制模式，页面最多出现65条弹幕.页面当有65条弹幕的时候，添加的任何弹幕将会扔掉直至屏幕中的弹幕消失
 * new scroxt.Live({
 *     target: ".scroxt-video-barrage",
 *     strongLock: true
 * });
 *scroxtLive.addBarrage("第一条弹幕");
 *scroxtLive.addBarrage("第二条弹幕");
 *
 *3.强制模式，强制模式下，由于弹幕可能会被扔掉，但用户自己发弹幕不能扔！！！用户本人发的弹幕addBarrage第二个参数为true。已达到欺骗效果
 * new scroxt.Live({
 *     target: ".scroxt-video-barrage",
 *     strongLock: true
 * });
 *scroxtLive.addBarrage("这是我自己的弹幕,只有用户本人能看到",true);
 *
 *
 */
Object.defineProperty(scroxt, 'Live', {
    value: __WEBPACK_IMPORTED_MODULE_3__live__["a" /* default */],
    writable: false,
    enumerable: false,
    configurable: false
});
window.scroxt = scroxt;
/* harmony default export */ __webpack_exports__["default"] = (scroxt);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_clearTimeTask__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_removeElement__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_addStyleCSS__ = __webpack_require__(3);
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
        var target = _a.target, data = _a.data, speed = _a.speed, _b = _a.gap, gap = _b === void 0 ? 10 : _b;
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
        /**
         * [ST move定时器]
         * @type {Number}
         */
        _this.ST = 0;
        _this.scroxtGap = gap;
        _this.createStyle();
        _this.init();
        return _this;
    }
    /**
     * [createStyle 创建内嵌css]
     */
    Horizontal.prototype.createStyle = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__internal_addStyleCSS__["a" /* default */])("\n            .scroxt-wrapper::after{\n                display: block;\n                content: \"\";\n                clear: both;\n            }\n            .scroxt-horizontal{\n                float: left;\n                margin-right: " + this.scroxtGap + "px;\n                white-space: nowrap;\n                box-sizing: border-box;\n            }\n        ");
    };
    /**
     * [init 入口]
     */
    Horizontal.prototype.init = function () {
        this.targetWidth = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__["a" /* default */])(this.targetElement, 'width'));
        this.targetElementBorderWidth = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__["a" /* default */])(this.targetElement, 'border-width'));
        this.createHorizontal();
        //当内容宽度小于盒子宽度
        if (this.divWrapElementWidth / 2 < this.targetWidth) {
            Object(__WEBPACK_IMPORTED_MODULE_4__internal_removeElement__["a" /* default */])(".scroxt-wrapper");
            var ElementArr = this.createElement("scroxt-horizontal");
            this.divWrapElementWidth = this.computeWidth(ElementArr) + ElementArr.length * this.scroxtGap;
            var divWrapElement = document.querySelector(".scroxt-wrapper");
            divWrapElement.style.width = this.divWrapElementWidth + 'px';
            divWrapElement.style.marginLeft = "0px";
            return;
        }
        ;
        this.STRun();
    };
    /**
     * [createHorizontal 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:水平滚动元素集
     */
    Horizontal.prototype.createHorizontal = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__internal_removeElement__["a" /* default */])(".scroxt-wrapper");
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
            width += Math.ceil(+(Object(__WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__["a" /* default */])(ElementArr[i], "width").replace("px", "")));
        }
        return width;
    };
    /**
     * [STRun 定时运行]
     */
    Horizontal.prototype.STRun = function () {
        if (this.divWrapElementWidth / 2 < this.targetWidth)
            return;
        this.STMove();
        this.ST = Object(__WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__["a" /* default */])(function () {
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
    /**
     * [stopMove 停止移动]
     */
    Horizontal.prototype.stopMove = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__internal_clearTimeTask__["a" /* default */])(this.ST);
        this.ST = 0;
    };
    /**
     * [startMove 开始移动]
     */
    Horizontal.prototype.startMove = function () {
        if (this.ST === 0) {
            this.STRun();
        }
    };
    return Horizontal;
}(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Horizontal);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_clearTimeTask__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__internal_removeElement__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__internal_addStyleCSS__ = __webpack_require__(3);
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
         * [divWrapElementHeight 元素总高度]
         * @type {number}
         */
        _this.divWrapElementHeight = 0;
        /**
         * [distance 移动的距离]
         * @type {number}
         */
        _this.distance = 0;
        /**
         * [ST move定时器]
         * @type {Number}
         */
        _this.ST = 0;
        _this.targetHeight = parseFloat(Object(__WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__["a" /* default */])(_this.targetElement, 'height'));
        _this.createStyle();
        _this.startRun();
        return _this;
    }
    Vertical.prototype.startRun = function () {
        this.divWrapElementHeight = this.createVertical();
        if (this.targetHeight > this.divWrapElementHeight / 2) {
            Object(__WEBPACK_IMPORTED_MODULE_4__internal_removeElement__["a" /* default */])(".scroxt-wrapper");
            this.createElement("scroxt-vertical");
            return;
        }
        ;
        this.STRun();
    };
    /**
     * [createStyle 创建内嵌css]
     */
    Vertical.prototype.createStyle = function () {
        Object(__WEBPACK_IMPORTED_MODULE_5__internal_addStyleCSS__["a" /* default */])("\n            .scroxt-vertical{\n                box-sizing: border-box;\n            }\n        ");
    };
    /**
     * [createVertical 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:垂直滚动元素集
     */
    Vertical.prototype.createVertical = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__internal_removeElement__["a" /* default */])(".scroxt-wrapper");
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
            height += Math.ceil(+(Object(__WEBPACK_IMPORTED_MODULE_3__internal_getEleAttr__["a" /* default */])(ElementArr[i], "height").replace("px", "")));
        }
        return height;
    };
    /**
     * [STRun 定时器]
     */
    Vertical.prototype.STRun = function () {
        if (this.targetHeight > this.divWrapElementHeight / 2)
            return;
        this.STMove();
        this.ST = Object(__WEBPACK_IMPORTED_MODULE_1__internal_setTimeTask__["a" /* default */])(function () {
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
    /**
     * [stopMove 停止移动]
     */
    Vertical.prototype.stopMove = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__internal_clearTimeTask__["a" /* default */])(this.ST);
        this.ST = 0;
    };
    /**
     * [startMove 开始移动]
     */
    Vertical.prototype.startMove = function () {
        if (this.ST === 0) {
            this.STRun();
        }
    };
    return Vertical;
}(__WEBPACK_IMPORTED_MODULE_0__root__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Vertical);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_setTimeTask__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_clearTimeTask__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_Event__ = __webpack_require__(11);
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
 * class Barrage
 * @returns voild
 */
var Barrage = /** @class */ (function (_super) {
    __extends(Barrage, _super);
    function Barrage(_a) {
        var video = _a.video, dataTime = _a.dataTime;
        var _this = _super.call(this) || this;
        /**
         * [videoEnd 视频播放结束状态 true为播放结束]
         * @type {Boolean}
         */
        _this.videoEnd = false;
        /**
         * [barrageWrap 弹幕的索引]
         * @type {Array<Element>}
         */
        _this.barrageWrap = [];
        /**
         * [readyShowBarrage 准备出场的弹幕]
         * @type {Array<String>}
         */
        _this.readyShowBarrage = [];
        /**
         * [createStaticBarrage 静止的弹幕]
         */
        _this.staticBarrageST = null;
        /**
         * 开始播放
         */
        _this.runST = 0;
        _this.video = video;
        _this.scroxtVideo = document.querySelector(_this.video);
        _this.dataTime = _this.quickSort(dataTime);
        console.log(_this.dataTime);
        _this.tempDataTime = JSON.parse(JSON.stringify(_this.dataTime));
        _this.lineHeight = 28;
        _this.videoWidth = parseInt(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["a" /* default */])(_this.video, "width"));
        _this.MAX_LINE = ~~(parseInt(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["a" /* default */])(_this.video, "height")) / _this.lineHeight);
        _this.MAX_NUM = 50;
        _this.distance = -5;
        _this.colorFont = ['#ffff38', '#c80115', '#189add'];
        _this.createStyle();
        _this.startRun();
        return _this;
    }
    /**
     * [quickSort 快速排序]
     * @param {number}[]} dataTime [description]
     */
    Barrage.prototype.quickSort = function (dataTime) {
        if (dataTime.length <= 1)
            return dataTime;
        var numValue = dataTime.splice(Math.floor(dataTime.length / 2), 1)[0];
        var left = [];
        var right = [];
        for (var i = 0, len = dataTime.length; i < len; i++) {
            if (dataTime[i]['time'] < numValue['time']) {
                left.push(dataTime[i]);
            }
            else {
                right.push(dataTime[i]);
            }
        }
        return this.quickSort(left).concat(numValue, this.quickSort(right));
    };
    /**
     * [createStyle 创建内嵌css]
     */
    Barrage.prototype.createStyle = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__internal_addStyleCSS__["a" /* default */])("\n            .multi-barrage-line{\n              position: absolute;\n              display: inline-block;\n              top: 0;\n              user-select:none;\n              white-space: pre;\n              color: #fff;\n              font-size: 25px;\n              font-family:SimHei, \"Microsoft JhengHei\", Arial, Helvetica, sans-serif;\n              font-weight:bold;\n              line-height: 1.125;\n              text-shadow:rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n              transition:-webkit-transform 0s linear;\n              z-index: 1;\n              pointer-events: none;\n            }\n            .static-barrage-line{\n              position: absolute;\n              left: 50%;\n              transform:translateX(-50%);\n              -webkit-transform:translateX(-50%);\n              top: 0;\n              z-index: 2;\n            }\n        ");
    };
    Barrage.prototype.startRun = function () {
        //添加类名：scroxt-video
        var className = this.scroxtVideo.className;
        this.scroxtVideo.className = className.indexOf('scroxt-video') > -1 ? className : className + ' scroxt-video';
        this.timeUpdate();
    };
    /**
     * 视频播放
     */
    Barrage.prototype.play = function () {
        if (this.scroxtVideo.paused) {
            this.scroxtVideo.play();
            this.intervalRun();
        }
    };
    /**
     * 视频暂停
     */
    Barrage.prototype.stop = function () {
        if (!this.scroxtVideo.paused) {
            this.scroxtVideo.pause();
            this.intervalStop();
        }
    };
    /**
     * 视频重播
     */
    Barrage.prototype.restart = function () {
        this.readyShowBarrage = [];
        this.tempDataTime = JSON.parse(JSON.stringify(this.dataTime));
        this.scroxtVideo.currentTime = 0;
        this.barrageWrap.forEach(function (value, index) {
            var parentElement = value["element"].parentNode;
            if (parentElement)
                parentElement.removeChild(value["element"]);
        });
        this.barrageWrap = [];
    };
    /**
     * [moveInterval 前进或后退的秒数，正数表示快进s秒，负数表示后退s秒]
     * @param {number=0} s [快进的秒数]
     */
    Barrage.prototype.moveInterval = function (s) {
        if (s === void 0) { s = 0; }
        this.readyShowBarrage = [];
        this.tempDataTime = JSON.parse(JSON.stringify(this.dataTime));
        this.scroxtVideo.currentTime += s;
        this.barrageWrap.forEach(function (value, index) {
            var parentElement = value["element"].parentNode;
            if (parentElement)
                parentElement.removeChild(value["element"]);
        });
        this.barrageWrap = [];
    };
    /**
     * [timeUpdate 播放时间更新]
     */
    Barrage.prototype.timeUpdate = function () {
        this.scroxtVideo.addEventListener("timeupdate", function () {
            this.distribution(this.scroxtVideo.currentTime);
        }.bind(this));
    };
    /**
    * 分配弹幕，决定弹幕出场
    */
    Barrage.prototype.distribution = function (currentTime) {
        var len = this.tempDataTime.length;
        var i = 0;
        while (len !== 0) {
            if (this.tempDataTime[i].time < currentTime) {
                if (this.tempDataTime[i].time >= currentTime - 2)
                    this.readyShowBarrage.push(this.tempDataTime[i]["data"]);
                this.tempDataTime.shift();
                len = this.tempDataTime.length;
            }
            else {
                break;
            }
        }
    };
    /**
     * [createBarrage 创建弹幕from readyShowBarrage]
     */
    Barrage.prototype.createBarrage = function () {
        var len = this.readyShowBarrage.length;
        if (!len || this.barrageWrap.length > this.MAX_NUM)
            return;
        for (var i = 0; i < len; i++) {
            if (i > this.MAX_LINE) {
                if (len > 20 && !this.staticBarrageST) {
                    this.createStaticBarrage(this.readyShowBarrage.splice(0, this.MAX_LINE));
                }
                break;
            }
            var lineIndex = i % this.MAX_LINE;
            //当前行最后一个元素是否完全出场
            var currentLineArr = document.querySelectorAll("[data-line='" + lineIndex + "']");
            var currentLineLength = currentLineArr.length;
            var currentLineLastElement = void 0;
            if (currentLineLength > 0) {
                currentLineLastElement = currentLineArr[currentLineLength - 1];
                var width = +currentLineLastElement.getAttribute('data-width');
                var move = +currentLineLastElement.getAttribute('data-move');
                if (Math.abs(move) + width > this.videoWidth) {
                    continue;
                }
            }
            var showCurrent = this.readyShowBarrage.shift();
            var refer = Math.floor(Math.random() * 1000) + (+new Date()) + i;
            var translatePosition = i % 2 === 0 ? 10 : 0;
            var div = document.createElement('div');
            div.className = "multi-barrage-line";
            var textNode = document.createTextNode("" + showCurrent);
            div.appendChild(textNode);
            this.scroxtVideo.parentNode.appendChild(div);
            var refWidth = parseInt(window.getComputedStyle(div, null).getPropertyValue("width"));
            var distance = refWidth / 600 >= 0.5 ? 0.5 : refWidth / 600;
            //超长随机颜色
            var color = "#fff";
            if (distance === 0.5) {
                color = this.colorFont[~~(Math.random() * this.colorFont.length)];
            }
            this.barrageWrap.push({
                element: div,
                scroxt: refer,
                line: lineIndex,
                move: this.videoWidth + translatePosition + 10,
                width: refWidth,
                distance: distance,
                color: color
            });
        }
    };
    Barrage.prototype.createStaticBarrage = function (dataTime) {
        var _loop_1 = function (i, len) {
            var lineIndex = i % this_1.MAX_LINE;
            var div = document.createElement('div');
            div.className = "multi-barrage-line static-barrage-line";
            div.style.top = lineIndex * this_1.lineHeight + "px";
            div.style.color = this_1.colorFont[~~(Math.random() * this_1.colorFont.length)];
            var textNode = document.createTextNode("" + dataTime[i]);
            div.appendChild(textNode);
            this_1.staticBarrageST = setTimeout(function () {
                this.staticBarrageST = null;
                this.scroxtVideo.parentNode.removeChild(div);
            }.bind(this_1), 3000);
            this_1.scroxtVideo.parentNode.appendChild(div);
        };
        var this_1 = this;
        for (var i = 0, len = dataTime.length; i < len; i++) {
            _loop_1(i, len);
        }
    };
    /**
     * [moveLine 页面弹幕移动]
     */
    Barrage.prototype.moveLine = function () {
        for (var i = 0; i < this.barrageWrap.length; i++) {
            var barrage = this.barrageWrap[i];
            var scroxt = barrage['element'];
            var refer = barrage['scroxt'];
            var line = barrage['line'];
            var move = barrage['move'];
            var width = barrage['width'];
            var distance = barrage['distance'];
            var color = barrage['color'];
            if (move <= -width) {
                this.barrageWrap.splice(i, 1);
                i--;
                var parentElement = scroxt.parentNode;
                if (parentElement)
                    parentElement.removeChild(scroxt);
                continue;
            }
            var setMove = move + this.distance * distance + this.distance / 10;
            this.barrageWrap[i]['move'] = setMove;
            scroxt.style.cssText = "color:" + color + ";transform:translate3d(" + setMove + "px," + line * this.lineHeight + "px,0);";
        }
    };
    Barrage.prototype.intervalRun = function () {
        this.runST = Object(__WEBPACK_IMPORTED_MODULE_0__internal_setTimeTask__["a" /* default */])(function () {
            this.createBarrage();
            this.moveLine();
            this.intervalRun();
        }.bind(this));
    };
    /**
     * 停止播放
     */
    Barrage.prototype.intervalStop = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_clearTimeTask__["a" /* default */])(this.runST);
    };
    return Barrage;
}(__WEBPACK_IMPORTED_MODULE_3__internal_Event__["a" /* default */]));
/* harmony default export */ __webpack_exports__["a"] = (Barrage);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 事件
 *
 * 例子
 *
 * clearTimeTask(st);
 */
var Event = /** @class */ (function () {
    function Event() {
        /**
         * [event 事件容器]
         * @type {EventInterface}
         */
        this.events = {};
    }
    /**
     * [on 添加事件]
     * @param {[type]} type [事件名]
     * @param {[type]} foo  [执行函数]
     */
    Event.prototype.on = function (type, foo) {
        if (!this.events[type]) {
            this.events[type] = [foo];
        }
        else {
            this.events[type].push(foo);
        }
    };
    /**
     * [off 删除事件函数]
     * @param {[type]} type [事件名]
     * @param {[type]} foo  [执行函数]
     */
    Event.prototype.off = function (type, foo) {
        this.events[type].splice(this.events[type].indexOf(foo), 1);
    };
    /**
     * [empty 清空事件函数]
     * @param {[type]} type [事件名]
     */
    Event.prototype.empty = function (type) {
        this.events[type] = [];
    };
    /**
     * [triggle 触发执行事件]
     * @param {[type]} type [事件名]
     */
    Event.prototype.triggle = function (type) {
        var foo = this.events[type];
        foo.forEach(function (value) {
            value();
        });
    };
    return Event;
}());
/* harmony default export */ __webpack_exports__["a"] = (Event);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_addStyleCSS__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_setTimeTask__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_clearTimeTask__ = __webpack_require__(1);




/**
 * class Live
 * @returns voild
 */
var Live = /** @class */ (function () {
    function Live(_a) {
        var target = _a.target, _b = _a.strongLock, strongLock = _b === void 0 ? false : _b;
        /**
        * [barrage 弹幕]
        * @type {Array}
        */
        this.barrage = [];
        /**
        * [selfBarrage 弹幕]
        * @type {Array}
        */
        this.selfBarrage = [];
        /**
         * [barrageWrap 弹幕的索引]
         * @type {Array<Element>}
         */
        this.barrageWrap = {};
        // private barrageWrap: {element:Element,line:number,move:number,width:number,speed:number}[] = [];
        /**
         * [MAX_LINE 最大行]
         * @type {number}
         */
        this.MAX_LINE = 4;
        /**
         * [lineHeight 单行行高]
         * @type {number}
         */
        this.lineHeight = 28;
        /**
         * [sumLine 弹幕总数]
         * @type {number}
         */
        this.sumLine = 0;
        /**
         * [lineGap 弹幕初始间隔]
         * @type {number}
         */
        this.lineGap = 10;
        /**
         * 开始播放
         */
        this.runST = 0;
        this.targetElement = document.querySelector(target);
        this.strongLock = strongLock;
        this.TARGET_WIDTH = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__["a" /* default */])(this.targetElement, "width"));
        this.MAX_LINE = ~~(parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__["a" /* default */])(this.targetElement, "height")) / this.lineHeight);
        this.gear = -5;
        this.LINE_LIMIT = 300;
        this.startRun();
    }
    Live.prototype.startRun = function () {
        this.createStyle();
        this.intervalRun();
    };
    /**
     * [createStyle 创建内嵌css]
     */
    Live.prototype.createStyle = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_addStyleCSS__["a" /* default */])("\n            .multi-barrage-line{\n              position: absolute;\n              display: inline-block;\n              top: 0;\n              user-select:none;\n              white-space: pre;\n              color: #fff;\n              font-size: 25px;\n              font-family:SimHei, \"Microsoft JhengHei\", Arial, Helvetica, sans-serif;\n              font-weight:bold;\n              line-height: 1.125;\n              text-shadow:rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n              transition:-webkit-transform 0s linear;\n              z-index: 1;\n              pointer-events: none;\n            }\n        ");
    };
    /**
     * [addBarrage 添加弹幕]
     * @param {string} data [添加弹幕]
     * @param {boolean} self [自己的弹幕]
     */
    Live.prototype.addBarrage = function (data, self) {
        if (self === void 0) { self = false; }
        if (self)
            this.selfBarrage.push(data);
        else
            this.barrage.push(data);
    };
    /**
     * [createBarrage 创建弹幕from readyShowBarrage]
     */
    Live.prototype.createBarrage = function () {
        for (var i = 0, len = this.barrage.length; len > 0 && i < this.MAX_LINE; i++) {
            var text = void 0;
            var lineIndex = i % this.MAX_LINE;
            if (this.selfBarrage.length > 0) {
                text = this.selfBarrage.shift();
            }
            else {
                if (this.strongLock && this.sumLine > 65) {
                    this.barrage = [];
                    break;
                }
                //当前行最后一个元素是否完全出场
                if (this.barrageWrap[lineIndex]) {
                    var len_1 = this.barrageWrap[lineIndex].length;
                    if (len_1 > 0) {
                        var lastNodeObj = this.barrageWrap[lineIndex][len_1 - 1];
                        if (lastNodeObj["move"] + lastNodeObj["width"] > this.TARGET_WIDTH - this.lineGap) {
                            continue;
                        }
                    }
                }
                text = this.barrage.shift();
                len--;
            }
            this.generateBarrage(lineIndex, text);
        }
    };
    Live.prototype.generateBarrage = function (lineIndex, text) {
        var div = document.createElement('div');
        div.className = "multi-barrage-line";
        var textNode = document.createTextNode(text);
        div.appendChild(textNode);
        div.style.opacity = '0';
        this.targetElement.appendChild(div);
        var refWidth = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__["a" /* default */])(div, "width"));
        var speed = refWidth / 600 >= 0.5 ? 0.5 : refWidth / 600;
        if (!this.barrageWrap[lineIndex]) {
            this.barrageWrap[lineIndex] = [{
                    element: div,
                    line: lineIndex,
                    move: this.TARGET_WIDTH,
                    width: refWidth,
                    speed: speed
                }];
        }
        else {
            this.barrageWrap[lineIndex].push({
                element: div,
                line: lineIndex,
                move: this.TARGET_WIDTH,
                width: refWidth,
                speed: speed
            });
        }
    };
    /**
     * [moveLine 页面弹幕移动]
     */
    Live.prototype.moveLine = function () {
        this.sumLine = 0;
        for (var j in this.barrageWrap) {
            var barrageArr = this.barrageWrap[j];
            this.sumLine += barrageArr.length;
            for (var i = 0; i < barrageArr.length; i++) {
                var barrage = barrageArr[i];
                var scroxt = barrage['element'];
                var line = barrage['line'];
                var move = barrage['move'];
                var width = barrage['width'];
                var speed = barrage['speed'];
                if (move <= -width) {
                    barrageArr.splice(i, 1);
                    i--;
                    this.targetElement.removeChild(scroxt);
                    continue;
                }
                var setMove = move + this.gear * speed + this.gear / 10;
                barrage['move'] = setMove;
                scroxt.style.cssText = "transform:translate3d(" + setMove + "px," + line * this.lineHeight + "px,0);opacity=\"1\";";
            }
        }
    };
    Live.prototype.intervalRun = function () {
        this.runST = Object(__WEBPACK_IMPORTED_MODULE_2__internal_setTimeTask__["a" /* default */])(function () {
            this.moveLine();
            this.createBarrage();
            this.intervalRun();
        }.bind(this));
    };
    /**
     * 停止播放
     */
    Live.prototype.intervalStop = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__internal_clearTimeTask__["a" /* default */])(this.runST);
    };
    return Live;
}());
/* harmony default export */ __webpack_exports__["a"] = (Live);


/***/ })
/******/ ]);
});