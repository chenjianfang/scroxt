/**
 * class Live
 * @returns voild
 */
export default class Live {
    /**
     * [HTMLElement 目标元素]
     * @type {[type]}
     */
    private targetElement;
    /**
    * [barrage 弹幕]
    * @type {Array}
    */
    private barrage;
    /**
    * [selfBarrage 弹幕]
    * @type {Array}
    */
    private selfBarrage;
    /**
     * [barrageWrap 弹幕的索引]
     * @type {Array<Element>}
     */
    private barrageWrap;
    /**
     * [MAX_LINE 最大行]
     * @type {number}
     */
    private MAX_LINE;
    /**
     * [lineHeight 单行行高]
     * @type {number}
     */
    private lineHeight;
    /**
     * [TARGET_WIDTH 目标元素宽度]
     * @type {number}
     */
    private TARGET_WIDTH;
    /**
     * [LINE_LIMIT 最大弹幕数量]
     * @type {number}
     */
    private LINE_LIMIT;
    /**
     * [sumLine 弹幕总数]
     * @type {number}
     */
    private sumLine;
    /**
     * [gear 1-10 挡位，移动的距离]
     * @type {number}
     */
    private gear;
    /**
     * [lineGap 弹幕初始间隔]
     * @type {number}
     */
    private lineGap;
    /**
     * [strongLock 强制模式，为了流畅性，可能会造成弹幕缺失]
     * @type {boolean}
     */
    private strongLock;
    constructor({target, strongLock}: {
        target: string;
        strongLock: boolean;
    });
    startRun(): void;
    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(): void;
    /**
     * [addBarrage 添加弹幕]
     * @param {string} data [添加弹幕]
     * @param {boolean} self [自己的弹幕]
     */
    addBarrage(data: any, self?: boolean): void;
    /**
     * [createBarrage 创建弹幕from readyShowBarrage]
     */
    createBarrage(): void;
    generateBarrage(lineIndex: any, text: any): void;
    /**
     * [moveLine 页面弹幕移动]
     */
    moveLine(): void;
    /**
     * 开始播放
     */
    private runST;
    intervalRun(): void;
    /**
     * 停止播放
     */
    intervalStop(): void;
}
