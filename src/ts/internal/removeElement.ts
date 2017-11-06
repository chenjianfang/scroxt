import isDOM from './isDOM';

/**
 * @param {Element} ele:删除的元素的css选择器
 * @example
 *
 * removeElement(".content")
 
 * removeElement("[data-id='2014']")
 */
export default function removeElement(ele){
	if(isDOM(ele)){
        ele.parentNode.removeChild(ele);
	}else if(typeof ele === 'string' && document.querySelector(ele)){
    	const element = document.querySelector(ele);
		element.parentNode.removeChild(element);
	}else{
		console.error("参数错误");
	}
}