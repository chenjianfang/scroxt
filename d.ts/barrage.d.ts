import Event from './internal/Event';
/**
 * class Barrage
 * @returns voild
 */
declare class Barrage extends Event {
    /**
    * [video 装载容器的css选择器]
    * @type {string}
    */
    private video;
    /**
    * [dataTime 弹幕对象，time/s  例如：[{data:"第一条",time:2},{data:"第二条",time:5}]
    * @type {Array<dataTime>}
    */
    private dataTime;
    /**
     * [tempDataTime dataTime]
     * @type {Array<dataTime>}
     */
    private tempDataTime;
    /**
     * [distance 定时器，移动的距离]
     * @type {number}
     */
    private distance;
    /**
     * [videoEnd 视频播放结束状态 true为播放结束]
     * @type {Boolean}
     */
    private videoEnd;
    /**
     * [scroxtVideo video元素]
     * @type {any}
     */
    private scroxtVideo;
    /**
     * [videoWidth 容器宽度]
     * @type {number}
     */
    private videoWidth;
    /**
     * [MAX_LINE 舞台弹幕最大行]
     * @type {number}
     */
    private MAX_LINE;
    /**
     * [MAX_NUM 屏幕最大弹幕数量]
     * @type {number}
     */
    private MAX_NUM;
    /**
     * [lineHeight 一行弹幕的高度]
     * @type {number}
     */
    private lineHeight;
    /**
     * [colorFont 一行弹幕的高度]
     * @type {number}
     */
    private colorFont;
    /**
     * [barrageWrap 弹幕的索引]
     * @type {Array<Element>}
     */
    private barrageWrap;
    /**
     * [readyShowBarrage 准备出场的弹幕]
     * @type {Array<String>}
     */
    private readyShowBarrage;
    constructor({video, dataTime}: {
        video: string;
        dataTime: {
            data: string;
            time: number;
        }[];
    });
    /**
     * [quickSort 快速排序]
     * @param {number}[]} dataTime [description]
     */
    quickSort(dataTime: {
        data: string;
        time: number;
    }[]): any;
    /**
     * [createStyle 创建内嵌css]
     */
    createStyle(): void;
    startRun(): void;
    /**
     * 视频播放
     */
    play(): void;
    /**
     * 视频暂停
     */
    stop(): void;
    /**
     * 视频重播
     */
    restart(): void;
    /**
     * [moveInterval 前进或后退的秒数，正数表示快进s秒，负数表示后退s秒]
     * @param {number=0} s [快进的秒数]
     */
    moveInterval(s?: number): void;
    /**
     * [timeUpdate 播放时间更新]
     */
    timeUpdate(): void;
    /**
    * 分配弹幕，决定弹幕出场
    */
    distribution(currentTime: any): void;
    /**
     * [createBarrage 创建弹幕from readyShowBarrage]
     */
    createBarrage(): void;
    /**
     * [createStaticBarrage 静止的弹幕]
     */
    private staticBarrageST;
    createStaticBarrage(dataTime: String[]): void;
    /**
     * [moveLine 页面弹幕移动]
     */
    moveLine(): void;
    /**
     * 开始播放
     */
    private runST;
    intervalRun(): void;
    /**
     * 停止播放
     */
    intervalStop(): void;
}
export default Barrage;
