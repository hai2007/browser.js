
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/tool.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['34']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('37');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('38');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-452bcdba":""},[createElement('header',{"id":"fixed-top","data-quickpaper-452bcdba":""},["工具类方法"]),createElement('h2',{"id":"fixed-formatColor","data-quickpaper-452bcdba":""},["格式化颜色"]),createElement('pre',{"q-code":"","data-quickpaper-452bcdba":""},["import formatColor from '@hai2007/browser/formatColor.js';"]),createElement('pre',{"q-code":"","data-quickpaper-452bcdba":""},["// 把颜色统一转变成rgba(x,x,x,x)格式↵// 返回数字数组[r,g,b,a]↵var colorArray = formatColor(color);"]),createElement('h2',{"id":"fixed-getKeyString","data-quickpaper-452bcdba":""},["键盘按下的键的组合结果"]),createElement('pre',{"q-code":"","data-quickpaper-452bcdba":""},["import getKeyString from '@hai2007/browser/getKeyString.js';"]),createElement('pre',{"q-code":"","data-quickpaper-452bcdba":""},["// event表示原生事件对象↵var keyString = getKeyString(event);"]),createElement('p',{"data-quickpaper-452bcdba":""},["返回的keyString就是此时按下的键。"]),createElement('h2',{"id":"fixed-viewHandler","data-quickpaper-452bcdba":""},["屏幕3D控制信息捕获"]),createElement('pre',{"q-code":"","data-quickpaper-452bcdba":""},["import viewHandler from '@hai2007/browser/viewHandler.js';"]),createElement('pre',{"q-code":"","data-quickpaper-452bcdba":""},["viewHandler(function(data){↵    // data就包含着当前的控制信息↵});"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/tool.paper?QuickPaper&type=script&lang=js&hash=452bcdba
/*****************************************************************/
window.__etcpack__bundleSrc__['37']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/tool.paper?QuickPaper&type=style&lang=css&hash=452bcdba
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
