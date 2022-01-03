
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/xhtml.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('39');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('40');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-99f5a706":""},[createElement('header',{"id":"fixed-top","data-quickpaper-99f5a706":""},["常用的DOM操作"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["import xhtml from '@hai2007/browser/xhtml.js';"]),createElement('p',{"id":"fixed-stopPropagation","data-quickpaper-99f5a706":""},["阻止冒泡"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.stopPropagation(event);"]),createElement('p',{"id":"fixed-preventDefault","data-quickpaper-99f5a706":""},["阻止默认事件"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.preventDefault(event);"]),createElement('p',{"id":"fixed-isNode","data-quickpaper-99f5a706":""},["判断是否是结点"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.isNode(param);"]),createElement('p',{"id":"fixed-bind","data-quickpaper-99f5a706":""},["绑定事件"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.bind(dom|domArray, eventType, callback);"]),createElement('p',{"id":"fixed-unbind","data-quickpaper-99f5a706":""},["去掉绑定事件"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.unbind(dom|domArray, eventType, handler);"]),createElement('p',{"id":"fixed-find","data-quickpaper-99f5a706":""},["在当前上下文context上查找结点"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["// selectFun可选，返回boolean用以判断当前面对的结点是否保留(下同)↵xhtml.find(context, selectFun, tagName);"]),createElement('p',{"id":"fixed-children","data-quickpaper-99f5a706":""},["寻找当前结点的孩子结点"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.children(dom, selectFun);"]),createElement('p',{"id":"fixed-hasClass","data-quickpaper-99f5a706":""},["判断结点是否有指定class"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["// clazzs可以是字符串或数组字符串↵// notStrict可选，boolean值，默认false表示结点必须包含全部class,true表示至少包含一个即可↵xhtml.hasClass(dom, clazzs, notStrict);"]),createElement('p',{"id":"fixed-removeClass","data-quickpaper-99f5a706":""},["删除指定class"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.removeClass(dom, clazz);"]),createElement('p',{"id":"fixed-addClass","data-quickpaper-99f5a706":""},["添加指定class"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.addClass(dom, clazz);"]),createElement('p',{"id":"fixed-toNode","data-quickpaper-99f5a706":""},["字符串变成结点"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["// isSvg可选，boolean值，默认false表示结点是html，为true表示svg类型↵xhtml.toNode(string, isSvg);"]),createElement('p',{"id":"fixed-trigger","data-quickpaper-99f5a706":""},["主动触发事件"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.trigger(dom, eventType);"]),createElement('p',{"id":"fixed-getStyle","data-quickpaper-99f5a706":""},["获取样式"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.getStyle(dom, name);"]),createElement('p',{"id":"fixed-offsetPosition","data-quickpaper-99f5a706":""},["获取元素位置"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.offsetPosition(dom);"]),createElement('p',{"id":"fixed-mousePosition","data-quickpaper-99f5a706":""},["获取鼠标相对元素位置"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.mousePosition(dom, event);"]),createElement('p',{"id":"fixed-remove","data-quickpaper-99f5a706":""},["删除结点"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.remove(dom);"]),createElement('p',{"id":"fixed-setStyles","data-quickpaper-99f5a706":""},["设置多个样式"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["xhtml.setStyles(dom, styleJson);"]),createElement('p',{"id":"fixed-size","data-quickpaper-99f5a706":""},["获取元素大小"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["// type可选，默认border↵xhtml.size(dom[, type]);↵↵/*↵type有如下可选：↵1.content:内容↵2.padding:内容+内边距↵3.border:内容+内边距+边框↵4.scroll:滚动的宽（不包括border）↵*/"]),createElement('p',{"id":"fixed-append","data-quickpaper-99f5a706":""},["在被选元素内部的结尾插入内容"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["var node = xhtml.append(el, template|node);"]),createElement('p',{"id":"fixed-prepend","data-quickpaper-99f5a706":""},["在被选元素内部的开头插入内容"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["var node = xhtml.prepend(el, template|node);"]),createElement('p',{"id":"fixed-after","data-quickpaper-99f5a706":""},["在被选元素之后插入内容"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["var node = xhtml.after(el, template|node);"]),createElement('p',{"id":"fixed-before","data-quickpaper-99f5a706":""},["在被选元素之前插入内容"]),createElement('pre',{"q-code":"","data-quickpaper-99f5a706":""},["var node = xhtml.before(el, template|node);"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/xhtml.paper?QuickPaper&type=script&lang=js&hash=99f5a706
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/xhtml.paper?QuickPaper&type=style&lang=css&hash=99f5a706
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
