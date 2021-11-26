/*!
 * 🌐 - 颜色格式化
 * https://github.com/hai2007/browser.js/blob/master/formatColor.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

import REGEXP from './.inner/REGEXP';
import getStyle from './.inner/getStyle';

// 把颜色统一转变成rgba(x,x,x,x)格式
// 返回数字数组[r,g,b,a]
export default function (color) {
    var colorNode = document.getElementsByTagName('head')[0];
    colorNode.style['color'] = color;
    var rgba = getStyle(colorNode, 'color');
    var rgbaArray = rgba.replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
    return [+rgbaArray[0], +rgbaArray[1], +rgbaArray[2], rgbaArray[3] == undefined ? 1 : +rgbaArray[3]];
};
