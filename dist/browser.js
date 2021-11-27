/*!
 * 🌐 browser.js - 🌐 基于浏览器开发的常用工具类方法或浏览器相关的操作，比如判断浏览器类型和版本等。
 * git+https://github.com/hai2007/browser.js.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.2.0
 *
 * Copyright (c) 2021-present hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sat Nov 27 2021 13:31:37 GMT+0800 (GMT+08:00)
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

    /*!
     * 🌐 - 提供常用的DOM操作方法
     * https://github.com/hai2007/browser.js/blob/master/xhtml.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2021-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */

    // 命名空间路径
    var namespace = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/"
    };

    /**
     * 结点操作补充
     */

    var xhtml = {

        // 阻止冒泡
        "stopPropagation": function (event) {
            event = event || window.event;
            if (event.stopPropagation) { //这是其他非IE浏览器
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },

        // 阻止默认事件
        "preventDefault": function (event) {
            event = event || window.event;
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },

        // 判断是否是结点
        "isNode": function (param) {
            return param && (param.nodeType === 1 || param.nodeType === 9 || param.nodeType === 11);
        },

        // 绑定事件
        "bind": function (dom, eventType, callback) {

            if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
                for (var i = 0; i < dom.length; i++) {
                    this.bind(dom[i], eventType, callback);
                }
                return;
            }

            if (window.attachEvent)
                dom.attachEvent("on" + eventType, callback);
            else
                dom.addEventListener(eventType, callback, false);
        },
        // 去掉绑定事件
        "unbind": function (dom, eventType, handler) {

            if (dom.constructor === Array || dom.constructor === NodeList || dom.constructor === HTMLCollection) {
                for (var i = 0; i < dom.length; i++) {
                    this.unbind(dom[i], eventType, handler);
                }
                return;
            }

            if (window.detachEvent)
                dom.detachEvent('on' + eventType, handler);
            else
                dom.removeEventListener(eventType, handler, false);

        },

        // 在当前上下文context上查找结点
        // selectFun可选，返回boolean用以判断当前面对的结点是否保留
        "find": function (context, selectFun, tagName) {
            if (!this.isNode(context)) return [];
            var nodes = context.getElementsByTagName(tagName || '*');
            var result = [];
            for (var i = 0; i < nodes.length; i++) {
                if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                    result.push(nodes[i]);
            }
            return result;
        },

        // 寻找当前结点的孩子结点
        // selectFun可选，返回boolean用以判断当前面对的结点是否保留
        "children": function (dom, selectFun) {
            var nodes = dom.childNodes;
            var result = [];
            for (var i = 0; i < nodes.length; i++) {
                if (this.isNode(nodes[i]) && (typeof selectFun != "function" || selectFun(nodes[i])))
                    result.push(nodes[i]);
            }
            return result;
        },

        // 判断结点是否有指定class
        // clazzs可以是字符串或数组字符串
        // notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可
        "hasClass": function (dom, clazzs, notStrict) {
            if (clazzs.constructor !== Array) clazzs = [clazzs];

            var class_str = " " + (dom.getAttribute('class') || "") + " ";
            for (var i = 0; i < clazzs.length; i++) {
                if (class_str.indexOf(" " + clazzs[i] + " ") >= 0) {
                    if (notStrict) return true;
                } else {
                    if (!notStrict) return false;
                }
            }
            return true;
        },

        // 删除指定class
        "removeClass": function (dom, clazz) {
            var oldClazz = " " + (dom.getAttribute('class') || "") + " ";
            var newClazz = oldClazz.replace(" " + clazz.trim() + " ", " ");
            dom.setAttribute('class', newClazz.trim());
        },

        // 添加指定class
        "addClass": function (dom, clazz) {
            if (this.hasClass(dom, clazz)) return;
            var oldClazz = dom.getAttribute('class') || "";
            dom.setAttribute('class', oldClazz + " " + clazz);
        },

        // 字符串变成结点
        // isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型
        "toNode": function (template, isSvg) {
            var frame;

            // html和svg上下文不一样
            if (isSvg) frame = document.createElementNS(namespace.svg, 'svg');
            else {

                var frameTagName = 'div';

                // 大部分的标签可以直接使用div作为容器
                // 部分特殊的需要特殊的容器标签

                if (/^<tr[> ]/.test(template)) {

                    frameTagName = "tbody";

                } else if (/^<th[> ]/.test(template) || /^<td[> ]/.test(template)) {

                    frameTagName = "tr";

                } else if (/^<thead[> ]/.test(template) || /^<tbody[> ]/.test(template)) {

                    frameTagName = "table";

                }

                frame = document.createElement(frameTagName);
            }

            // 低版本浏览器svg没有innerHTML，考虑是vue框架中，没有补充
            frame.innerHTML = template;

            var childNodes = frame.childNodes;
            for (var i = 0; i < childNodes.length; i++) {
                if (this.isNode(childNodes[i])) return childNodes[i];
            }
        },

        // 主动触发事件
        "trigger": function (dom, eventType) {

            //创建event的对象实例。
            if (document.createEventObject) {
                // IE浏览器支持fireEvent方法
                dom.fireEvent('on' + eventType, document.createEventObject());
            }

            // 其他标准浏览器使用dispatchEvent方法
            else {
                var _event = document.createEvent('HTMLEvents');
                // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
                _event.initEvent(eventType, true, false);
                dom.dispatchEvent(_event);
            }

        },

        // 获取样式
        "getStyle": function (dom, name) {
            // 获取结点的全部样式
            var allStyle = document.defaultView && document.defaultView.getComputedStyle ?
                document.defaultView.getComputedStyle(dom, null) :
                dom.currentStyle;

            // 如果没有指定属性名称，返回全部样式
            return typeof name === 'string' ?
                allStyle.getPropertyValue(name) :
                allStyle;
        },

        // 获取元素位置
        "offsetPosition": function (dom) {
            var left = 0;
            var top = 0;
            top = dom.offsetTop;
            left = dom.offsetLeft;
            dom = dom.offsetParent;
            while (dom) {
                top += dom.offsetTop;
                left += dom.offsetLeft;
                dom = dom.offsetParent;
            }
            return {
                "left": left,
                "top": top
            };
        },

        // 获取鼠标相对元素位置
        "mousePosition": function (dom, event) {
            var bounding = dom.getBoundingClientRect();
            if (!event || !event.clientX)
                throw new Error('Event is necessary!');
            return {
                "x": event.clientX - bounding.left,
                "y": event.clientY - bounding.top
            };
        },

        // 删除结点
        "remove": function (dom) {
            dom.parentNode.removeChild(dom);
        },

        // 设置多个样式
        "setStyles": function (dom, styles) {
            for (var key in styles)
                dom.style[key] = styles[key];
        },

        // 获取元素大小
        "size": function (dom, type) {
            var elemHeight, elemWidth;
            if (type == 'content') { //内容
                elemWidth = dom.clientWidth - ((this.getStyle(dom, 'padding-left') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-right') + "").replace('px', ''));
                elemHeight = dom.clientHeight - ((this.getStyle(dom, 'padding-top') + "").replace('px', '')) - ((this.getStyle(dom, 'padding-bottom') + "").replace('px', ''));
            } else if (type == 'padding') { //内容+内边距
                elemWidth = dom.clientWidth;
                elemHeight = dom.clientHeight;
            } else if (type == 'border') { //内容+内边距+边框
                elemWidth = dom.offsetWidth;
                elemHeight = dom.offsetHeight;
            } else if (type == 'scroll') { //滚动的宽（不包括border）
                elemWidth = dom.scrollWidth;
                elemHeight = dom.scrollHeight;
            } else {
                elemWidth = dom.offsetWidth;
                elemHeight = dom.offsetHeight;
            }
            return {
                width: elemWidth,
                height: elemHeight
            };
        },

        // 在被选元素内部的结尾插入内容
        "append": function (el, template) {
            var node = this.isNode(template) ? template : this.toNode(template);
            el.appendChild(node);
            return node;
        },

        // 在被选元素内部的开头插入内容
        "prepend": function (el, template) {
            var node = this.isNode(template) ? template : this.toNode(template);
            el.insertBefore(node, el.childNodes[0]);
            return node;
        },

        // 在被选元素之后插入内容
        "after": function (el, template) {
            var node = this.isNode(template) ? template : this.toNode(template);
            el.parentNode.insertBefore(node, el.nextSibling);
            return node;
        },

        // 在被选元素之前插入内容
        "before": function (el, template) {
            var node = this.isNode(template) ? template : this.toNode(template);
            el.parentNode.insertBefore(node, el);
            return node;
        }

    };

    /*!
     * 🌐 - 获取键盘此时按下的键的组合结果
     * https://github.com/hai2007/browser.js/blob/master/getKeyString.js
     *
     * author hai2007 < https://hai2007.gitee.io/sweethome >
     *
     * Copyright (c) 2021-present hai2007 走一步，再走一步。
     * Released under the MIT license
     */
    // 字典表
    var dictionary = {

        // 数字
        48: [0, ')'], 49: [1, '!'], 50: [2, '@'], 51: [3, '#'], 52: [4, '$'], 53: [5, '%'], 54: [6, '^'], 55: [7, '&'], 56: [8, '*'], 57: [9, '('],
        96: [0, 0], 97: 1, 98: 2, 99: 3, 100: 4, 101: 5, 102: 6, 103: 7, 104: 8, 105: 9,
        106: "*", 107: "+", 109: "-", 110: ".", 111: "/",

        // 字母
        65: ["a", "A"], 66: ["b", "B"], 67: ["c", "C"], 68: ["d", "D"], 69: ["e", "E"], 70: ["f", "F"], 71: ["g", "G"],
        72: ["h", "H"], 73: ["i", "I"], 74: ["j", "J"], 75: ["k", "K"], 76: ["l", "L"], 77: ["m", "M"], 78: ["n", "N"],
        79: ["o", "O"], 80: ["p", "P"], 81: ["q", "Q"], 82: ["r", "R"], 83: ["s", "S"], 84: ["t", "T"],
        85: ["u", "U"], 86: ["v", "V"], 87: ["w", "W"], 88: ["x", "X"], 89: ["y", "Y"], 90: ["z", "Z"],

        // 方向
        37: "left", 38: "up", 39: "right", 40: "down",
        33: "page up", 34: "page down", 35: "end", 36: "home",

        // 控制键
        16: "shift", 17: "ctrl", 18: "alt", 91: "command", 92: "command", 93: "command", 9: "tab", 20: "caps lock", 32: "spacebar", 8: "backspace", 13: "enter", 27: "esc",
        46: "delete", 45: "insert", 144: "number lock", 145: "scroll lock", 12: "clear",
        19: "pause",

        // 功能键
        112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12",

        // 余下键
        189: ["-", "_"], 187: ["=", "+"], 219: ["[", "{"], 221: ["]", "}"], 220: ["\\", "|"], 186: [";", ":"], 222: ["'", '"'], 188: [",", "<"], 190: [".", ">"], 191: ["/", "?"], 192: ["`", "~"]

    };

    // 非独立键字典
    var help_key = ["shift", "ctrl", "alt"];

    /**
     * 键盘按键
     * 返回键盘此时按下的键的组合结果
     */
    function getKeyString (event) {
        event = event || window.event;

        var keycode = event.keyCode || event.which;
        var key = dictionary[keycode] || keycode;
        if (!key) return;
        if (key.constructor !== Array) key = [key, key];

        var _key=key[0];

        var shift = event.shiftKey ? "shift+" : "",
            alt = event.altKey ? "alt+" : "",
            ctrl = event.ctrlKey ? "ctrl+" : "";

        var resultKey = "", preKey = ctrl + shift + alt;

        if (help_key.indexOf(key[0]) >= 0) {
            key[0] = key[1] = "";
        }

        // 判断是否按下了caps lock
        var lockPress = event.code == "Key" + event.key && !shift;

        // 只有字母（且没有按下功能Ctrl、shift或alt）区分大小写
        resultKey = (preKey + ((preKey == '' && lockPress) ? key[1] : key[0]));

        if (key[0] == "") {
            resultKey = resultKey.replace(/\+$/, '');
        }

        return resultKey==''?_key:resultKey;
    }

    // 导出
    var browser = {

        // 颜色格式化
        formatColor: formatColor,

        // DOM操作
        xhtml: xhtml,

        // 键盘按键
        getKeyString: getKeyString

    };

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = browser;
    } else {
        window.browser = browser;
    }

}());
