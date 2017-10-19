
interface EventInterface{
	[propName:string]:Array<Function>
}

/**
 * 事件
 *
 * 例子
 *
 * clearTimeTask(st);
 */

class Event {

	/**
	 * [event 事件容器]
	 * @type {EventInterface}
	 */
	private events: EventInterface = {}

	constructor(){
	}

	/**
	 * [on 添加事件]
	 * @param {[type]} type [事件名]
	 * @param {[type]} foo  [执行函数]
	 */
	on(type,foo){
		if(!this.events[type]){
			this.events[type] = [foo];
		}else{
			this.events[type].push(foo);
		}
	}

	/**
	 * [off 删除事件函数]
	 * @param {[type]} type [事件名]
	 * @param {[type]} foo  [执行函数]
	 */
	off(type,foo){
		this.events[type].splice(this.events[type].indexOf(foo),1);
	}

	/**
	 * [empty 清空事件函数]
	 * @param {[type]} type [事件名]
	 */
	empty(type){
		this.events[type] = [];
	}

	/**
	 * [triggle 触发执行事件]
	 * @param {[type]} type [事件名]
	 */
	triggle(type){
		const foo = this.events[type];
		foo.forEach((value) => {
			value();
		})
	}
}

export default Event;