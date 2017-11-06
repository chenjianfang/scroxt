/**
 * @param {Element} ele:判断元素
 * @returns {Boolean} true:是元素节点，false:不是
 * @example
 *
 * isDOM(document.body)
 */
export default function isDOM(ele){
    if(ele && ele.nodeType){
    	return ele.nodeType === 1;
    }else{
    	return false;
    }
}