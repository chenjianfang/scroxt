/**
 * 水平滚动
 *
 * 例子
 *
 * new Horizontal({
 *     gun: ".scroll-ele",
 *     clip: [".horizontal", ".clearfix"],
 *     bullets: ["<li>第一条</li>", "<li>第二条</li>", "<li>第三条</li>"],
 *     distance: -0.5
 * },10)
 * 生成一个水平滚动的字幕
 * 
 */
import Horizontal from "./horizontal";

/**
 * 垂直滚动
 *
 * 例子
 *
 * new Vertical({
 *     gun: ".scroll-ele",
 *     clip: [".horizontal", ".clearfix"],
 *     bullets: ["<li>第一条</li>", "<li>第二条</li>", "<li>第三条</li>"],
 *     distance: -0.5
 * })
 * 生成一个垂直滚动的字幕
 * 
 */
import Vertical from "./vertical";


interface Scroxt {
    [propName: string]: any;
}

let scroxt:Scroxt = {};

scroxt.Horizontal = Horizontal;
scroxt.Vertical = Vertical;

(window as any).scroxt = scroxt;
