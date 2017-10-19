/**
 * 水平滚动
 *
 * 例子
 *
 * 
 */
import Horizontal from "./horizontal";

/**
 * 垂直滚动
 *
 * 例子
 *
 * 
 */
import Vertical from "./vertical";

/**
 * class Barrage
 * @param {video: string,dataTime: {data:string,time:number}[]} obj 类构造参数
 * video:video标签的css选择器。dataTime:数据的数组对象，data:弹幕的内容，time弹幕出现的时间(单位/秒)
 * @returns voild
 * @example
 *
 * new scroxt.Barrage({
 *     video: "#my-video",
 *     dataTime: [{
 *         data:"第一条",  // 第一条弹幕
 *         time:1          // 第一条弹幕出现的时间 1秒
 *     },{
 *         data:"第二条",  // 第二条弹幕
 *         time:1		   // 第一条弹幕出现的时间 1秒
 *     },{
 *         data:"第三条",  // 第三条弹幕
 *         time:2          // 第一条弹幕出现的时间 2秒
 *     }]
 * });
 */
import Barrage from "./barrage";


interface Scroxt {
    [propName: string]: any;
}

let scroxt:Scroxt = {};

scroxt.Horizontal = Horizontal;
scroxt.Vertical = Vertical;
scroxt.Barrage = Barrage;

(window as any).scroxt = scroxt;
