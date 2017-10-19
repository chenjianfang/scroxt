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

class root{

    /**
     * [scroxtUl 初始化ul的类名]
     * @type {string} 
     * @example
     *
     * ".scroxt-ul .clearfix"
     */
    protected scroxtUl:string

    /**
     * [scroxtUlEle ul元素原生对象]
     * @type {[type]}
     */
    protected scroxtUlEle

    /**
     * [options 构造函数参数]
     * @type {Object}
     */
    protected options = {
        target:"",
        scroxtLi:[],
        distance: 0
    }


    constructor({target,scroxtLi,distance}:{
        target:string,
        scroxtLi:string[],
        distance: number
    }){
        this.extendOpt(arguments[0]);
        this.scroxtUl = ".scroxt-ul .clearfix";
        this.createELe();
    }

    /**
     * @param {Object} 构造函数参数赋值
     */
    extendOpt(opt){
        const that = this;
        for(var key in opt){
            if(opt.hasOwnProperty(key)){
                that.options[key] = opt[key];
            }
        }
    }
    
    /**
     * 生成滚动元素内容 <ul class=[scroxtUl]>[scroxtLi.join("")]</ul>
     */
    createELe(){
        const that = this;
        const ulScope = ~~(Math.random()*100) + (new Date()).getTime();
        let str = `<ul class="${that.scroxtUl.replace(/\./g,'')}" date-scroxt="${ulScope}">`;
        str += this.createContent();
        str += "</ul>";
        const target = <HTMLElement>document.querySelector(this.options.target);
        target.innerHTML = str;
        this.scroxtUlEle = <HTMLElement>document.querySelector(`[date-scroxt="${ulScope}"]`);
    }

    createContent(){
        return this.options.scroxtLi.join("");
    }

}

export default root;