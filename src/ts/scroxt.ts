import Horizontal from "./horizontal";
import Vertical from "./vertical";
import Barrage from "./barrage";

/**
 * [scroxt scroxt全局对象]
 * @type {any}
 */
let scroxt:any = {};

/**
 * class Horizontal 水平滚动
 * @param {target:string,data:string[],speed:number} obj 类构造参数
 * target:target目标容器的css选择器。data:数据的数组，speed：弹幕滚动速度[0-10]
 * @returns voild
 * @example
 *
 * new scroxt.Horizontal({
 *     target: ".my-ele",
 *     data: ['第一条','第2条','第3条'],
 *     speed: -5
 * });
 */
scroxt.Horizontal = Horizontal;

/**
 * class Vertical 垂直滚动
 * @param {target:string,data:string[],speed:number} obj 类构造参数
 * target:target目标容器的css选择器。data:数据的数组，speed：弹幕滚动速度[0-10]
 * @returns voild
 * @example
 *
 * new scroxt.Vertical({
 *     target: ".my-ele",
 *     data: ['第一条','第2条','第3条'],
 *     speed: -5
 * });
 */
scroxt.Vertical = Vertical;


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
scroxt.Barrage = Barrage;

(window as any).scroxt = scroxt;
