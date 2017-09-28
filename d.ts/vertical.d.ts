import root from './root';
/**
 * 垂直滚动
 *
 * 例子
 *

 * 生成一个垂直滚动的字幕
 *
 */
declare class Vertical extends root {
    targetHeight: any;
    constructor(opt: any);
    sumHeight: any;
    startRun(): void;
    STRun(): void;
    copyscroxtUlEle(): void;
    distance: number;
    copyLock: boolean;
    STMove(): void;
}
export default Vertical;
