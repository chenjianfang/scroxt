/**
 * 基本参数
 *
 * @param {Object} Option 
 * 
 */
interface Option {
    target?:string; //装载容器
    scroxtLi?:string[]; //弹幕元素 <li [class]></li>
    distance?: number;  //定时器移动的距离
    [propName: string]: any;
}

class root{
    scroxtUl:string
    scroxtUlEle
    options:Option = {
        target:"", //装载容器
        scroxtLi:[], //弹幕元素 <li [class]></li>
        distance: 0,
    }
    constructor({target,scroxtLi,distance}){
        this.extendOpt(arguments[0]);
        this.scroxtUl = ".scroxt-ul .clearfix";
        this.createELe();
        
    }
    extendOpt(opt){
        const that = this;
        for(var key in opt){
            if(opt.hasOwnProperty(key)){
                that.options[key] = opt[key];
            }
        }
    }
    //创建元素组件
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
        let str = "";
        for(let i = 0, len = this.options.scroxtLi.length; i < len; i++){
            str += this.options.scroxtLi[i];
        }
        return str;
    }

}

export default root;