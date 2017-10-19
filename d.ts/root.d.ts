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
declare class root {
    /**
     * [scroxtUl 初始化ul的类名]
     * @type {string}
     * @example
     *
     * ".scroxt-ul .clearfix"
     */
    protected scroxtUl: string;
    /**
     * [scroxtUlEle ul元素原生对象]
     * @type {[type]}
     */
    protected scroxtUlEle: any;
    /**
     * [options 构造函数参数]
     * @type {Object}
     */
    protected options: {
        target: string;
        scroxtLi: any[];
        distance: number;
    };
    constructor({target, scroxtLi, distance}: {
        target: string;
        scroxtLi: string[];
        distance: number;
    });
    /**
     * @param {Object} 构造函数参数赋值
     */
    extendOpt(opt: any): void;
    /**
     * 生成滚动元素内容 <ul class=[scroxtUl]>[scroxtLi.join("")]</ul>
     */
    createELe(): void;
    createContent(): string;
}
export default root;
