import Horizontal from "./horizontal";
import Vertical from "./vertical";
import Barrage from "./barrage";
import Live from "./live";

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


/**
 * class Barrage
 * @param {target: string,strongLock: boolean} obj 类构造参数
 * target:target标签的css选择器。[strongLock]:强制模式，默认false
 * @returns voild
 * @example
 * 
 *1.非强制模式，所有弹幕都会出现，但是某些浏览器可能会因为弹幕数量过多导致卡顿
 * var scroxtLive = new scroxt.Live({
 *     target: ".scroxt-video-barrage"
 * });
 *scroxtLive.addBarrage("第一条弹幕");
 *scroxtLive.addBarrage("第二条弹幕");
 *
 *2.强制模式，页面最多出现65条弹幕.页面当有65条弹幕的时候，添加的任何弹幕将会扔掉直至屏幕中的弹幕消失
 * new scroxt.Live({
 *     target: ".scroxt-video-barrage",
 *     strongLock: true
 * });
 *scroxtLive.addBarrage("第一条弹幕");
 *scroxtLive.addBarrage("第二条弹幕");
 *
 *3.强制模式，强制模式下，由于弹幕可能会被扔掉，但用户自己发弹幕不能扔！！！用户本人发的弹幕addBarrage第二个参数为true。已达到欺骗效果
 * new scroxt.Live({
 *     target: ".scroxt-video-barrage",
 *     strongLock: true
 * });
 *scroxtLive.addBarrage("这是我自己的弹幕,只有用户本人能看到",true);
 *
 * 
 */
scroxt.Live = Live;


(window as any).scroxt = scroxt;

export default scroxt;