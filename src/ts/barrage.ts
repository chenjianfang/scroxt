import root from './root';
import setTimeTask from './internal/setTimeTask';
import clearTimeTask from './internal/clearTimeTask';
import getEleAttr from './internal/getEleAttr';
import removeElement from './internal/removeElement';
import Event from './internal/Event';
import addStyleCSS from './internal/addStyleCSS';

interface dataTime{
    data:string
    time:number
}

/**
 * class Barrage
 * @returns voild
 */
class Barrage extends Event{
    /**
    * [video 装载容器的css选择器]
    * @type {string}
    */
    private video: string;

    /**
    * [dataTime 弹幕对象，time/s  例如：[{data:"第一条",time:2},{data:"第二条",time:5}]
    * @type {Array<dataTime>}
    */
    private dataTime:Array<dataTime>
    
    /**
     * [tempDataTime dataTime]
     * @type {Array<dataTime>}
     */
    private tempDataTime:Array<dataTime>


    /**
     * [distance 定时器，移动的距离]
     * @type {number}
     */
    private distance:number;

    /**
     * [videoEnd 视频播放结束状态 true为播放结束]
     * @type {Boolean}
     */
    private videoEnd:Boolean = false;

    /**
     * [scroxtVideo video元素]
     * @type {any}
     */
    private scroxtVideo:any;

    /**
     * [videoWidth 容器宽度]
     * @type {number}
     */
    private videoWidth:number;

    /**
     * [MAX_LINE 舞台弹幕最大行]
     * @type {number}
     */
    private MAX_LINE:number;

    /**
     * [MAX_NUM 屏幕最大弹幕数量]
     * @type {number}
     */
    private MAX_NUM:number;

    /**
     * [lineHeight 一行弹幕的高度]
     * @type {number}
     */
    private lineHeight:number;

    /**
     * [colorFont 一行弹幕的高度]
     * @type {number}
     */
    private colorFont:Array<string>;

    /**
     * [barrageWrap 弹幕的索引]
     * @type {Array<Element>}
     */
    private barrageWrap: {element:Element,scroxt:number,line:number,move:number,width:number,distance:number,color:string}[] = [];


    /**
     * [readyShowBarrage 准备出场的弹幕]
     * @type {Array<String>}
     */
    private readyShowBarrage:String[] = [];

    constructor({video,dataTime}:{
        video: string,
        dataTime: {data:string,time:number}[]
    }){
        super();
        this.video = video;
        this.scroxtVideo = document.querySelector(this.video);
        this.dataTime = this.quickSort(dataTime);
        console.log(this.dataTime);
        this.tempDataTime = JSON.parse(JSON.stringify(this.dataTime));
        this.lineHeight = 28;
        this.videoWidth = parseInt(getEleAttr(this.video,"width"));
        this.MAX_LINE = ~~(parseInt(getEleAttr(this.video,"height")) / this.lineHeight);
        this.MAX_NUM = 50;
        this.distance = -5;
        this.colorFont = ['#ffff38','#c80115','#189add'];
        this.createStyle();
        this.startRun();
    }

    /**
     * [quickSort 快速排序]
     * @param {number}[]} dataTime [description]
     */
    quickSort(dataTime:{data:string,time:number}[]){
        if(dataTime.length <= 1) return dataTime;

        let numValue = dataTime.splice(Math.floor(dataTime.length/2),1)[0];
        let left = [];
        let right = [];

        for(let i = 0, len = dataTime.length; i < len; i++){
            if(dataTime[i]['time'] < numValue['time']){
                left.push(dataTime[i]);
            }else{
                right.push(dataTime[i]);
            }
        }

        return this.quickSort(left).concat(numValue,this.quickSort(right));
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
            .static-barrage-line{
              position: absolute;
              left: 50%;
              transform:translateX(-50%);
              -webkit-transform:translateX(-50%);
              top: 0;
              z-index: 2;
            }
        `);
    }

    startRun(){
        //添加类名：scroxt-video
        const className = this.scroxtVideo.className;
        this.scroxtVideo.className = className.indexOf('scroxt-video') > -1 ? className : className+' scroxt-video';

        this.timeUpdate();
    }

    

    /**
     * 视频播放
     */
    play(){
        if(this.scroxtVideo.paused){
            this.scroxtVideo.play();
            this.intervalRun();
        }
    }

    /**
     * 视频暂停
     */
    stop(){
        if(!this.scroxtVideo.paused){
            this.scroxtVideo.pause();
            this.intervalStop();
        }
    }

    /**
     * 视频重播
     */
    restart(){
        this.readyShowBarrage = [];
        this.tempDataTime = JSON.parse(JSON.stringify(this.dataTime));
        this.scroxtVideo.currentTime = 0;
        this.barrageWrap.forEach((value,index) => {
            const parentElement = value["element"].parentNode;
            if(parentElement) parentElement.removeChild(value["element"]);
        });
        this.barrageWrap = [];
    }

    /**
     * [moveInterval 前进或后退的秒数，正数表示快进s秒，负数表示后退s秒]
     * @param {number=0} s [快进的秒数]
     */
    moveInterval(s:number=0){
        this.readyShowBarrage = [];
        this.tempDataTime = JSON.parse(JSON.stringify(this.dataTime));
        this.scroxtVideo.currentTime += s;
        this.barrageWrap.forEach((value,index) => {
            const parentElement = value["element"].parentNode;
            if(parentElement) parentElement.removeChild(value["element"]);
        });
        this.barrageWrap = [];
    }



    /**
     * [timeUpdate 播放时间更新]
     */
    timeUpdate(){
        this.scroxtVideo.addEventListener("timeupdate",function(){
            this.distribution(this.scroxtVideo.currentTime);
        }.bind(this));
    }

    /**
    * 分配弹幕，决定弹幕出场
    */
    distribution(currentTime){
        let len = this.tempDataTime.length;
        let i = 0;
        while(len !== 0){
            if(this.tempDataTime[i].time < currentTime){
                if(this.tempDataTime[i].time >= currentTime-2) this.readyShowBarrage.push(this.tempDataTime[i]["data"]);
                this.tempDataTime.shift();
                len = this.tempDataTime.length;
            }else{
                break;
            }
        }

    }

    /**
     * [createBarrage 创建弹幕from readyShowBarrage]
     */
    createBarrage(){
        const len = this.readyShowBarrage.length;
        if(!len || this.barrageWrap.length > this.MAX_NUM) return;

        for(let i = 0; i < len; i++){
            if(i>this.MAX_LINE){
                if(len>20 && !this.staticBarrageST){
                    this.createStaticBarrage(this.readyShowBarrage.splice(0,this.MAX_LINE));
                }
                break;
            }
            const lineIndex = i % this.MAX_LINE;

            //当前行最后一个元素是否完全出场
            const currentLineArr = document.querySelectorAll(`[data-line='${lineIndex}']`);
            const currentLineLength = currentLineArr.length;
            let currentLineLastElement;
            if(currentLineLength > 0){
                currentLineLastElement = currentLineArr[currentLineLength-1];
                const width = +currentLineLastElement.getAttribute('data-width');
                const move = +currentLineLastElement.getAttribute('data-move');
                if(Math.abs(move) + width > this.videoWidth){
                    continue;
                }
            }

            const showCurrent = this.readyShowBarrage.shift();
            const refer = Math.floor(Math.random()*1000) + (+new Date()) + i;
            const translatePosition = i % 2 === 0 ? 10 : 0;

            const div = document.createElement('div');
            div.className = "multi-barrage-line";
            const textNode = document.createTextNode(`${showCurrent}`);
            div.appendChild(textNode);
            this.scroxtVideo.parentNode.appendChild(div);

            const refWidth = parseInt(window.getComputedStyle(div,null).getPropertyValue("width"));
            const distance = refWidth / 600 >= 0.5 ? 0.5 : refWidth / 600;

            //超长随机颜色
            let color = "#fff";
            if(distance === 0.5){
                color = this.colorFont[~~(Math.random()*this.colorFont.length)];
            }
            this.barrageWrap.push({
                element:div,
                scroxt:refer,
                line:lineIndex,
                move:this.videoWidth + translatePosition + 10,
                width: refWidth,
                distance:distance,
                color:color
            });
        }
        
    }

    /**
     * [createStaticBarrage 静止的弹幕]
     */
    private staticBarrageST = null;
    createStaticBarrage(dataTime:String[]){
        for(let i = 0, len = dataTime.length; i < len; i++){
            const lineIndex = i % this.MAX_LINE;
            const div = document.createElement('div');
            div.className = "multi-barrage-line static-barrage-line";
            div.style.top = lineIndex*this.lineHeight + "px";
            div.style.color = this.colorFont[~~(Math.random()*this.colorFont.length)];
            const textNode = document.createTextNode(`${dataTime[i]}`);
            div.appendChild(textNode);
            this.staticBarrageST = setTimeout(function(){
                this.staticBarrageST = null;
                this.scroxtVideo.parentNode.removeChild(div);
            }.bind(this),3000);
            this.scroxtVideo.parentNode.appendChild(div);
        }
        
    }

    /**
     * [moveLine 页面弹幕移动]
     */
    moveLine(){
        for(let i = 0; i < this.barrageWrap.length; i++){
            const barrage = this.barrageWrap[i];
            const scroxt = <HTMLElement>barrage['element'];
            const refer = barrage['scroxt'];
            const line = barrage['line'];
            const move = barrage['move'];
            const width = barrage['width'];
            const distance = barrage['distance'];
            const color = barrage['color'];
            
            if(move <= -width){
                this.barrageWrap.splice(i,1);
                i--;
                const parentElement = scroxt.parentNode;
                if(parentElement) parentElement.removeChild(scroxt);
                continue;
            }

            
            const setMove = move + this.distance * distance + this.distance/10;
            this.barrageWrap[i]['move'] = setMove;

            scroxt.style.cssText = `color:${color};transform:translate3d(${setMove}px,${line*this.lineHeight}px,0);`;

        }

    }

    

    /**
     * 开始播放
     */
    private runST = 0;
    intervalRun(){
        this.runST = setTimeTask(function(){
            this.createBarrage();
            this.moveLine();
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

 export default Barrage;