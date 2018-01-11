import root from './root';
import setTimeTask from './internal/setTimeTask';
import clearTimeTask from './internal/clearTimeTask';
import getEleAttr from './internal/getEleAttr';
import removeElement from './internal/removeElement';
import addStyleCSS from './internal/addStyleCSS';

/**
 * class Horizontal
 * @returns voild
 */
 class Horizontal extends root{
     /**
      * [sumWidth 水平滚动元素总宽度]
      * @type {number}
      */
     sumWidth:number = 0

     /**
      * [scroxtGap 水平滚动元素的间隔]
      * @type {number}
      */
     scroxtGap: number;

     /**
      * [distance 移动的距离]
      * @type {number}
      */
     distance:number = 0;

     /**
      * [targetWidth target宽度]
      * @type {number}
      */
     private targetWidth:number = 0;

     /**
      * [divWrapElementWidth 元素总宽度]
      * @type {number}
      */
     private divWrapElementWidth:number = 0;

     /**
      * [targetElementBorderWidth target border width]
      * @type {number}
      */
     private targetElementBorderWidth:number = 0;

     /**
      * [ST move定时器]
      * @type {Number}
      */
     private ST = 0;

     constructor({target,data,speed,gap = 10}:{
         target: string,
         data: string[],
         speed:number,
         gap:number
     }){
         super({target,data,speed});
         this.scroxtGap = gap;
         this.createStyle();
         this.init();
     }

     /**
      * [createStyle 创建内嵌css]
      */
     createStyle(){
        addStyleCSS(`
            .scroxt-wrapper::after{
                display: block;
                content: "";
                clear: both;
            }
            .scroxt-horizontal{
                float: left;
                margin-right: ${this.scroxtGap}px;
                white-space: nowrap;
                box-sizing: border-box;
            }
        `)
     }

    /**
     * [init 入口]
     */
    init(){
        this.targetWidth = parseFloat(getEleAttr(this.targetElement,'width'));
        this.targetElementBorderWidth = parseFloat(getEleAttr(this.targetElement,'border-width'));
        this.createHorizontal();
        //当内容宽度小于盒子宽度
        if(this.divWrapElementWidth/2 < this.targetWidth){
            removeElement(".scroxt-wrapper");
            const ElementArr = this.createElement("scroxt-horizontal");
            this.divWrapElementWidth = this.computeWidth(ElementArr) + ElementArr.length * this.scroxtGap;
            let divWrapElement = <HTMLElement>document.querySelector(".scroxt-wrapper");
            divWrapElement.style.width = this.divWrapElementWidth + 'px';
            divWrapElement.style.marginLeft = "0px";
            return;
        };
        this.STRun();
    }

    /**
     * [createHorizontal 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:水平滚动元素集 
     */
    createHorizontal(){
        removeElement(".scroxt-wrapper");
        const ElementArr1 = this.createElement("scroxt-horizontal");
        const ElementArr2 = this.createElement("scroxt-horizontal");
        const ElementArr = ElementArr1.concat(ElementArr2)
        this.divWrapElementWidth = this.computeWidth(ElementArr) + ElementArr.length * this.scroxtGap;
        let divWrapElement = <HTMLElement>document.querySelector(".scroxt-wrapper");
        divWrapElement.style.width = this.divWrapElementWidth + 'px';
        return divWrapElement;
    }

    /**
     * [computeWidth 计算元素宽度]
     * @param {Array<HTMLElement>} ElementArr [元素集合]
     */
    computeWidth(ElementArr){
        let width = 0;
        for(let i = 0, len = ElementArr.length; i < len; i++){
            width += Math.ceil(+(getEleAttr(ElementArr[i],"width").replace("px","")));
        }
        return width;
    }

    /**
     * [STRun 定时运行]
     */
    STRun(){
        if(this.divWrapElementWidth/2 < this.targetWidth) return;
        this.STMove();
        this.ST = setTimeTask(function(){
            this.STRun();
        }.bind(this));
    }

    /**
     * [STMove 单位帧移动]
     */
    STMove(){
        let divWrapElement = <HTMLElement>document.querySelector(".scroxt-wrapper");
        const rectObj = divWrapElement.getBoundingClientRect();
        const divWrapElementHalfPosition = rectObj.left + (rectObj.right-rectObj.left)/2;

        const targetRect = this.targetElement.getBoundingClientRect();

        if(this.options.speed < 0){
            const targetLeftPosition = targetRect.left + this.targetElementBorderWidth;
            if(divWrapElementHalfPosition + this.options.speed*0.1 <= targetLeftPosition){
                this.distance = 0;
                divWrapElement = this.createHorizontal();
                divWrapElement.style.left = "0px";
                divWrapElement.style.marginLeft = "0px";
             }
        }else{
            const targetRightPosition = targetRect.right - this.targetElementBorderWidth*2;
            if(divWrapElementHalfPosition + this.options.speed*0.1 >= targetRightPosition){
                this.distance = -this.divWrapElementWidth + this.targetWidth;
                divWrapElement = this.createHorizontal();
                divWrapElement.style.right = "0px";
                divWrapElement.style.marginRight = "0px";
            }
        }

        divWrapElement.style.transform = `translate3d(${this.distance}px, 0px, 0px)`;
        divWrapElement.style.webkitTransform = `translate3d(${this.distance}px, 0px, 0px)`;
        this.distance += this.options.speed*0.1;
    }

    /**
     * [stopMove 停止移动]
     */
    stopMove(){
        clearTimeTask(this.ST);
        this.ST = 0;
    }

    /**
     * [startMove 开始移动]
     */
    startMove(){
        if(this.ST === 0){
            this.STRun();
        }
    }
}

 export default Horizontal;