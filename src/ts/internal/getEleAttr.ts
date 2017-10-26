import isDOM from './isDOM';

/**
 * @param {any} css selector
 * @param {string} element attribute
 * @returns {string} attribute value
 * @example 
 *
 * getEleAttr(".container","width") // => "200px"
 * getEleAttr(document.body,"height") // => "left"
 * 
 */
export default function getEleAttr(ele,attr){
	if(isDOM(ele)){
    	return window.getComputedStyle(ele,null).getPropertyValue(attr);
	}else if(typeof ele === 'string' && document.querySelector(ele)){
    	return window.getComputedStyle(<HTMLElement>document.querySelector(ele),null).getPropertyValue(attr);
	}
}