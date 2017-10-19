/**
 * @param {string} css selector
 * @param {string} element attribute
 * @returns {string} attribute value
 * @example 
 *
 * getEleAttr(".container","width") // => "200px"
 * getEleAttr(".container","cssFloat") // => "left"
 * 
 */
export default function getEleAttr(ele,attr){
    return window.getComputedStyle(<HTMLElement>document.querySelector(ele),null).getPropertyValue(attr);
}