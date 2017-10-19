/**
 * 事件
 *
 * 例子
 *
 * clearTimeTask(st);
 */
declare class Event {
    /**
     * [event 事件容器]
     * @type {EventInterface}
     */
    private events;
    constructor();
    /**
     * [on 添加事件]
     * @param {[type]} type [事件名]
     * @param {[type]} foo  [执行函数]
     */
    on(type: any, foo: any): void;
    /**
     * [off 删除事件函数]
     * @param {[type]} type [事件名]
     * @param {[type]} foo  [执行函数]
     */
    off(type: any, foo: any): void;
    /**
     * [empty 清空事件函数]
     * @param {[type]} type [事件名]
     */
    empty(type: any): void;
    /**
     * [triggle 触发执行事件]
     * @param {[type]} type [事件名]
     */
    triggle(type: any): void;
}
export default Event;
