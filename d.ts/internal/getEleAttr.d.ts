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
export default function getEleAttr(ele: any, attr: any): string;
