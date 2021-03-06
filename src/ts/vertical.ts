import root from './root';
import setTimeTask from './internal/setTimeTask';
import clearTimeTask from './internal/clearTimeTask';
import getEleAttr from './internal/getEleAttr';
import removeElement from './internal/removeElement';
import addStyleCSS from './internal/addStyleCSS';

/**
 * class Vertical   垂直滚动
 * @returns voild
 */
class Vertical extends root{
	/**
	 * [targetHeight target高度]
	 * @type {number}
	 */
    private targetHeight:number = 0;

    /**
     * [divWrapElementHeight 元素总高度]
     * @type {number}
     */
    private divWrapElementHeight:number = 0;

    /**
     * [distance 移动的距离]
     * @type {number}
     */
    private distance:number = 0

    /**
     * [ST move定时器]
     * @type {Number}
     */
    private ST = 0;

    constructor(opt){
        super(opt);
        this.targetHeight = parseFloat(getEleAttr(this.targetElement,'height'));
        this.createStyle();
        this.startRun();
    }

    startRun(){
    	this.divWrapElementHeight = this.createVertical();
    	if(this.targetHeight > this.divWrapElementHeight/2){
    		this.emptyElement();
    		this.createElement("scroxt-vertical");
    		return;
    	};
        this.STRun();
    }

    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(){
        addStyleCSS(`
            .scroxt-vertical{
                box-sizing: border-box;
            }
        `);
    }

    /**
     * [createVertical 创建水平滚动元素]
     * @returns {HTMLElement} 子元素集总高度
     */
    createVertical(){
        this.emptyElement();
        const verticalArr1 = this.createElement("scroxt-vertical");
        const verticalArr2 = this.createElement("scroxt-vertical");
        const divWrapElementHeight = this.computeHeight(verticalArr1.concat(verticalArr2));
        return divWrapElementHeight;
    }

    /**
     * [computeWidth 计算元素宽度]
     * @param {Array<HTMLElement>} ElementArr [元素集合]
     */
    computeHeight(ElementArr){
        let height = 0;
        for(let i = 0, len = ElementArr.length; i < len; i++){
            height += Math.ceil(+(getEleAttr(ElementArr[i],"height").replace("px","")));
        }
        return height;
    }

    /**
     * [STRun 定时器]
     */
    STRun(){
        if(this.targetHeight > this.divWrapElementHeight/2) return;
        this.STMove();
        this.ST = setTimeTask(function(){
            this.STRun();
        }.bind(this));
    }
    
    /**
     * [STMove 一帧移动]
     */
    STMove(){
        if(this.options.speed < 0){
            if(this.distance <= -this.divWrapElementHeight/2){
                this.createVertical();
                this.distance = 0;
            }
        }else{
            if(this.distance >= this.targetHeight - this.divWrapElementHeight/2){
                this.createVertical();
                this.distance = this.targetHeight - this.divWrapElementHeight;
            }
        }

        this.scroxtWrapper.style.transform = `translate3d(0px, ${this.distance}px, 0px)`;
        this.scroxtWrapper.style.webkitTransform = `translate3d(0px, ${this.distance}px, 0px)`;
        
        this.distance += this.options.speed * 0.1;
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

export default Vertical;