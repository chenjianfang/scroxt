/**
 * @param {Element} _:删除的元素的css选择器
 * @example
 *
 * removeElement(".content")
 
 * removeElement("[data-id='2014']")
 */
export default function removeElement(_){
    const element = document.querySelector(_);
    const parentElement = element.parentNode;
    if(parentElement){
        parentElement.removeChild(element);
    }
}