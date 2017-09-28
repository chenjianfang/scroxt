import root from './root';
/**
 * 水平滚动
 *

 *
 */
declare class Horizontal extends root {
    targetWidth: any;
    targetLeft: number;
    targetRight: number;
    scroxtLiGap: number;
    constructor(opt: any, scroxtLiGap?: number);
    sumWidth: number;
    arrange(): void;
    startRun(): void;
    STRun(): void;
    copyscroxtUlEle(): void;
    addHorizontalStyle(): void;
    distance: number;
    scroxtUlHalfPosition: number;
    STMove(): void;
}
export default Horizontal;
