import getEleAttr from './internal/getEleAttr';
import removeElement from './internal/removeElement';
import addStyleCSS from './internal/addStyleCSS';
import setTimeTask from './internal/setTimeTask';
import clearTimeTask from './internal/clearTimeTask';


interface BarrageWrap{
    [line:number]:{element:Element,line:number,move:number,width:number,speed:number}[]
}



/**
 * class Live
 * @returns voild
 */
export default class Live {

    /**
     * [HTMLElement 目标元素]
     * @type {[type]}
     */
    private targetElement:HTMLElement 

    /**
    * [barrage 弹幕]
    * @type {Array}
    */
    private barrage = [];

    /**
    * [selfBarrage 弹幕]
    * @type {Array}
    */
    private selfBarrage = [];

    /**
     * [barrageWrap 弹幕的索引]
     * @type {Array<Element>}
     */
   private barrageWrap:BarrageWrap = {}

   // private barrageWrap: {element:Element,line:number,move:number,width:number,speed:number}[] = [];

    /**
     * [MAX_LINE 最大行]
     * @type {number}
     */
    private MAX_LINE:number = 4;

    /**
     * [lineHeight 单行行高]
     * @type {number}
     */
    private lineHeight:number = 28;

    /**
     * [TARGET_WIDTH 目标元素宽度]
     * @type {number}
     */
    private TARGET_WIDTH:number;

    /**
     * [LINE_LIMIT 最大弹幕数量]
     * @type {number}
     */
    private LINE_LIMIT:number;

    /**
     * [sumLine 弹幕总数]
     * @type {number}
     */
    private sumLine:number = 0;

    /**
     * [gear 1-10 挡位，移动的距离]
     * @type {number}
     */
    private gear:number;

    /**
     * [lineGap 弹幕初始间隔]
     * @type {number}
     */
    private lineGap:number = 10;

    /**
     * [strongLock 强制模式，为了流畅性，可能会造成弹幕缺失]
     * @type {boolean}
     */
    private strongLock:boolean;

    constructor({target,strongLock = false}:{
        target:string,
        strongLock:boolean
    }){
        this.targetElement = <HTMLElement>document.querySelector(target);
        this.strongLock = strongLock;
        this.TARGET_WIDTH =  parseInt(getEleAttr(this.targetElement,"width"));
        this.MAX_LINE =  ~~(parseInt(getEleAttr(this.targetElement,"height")) / this.lineHeight);
        this.gear = -5;
        this.LINE_LIMIT = 300;
        this.startRun();
    }

    startRun(){
        this.createStyle();
        this.intervalRun();
    }

    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(){
        addStyleCSS(`
            .multi-barrage-line{
              position: absolute;
              display: inline-block;
              top: 0;
              user-select:none;
              white-space: pre;
              color: #fff;
              font-size: 25px;
              font-family:SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;
              font-weight:bold;
              line-height: 1.125;
              text-shadow:rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;
              transition:-webkit-transform 0s linear;
              z-index: 1;
              pointer-events: none;
            }
        `);
    }

    /**
     * [addBarrage 添加弹幕]
     * @param {string} data [添加弹幕]
     * @param {boolean} self [自己的弹幕]
     */
    addBarrage(data,self = false){
        if(self) this.selfBarrage.push(data);
        else this.barrage.push(data);
    }

    /**
     * [createBarrage 创建弹幕from readyShowBarrage]
     */
    createBarrage(){
        for(let i = 0, len = this.barrage.length;   len > 0 && i < this.MAX_LINE; i++){
            let text;
            const lineIndex = i % this.MAX_LINE;
            if(this.selfBarrage.length > 0){
                text = this.selfBarrage.shift();
            }else{
                if(this.strongLock && this.sumLine > 65){
                    this.barrage = [];
                    break;
                }
                //当前行最后一个元素是否完全出场
                if(this.barrageWrap[lineIndex]){
                    const len = this.barrageWrap[lineIndex].length;
                    if(len > 0){
                        const lastNodeObj = this.barrageWrap[lineIndex][len-1];
                        if(lastNodeObj["move"] + lastNodeObj["width"] > this.TARGET_WIDTH - this.lineGap){
                            continue;
                        }
                    }
                }
                text = this.barrage.shift();
                len--;
            }
            this.generateBarrage(lineIndex,text);
        }
    }

    generateBarrage(lineIndex,text){
        const div = document.createElement('div');
        div.className = "multi-barrage-line";
        const textNode = document.createTextNode(text);
        div.appendChild(textNode);
        div.style.opacity = '0';
        this.targetElement.appendChild(div);
        const refWidth = parseInt(getEleAttr(div,"width"));
        const speed = refWidth / 600 >= 0.5 ? 0.5 : refWidth / 600;

        if(!this.barrageWrap[lineIndex]){
            this.barrageWrap[lineIndex]=[{
                element:div,
                line:lineIndex,
                move: this.TARGET_WIDTH,
                width:refWidth,
                speed:speed
            }];
        }else{
            this.barrageWrap[lineIndex].push({
                element:div,
                line:lineIndex,
                move: this.TARGET_WIDTH,
                width:refWidth,
                speed:speed
            });
        }
    }

    /**
     * [moveLine 页面弹幕移动]
     */
    moveLine(){
        this.sumLine = 0;
        for(let j in this.barrageWrap){
            const barrageArr = this.barrageWrap[j];
            this.sumLine += barrageArr.length;
            for(let i = 0; i < barrageArr.length; i++){
                const barrage = barrageArr[i];
                const scroxt = <HTMLElement>barrage['element'];
                const line = barrage['line'];
                const move = barrage['move'];
                const width = barrage['width'];
                const speed = barrage['speed'];
                
                if(move <= -width){
                    barrageArr.splice(i,1);
                    i--;
                    this.targetElement.removeChild(scroxt);
                    continue;
                }
                
                const setMove = move + this.gear * speed + this.gear/10;
                barrage['move'] = setMove;

                scroxt.style.cssText = `transform:translate3d(${setMove}px,${line*this.lineHeight}px,0);opacity="1";`;
            }
            
        }
        
    }

    /**
     * 开始播放
     */
    private runST = 0;
    intervalRun(){
        this.runST = setTimeTask(function(){
            this.moveLine();
            this.createBarrage();
            this.intervalRun();
        }.bind(this));
    }

    /**
     * 停止播放
     */
    intervalStop(){
        clearTimeTask(this.runST);
    }


}