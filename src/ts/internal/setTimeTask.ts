/**
 * 设置定时器profix
 *
 * 例子：
 *
 * setTimeTask(function(){
 *     console.log(1)
 * });
 * 
 */
const setTimeTask = (function(){
  return  (<any>window).requestAnimationFrame       ||
          (<any>window).webkitRequestAnimationFrame ||
          (<any>window).mozRequestAnimationFrame    ||
          function( callback ){
            (<any>window).setTimeout(callback, 1000 / 60);
          };
})();

export default setTimeTask;