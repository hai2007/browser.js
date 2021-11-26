/*!
 * 🌐 browser.js - 🌐 基于浏览器开发的常用工具类方法或浏览器相关的操作，比如判断浏览器类型和版本等。
 * git+https://github.com/hai2007/browser.js.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Fri Nov 26 2021 23:34:55 GMT+0800 (GMT+08:00)
 */
(function () {
    'use strict';

    var REGEXP = {

        // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
        "whitespace": "[\\x20\\t\\r\\n\\f]"

    };

    // 获取样式
    function getStyle (dom, name) {
        // 获取结点的全部样式
        var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
            document.defaultView.getComputedStyle(dom, null) :
            dom.currentStyle;

        // 如果没有指定属性名称，返回全部样式
        return typeof name === 'string' ?
            allStyle.getPropertyValue(name) :
            allStyle;
    }

    /*!
     * 🌐 - 颜色格式化
     * https://github.com/hai2007/browser.js/blob/master/formatColor.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2021-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    // 把颜色统一转变成rgba(x,x,x,x)格式
    // 返回数字数组[r,g,b,a]
    function formatColor (color) {
        var colorNode = document.getElementsByTagName('head')[0];
        colorNode.style['color'] = color;
        var rgba = getStyle(colorNode, 'color');
        var rgbaArray = rgba.replace(/^rgba?\(([^)]+)\)$/, '$1').split(new RegExp('\\,' + REGEXP.whitespace));
        return [+rgbaArray[0], +rgbaArray[1], +rgbaArray[2], rgbaArray[3] == undefined ? 1 : +rgbaArray[3]];
    }

    // 导出
    var browser = {

        // 颜色格式化
        formatColor: formatColor

    };

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = browser;
    } else {
        window.browser = browser;
    }

}());
