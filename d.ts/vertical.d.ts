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
     * [divWrapElement 滚动元素集]
     * @type {HTMLElement}
     */
    private divWrapElement;
    /**
     * [divWrapElementHeight 元素总宽度]
     * @type {number}
     */
    private divWrapElementHeight;
    /**
     * [distance 移动的距离]
     * @type {number}
     */
    private distance;
    constructor(opt: any);
    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(): void;
    startRun(): void;
    /**
     * [createVertical 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:垂直滚动元素集
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
}
export default Vertical;
