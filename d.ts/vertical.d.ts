import root from './root';
/**
 * class Vertical   垂直滚动
 * @returns voild
 */
declare class Vertical extends root {
    /**
     * [targetHeight target高度]
     * @type {number}
     */
    private targetHeight;
    /**
     * [divWrapElementHeight 元素总高度]
     * @type {number}
     */
    private divWrapElementHeight;
    /**
     * [distance 移动的距离]
     * @type {number}
     */
    private distance;
    /**
     * [ST move定时器]
     * @type {Number}
     */
    private ST;
    constructor(opt: any);
    startRun(): void;
    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(): void;
    /**
     * [createVertical 创建水平滚动元素]
     * @returns {HTMLElement} 子元素集总高度
     */
    createVertical(): number;
    /**
     * [computeWidth 计算元素宽度]
     * @param {Array<HTMLElement>} ElementArr [元素集合]
     */
    computeHeight(ElementArr: any): number;
    /**
     * [STRun 定时器]
     */
    STRun(): void;
    /**
     * [STMove 一帧移动]
     */
    STMove(): void;
    /**
     * [stopMove 停止移动]
     */
    stopMove(): void;
    /**
     * [startMove 开始移动]
     */
    startMove(): void;
}
export default Vertical;
