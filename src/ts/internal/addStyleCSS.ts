/**
 * @param {string} cssText css文本字符串
 * @returns void
 * @example 
 *
 * addStyleCSS("body{display:block}");
 * 
 */
export default function addStyleCSS(cssText){
	const style = <any>document.createElement('style'),
		head = document.head || document.getElementsByTagName('head')[0];
	style.type = 'text/css';
	if(style.styleSheet){ //IE
		const func = function(){
			try{ //防止IE中stylesheet数量超过限制
				style.styleSheet.cssText = cssText;
			}catch(e){
				console.error(e);
			}
		}
		//如果当前styleSheet不能用，则异步
		if(style.styleSheet.disabled){
			setTimeout(func,10);
		}else{
			func();
		}
	}else{
		const textNode = document.createTextNode(cssText);
		style.appendChild(textNode);
	}
	head.appendChild(style);
}