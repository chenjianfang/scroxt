/**
 * 取消定时器profix
 *
 * 例子
 *
 * clearTimeTask(st);
 */

const clearTimeTask = (function(){
    return  (<any>window).cancelAnimationFrame      || 
            (<any>window).mozCancelAnimationFrame   ||
            (<any>window).clearTimeout;
})();

export default clearTimeTask;