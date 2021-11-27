import formatColor from "./formatColor";
import xhtml from './xhtml';
import getKeyString from './getKeyString';

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
