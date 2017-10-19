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
/* 2 */
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = getEleAttr;
/**
 * @param {string} css selector
 * @param {string} element attribute
 * @returns {string} attribute value
 * @example
 *
 * getEleAttr(".container","width") // => "200px"
 * getEleAttr(".container","cssFloat") // => "left"
 *
 */
function getEleAttr(ele, attr) {
    return window.getComputedStyle(document.querySelector(ele), null).getPropertyValue(attr);
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
/* harmony default export */ __webpack_exports__["default"] = (Event);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_setTimeTask__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_clearTimeTask__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_Event__ = __webpack_require__(4);
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
         * [currentTime 当前时间 \s]
         * @type {number}
         */
        _this.currentTime = 0;
        /**
         * [sumTime 播放了的时间 \s]
         * @type {number}
         */
        _this.sumTime = 0;
        /**
         * [videoEnd 视频播放结束状态 true为播放结束]
         * @type {Boolean}
         */
        _this.videoEnd = false;
        /**
         * [barrageWrap 弹幕的索引]
         * @type {Array<Element>}
         */
        // private barrageWrap:Array<Element> = [];
        // private barrageWrap: Element[] = [];
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
        _this.videoWidth = parseInt(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(_this.video, "width"));
        _this.MAX_LINE = ~~(parseInt(Object(__WEBPACK_IMPORTED_MODULE_2__internal_getEleAttr__["default"])(_this.video, "height")) / _this.lineHeight);
        _this.distance = -5;
        _this.colorFont = ['#ffff38', '#c80115', '#189add'];
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
    Barrage.prototype.startRun = function () {
        //添加类名：scroxt-video
        var className = this.scroxtVideo.className;
        this.scroxtVideo.className = className.indexOf('scroxt-video') > -1 ? className : className + ' scroxt-video';
        this.playEvent();
    };
    /**
     * 视频重播
     */
    Barrage.prototype.restart = function () {
        this.sumTime = 0;
        this.tempDataTime = JSON.parse(JSON.stringify(this.dataTime));
    };
    /**
     * 视频加载到可以播放，点击播放
     */
    Barrage.prototype.playEvent = function () {
        var that = this;
        if (this.scroxtVideo.readyState == 4) {
            that.videoClickEvent();
        }
        else {
            this.scroxtVideo.addEventListener("canplaythrough", function () {
                that.videoClickEvent();
            }, false);
            this.scroxtVideo.load(); // 需要主动触发下，不然不会加载
        }
    };
    /**
     * [videoClickEvent videoElement绑定点击事件]
     */
    Barrage.prototype.videoClickEvent = function () {
        var that = this;
        that.scroxtVideo.addEventListener("click", function (e) {
            e.stopImmediatePropagation();
            if (that.videoEnd) {
                that.videoEnd = false;
                that.restart();
            }
            that.videoStatusMethod();
        }, false);
        that.scroxtVideo.addEventListener("ended", function () {
            that.videoEnd = true;
            that.readyShowBarrage = [];
        });
    };
    /**
     * 视频播放暂停
     */
    Barrage.prototype.videoStatusMethod = function () {
        if (this.scroxtVideo.paused) {
            this.currentTime = +new Date();
            this.scroxtVideo.play();
            this.intervalRun();
        }
        else {
            this.scroxtVideo.pause();
            this.intervalStop();
        }
    };
    /**
     * [timeUpdate 播放时间更新]
     */
    Barrage.prototype.timeUpdate = function () {
        this.sumTime += ((+new Date()) - this.currentTime) / 1000;
        this.currentTime = +new Date();
        this.distribution(this.sumTime);
    };
    /**
    * 分配弹幕，决定弹幕出场
    */
    Barrage.prototype.distribution = function (sumTime) {
        var len = this.tempDataTime.length;
        var i = 0;
        while (len !== 0) {
            if (this.tempDataTime[i].time < sumTime) {
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
        if (!len || this.barrageWrap.length > 50)
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
        this.runST = Object(__WEBPACK_IMPORTED_MODULE_0__internal_setTimeTask__["default"])(function () {
            this.createBarrage();
            this.moveLine();
            if (!this.scroxtVideo.paused) {
                this.timeUpdate();
            }
            this.intervalRun();
        }.bind(this));
    };
    /**
     * 停止播放
     */
    Barrage.prototype.intervalStop = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__internal_clearTimeTask__["default"])(this.runST);
    };
    return Barrage;
}(__WEBPACK_IMPORTED_MODULE_3__internal_Event__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Barrage);


/***/ }),
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


/***/ }),
/* 7 */
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
        this.scroxtUlEle.style.transform = "translate3d(0px, " + this.distance + "px, 0px)";
        this.scroxtUlEle.style.webkitTransform = "translate3d(0px, " + this.distance + "px, 0px)";
    };
    return Vertical;
}(__WEBPACK_IMPORTED_MODULE_0__root__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Vertical);


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__horizontal__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vertical__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__barrage__ = __webpack_require__(5);
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
 *
 */

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

var scroxt = {};
scroxt.Horizontal = __WEBPACK_IMPORTED_MODULE_0__horizontal__["default"];
scroxt.Vertical = __WEBPACK_IMPORTED_MODULE_1__vertical__["default"];
scroxt.Barrage = __WEBPACK_IMPORTED_MODULE_2__barrage__["default"];
window.scroxt = scroxt;


/***/ })
/******/ ]);