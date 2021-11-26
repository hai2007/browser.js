import formatColor from "./formatColor";

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
