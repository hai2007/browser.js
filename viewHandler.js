/*!
 * 🌐 - 屏幕3D控制信息捕获
 * https://github.com/hai2007/browser.js/blob/master/viewHandler.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

import xhtml from './xhtml';
import getKeyString from './getKeyString';

export default function (callback) {

    var el = document.getElementsByTagName('body')[0];

    xhtml.bind(el, 'keydown', function (event) {
        var keyCode = getKeyString(event);

        // 视角向上
        if (keyCode == 'up') {
            callback({
                type: "lookUp"
            });
        }

        // 视角向下
        else if (keyCode == 'down') {
            callback({
                type: "lookDown"
            });
        }

        // 视角向左
        else if (keyCode == 'left') {
            callback({
                type: "lookLeft"
            });
        }

        // 视角向右
        else if (keyCode == 'right') {
            callback({
                type: "lookRight"
            });
        }

    });

};
