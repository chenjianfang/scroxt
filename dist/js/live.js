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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony default export */ __webpack_exports__["default"] = (clearTimeTask);


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_addStyleCSS__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_setTimeTask__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_clearTimeTask__ = __webpack_require__(4);




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
        this.TARGET_WIDTH = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__["default"])(this.targetElement, "width"));
        this.MAX_LINE = ~~(parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__["default"])(this.targetElement, "height")) / this.lineHeight);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_addStyleCSS__["default"])("\n            .multi-barrage-line{\n              position: absolute;\n              display: inline-block;\n              top: 0;\n              user-select:none;\n              white-space: pre;\n              color: #fff;\n              font-size: 25px;\n              font-family:SimHei, \"Microsoft JhengHei\", Arial, Helvetica, sans-serif;\n              font-weight:bold;\n              line-height: 1.125;\n              text-shadow:rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;\n              transition:-webkit-transform 0s linear;\n              z-index: 1;\n              pointer-events: none;\n            }\n        ");
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
        var refWidth = parseInt(Object(__WEBPACK_IMPORTED_MODULE_0__internal_getEleAttr__["default"])(div, "width"));
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
        this.runST = Object(__WEBPACK_IMPORTED_MODULE_2__internal_setTimeTask__["default"])(function () {
            this.moveLine();
            this.createBarrage();
            this.intervalRun();
        }.bind(this));
    };
    /**
     * 停止播放
     */
    Live.prototype.intervalStop = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__internal_clearTimeTask__["default"])(this.runST);
    };
    return Live;
}());
/* harmony default export */ __webpack_exports__["default"] = (Live);


/***/ })
/******/ ]);