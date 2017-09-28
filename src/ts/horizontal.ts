import root from './root';
import setTimeTask from './internal/setTimeTask';
import clearTimeTask from './internal/clearTimeTask';

/**
 * 水平滚动
 *

 * 
 */


 class Horizontal extends root{
     targetWidth
     targetLeft:number; //目标元素距离可视窗口左边的距离
     targetRight:number; //目标元素距离可视窗口右边的距离
     scroxtLiGap: number; //弹幕之间的间隔
     constructor(opt, scroxtLiGap:number=10){
         super(opt);
         this.scroxtLiGap = scroxtLiGap;
         this.targetWidth = +window.getComputedStyle(<HTMLElement>document.querySelector(opt.target),null).getPropertyValue("width").replace("px","");
         this.arrange();
         this.startRun();
     }
     //计算子元素占用宽度总和
     sumWidth = 0
     arrange(){
         this.sumWidth = 0;
         for(var i = 0, len = this.scroxtUlEle.childNodes.length; i < len; i++){
             const currentEle = <HTMLElement>this.scroxtUlEle.childNodes[i];
             currentEle.style.whiteSpace = "nowrap";
             var temp = window.getComputedStyle(currentEle,null).getPropertyValue("width");
             this.sumWidth += (Math.ceil(+temp.replace("px",""))+this.scroxtLiGap);
         }
         this.scroxtUlEle.style.width = this.sumWidth+"px";

         const rectObj = document.querySelector(this.options.target).getBoundingClientRect();
         this.targetLeft = rectObj.left;
         this.targetRight = rectObj.right;
     }
     //元素滚动
     startRun(){
         this.copyscroxtUlEle();
         this.STRun();
     }
     STRun(){
         this.STMove();
         setTimeTask(function(){
             this.STRun();
         }.bind(this));
     }
     copyscroxtUlEle(){
         this.scroxtUlEle.innerHTML += this.scroxtUlEle.innerHTML;
         this.scroxtUlEle.style.width = this.sumWidth*2+"px";
         this.addHorizontalStyle();
     }
     addHorizontalStyle(){
        for(var i = 0, len = this.scroxtUlEle.childNodes.length; i < len; i++){
            const currentEle = <HTMLElement>this.scroxtUlEle.childNodes[i];
            currentEle.style.cssFloat = "left";
        }
        this.scroxtUlEle.addClass += " clearfix";
     }
     distance:number = 0
     scroxtUlHalfPosition:number;
     STMove(){
         this.distance += this.options.distance;

         const rectObj = this.scroxtUlEle.getBoundingClientRect();
         this.scroxtUlHalfPosition = rectObj.left + (rectObj.right-rectObj.left)/2;

         if(this.distance < 0){
             if(this.scroxtUlHalfPosition <= this.targetLeft){
                 this.distance = 0;
                 this.createELe();
                 this.copyscroxtUlEle();
                 this.scroxtUlEle.style.left = "0px";
                 this.scroxtUlEle.style.marginLeft = "0px";
             }
         }else{
             if(this.scroxtUlHalfPosition >= this.targetRight){
                 this.distance = 0;
                 this.createELe();
                 this.copyscroxtUlEle();
                 const target = <HTMLElement>document.querySelector(this.options.target);
                 target.style.position = "relative";
                 this.scroxtUlEle.style.right = "0px";
                 this.scroxtUlEle.style.marginRight = "0px";
                 this.scroxtUlEle.style.position = "absolute";
             }
         }

         this.scroxtUlEle.style.transform = `translateX(${this.distance}px)`;
         this.scroxtUlEle.style.webkitTransform = `translateX(${this.distance}px)`;
     }
 }

 export default Horizontal;