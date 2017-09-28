import root from './root';
import setTimeTask from './internal/setTimeTask';
import clearTimeTask from './internal/clearTimeTask';

/**
 * 垂直滚动
 *
 * 例子
 *

 * 生成一个垂直滚动的字幕
 * 
 */


class Vertical extends root{
    targetHeight
    constructor(opt){
        super(opt);
        this.targetHeight = +window.getComputedStyle(<HTMLElement>document.querySelector(opt.target),null).getPropertyValue("height").replace("px","");
        this.startRun();
    }

    sumHeight
    startRun(){
        this.sumHeight = +window.getComputedStyle(this.scroxtUlEle).getPropertyValue("height").replace("px","");
        this.STRun();
    }
    STRun(){
        this.STMove();
        if(this.sumHeight < this.targetHeight) return;
        setTimeTask(function(){
            this.STRun();
        }.bind(this));
    }
    copyscroxtUlEle(){
        this.scroxtUlEle.innerHTML += this.scroxtUlEle.innerHTML;
    }
    distance:number = 0
    copyLock = false
    STMove(){
        this.distance += this.options.distance;
        if(this.options.distance < 0){
            if(this.distance <= -this.sumHeight || !this.copyLock){
                super.createELe();
                this.copyscroxtUlEle();
                this.distance = 0;
                this.copyLock = true;
            }
        }else{
            if(this.distance >= 0){
                super.createELe();
                this.copyscroxtUlEle();
                this.distance = -this.sumHeight;
            }
        }

        this.scroxtUlEle.style.transform = `translateY(${this.distance}px)`;
        this.scroxtUlEle.style.webkitTransform = `translateY(${this.distance}px)`;
        
    }
}

export default Vertical;