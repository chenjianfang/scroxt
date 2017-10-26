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
export interface Options {
    target: string;
    data: string[];
    speed: number;
}
declare class root {
    /**
     * [options 构造函数参数]
     * @type {Options}
     */
    protected options: Options;
    /**
     * [targetElement 目标元素]
     * @type {HTMLElement}
     */
    protected targetElement: HTMLElement;
    constructor({target, data, speed}: {
        target: string;
        data: string[];
        speed: number;
    });
    /**
     * @param {Object} 构造函数参数赋值
     */
    extendOpt(opt: any): void;
    /**
     * [createElement 生成滚动元素]
     * @param {string = ""} className [滚动元素类名]
     * @return {Array<HTMLElement>} divBox [滚动元素数组]
     */
    createElement(className?: string): HTMLElement[];
}
export default root;
