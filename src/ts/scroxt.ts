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


interface Scroxt {
    [propName: string]: any;
}

let scroxt:Scroxt = {};

scroxt.Horizontal = Horizontal;
scroxt.Vertical = Vertical;

(window as any).scroxt = scroxt;
