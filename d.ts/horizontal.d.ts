import root from './root';
/**
 * class Horizontal
 * @returns voild
 */
declare class Horizontal extends root {
    /**
     * [sumWidth 水平滚动元素总宽度]
     * @type {number}
     */
    sumWidth: number;
    /**
     * [scroxtGap 水平滚动元素的间隔]
     * @type {number}
     */
    scroxtGap: number;
    /**
     * [distance 移动的距离]
     * @type {number}
     */
    distance: number;
    /**
     * [targetWidth target宽度]
     * @type {number}
     */
    private targetWidth;
    /**
     * [divWrapElementWidth 元素总宽度]
     * @type {number}
     */
    private divWrapElementWidth;
    /**
     * [targetElementBorderWidth target border width]
     * @type {number}
     */
    private targetElementBorderWidth;
    constructor({target, data, speed, gap}: {
        target: string;
        data: string[];
        speed: number;
        gap: number;
    });
    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(): void;
    /**
     * [init 入口]
     */
    init(): void;
    /**
     * [createHorizontal 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:水平滚动元素集
     */
    createHorizontal(): HTMLElement;
    /**
     * [computeWidth 计算元素宽度]
     * @param {Array<HTMLElement>} ElementArr [元素集合]
     */
    computeWidth(ElementArr: any): number;
    /**
     * [STRun 定时运行]
     */
    STRun(): void;
    /**
     * [STMove 单位帧移动]
     */
    STMove(): void;
}
export default Horizontal;
