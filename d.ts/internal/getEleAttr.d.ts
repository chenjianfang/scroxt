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
export default function getEleAttr(ele: any, attr: any): string;
