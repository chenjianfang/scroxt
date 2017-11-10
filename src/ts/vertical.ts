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
     * [divWrapElement 滚动元素集]
     * @type {HTMLElement}
     */
    private divWrapElement:HTMLElement;

    /**
     * [divWrapElementHeight 元素总宽度]
     * @type {number}
     */
    private divWrapElementHeight:number = 0;

    /**
     * [distance 移动的距离]
     * @type {number}
     */
    private distance:number = 0

    constructor(opt){
        super(opt);
        this.targetHeight = parseFloat(getEleAttr(this.targetElement,'height'));
        this.startRun();
    }

    startRun(){
    	this.divWrapElementHeight = this.createVertical();
    	if(this.targetHeight > this.divWrapElementHeight/2){
    		removeElement(".scroxt-wrapper");
    		this.createElement("scroxt-vertical");
    		return;
    	};
        this.STRun();
    }

    /**
     * [createVertical 创建水平滚动元素]
     * @returns {HTMLElement} divWrapElement:垂直滚动元素集 
     */
    createVertical(){
        removeElement(".scroxt-wrapper");
        const verticalArr1 = this.createElement("scroxt-vertical");
        const verticalArr2 = this.createElement("scroxt-vertical");
        this.divWrapElement = <HTMLElement>document.querySelector(".scroxt-wrapper");
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
        this.STMove();
        setTimeTask(function(){
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

        this.divWrapElement.style.transform = `translate3d(0px, ${this.distance}px, 0px)`;
        this.divWrapElement.style.webkitTransform = `translate3d(0px, ${this.distance}px, 0px)`;
        
        this.distance += this.options.speed * 0.1;
    }
}

export default Vertical;