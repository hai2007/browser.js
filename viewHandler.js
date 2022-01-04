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

    // 键盘控制
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

    // 鼠标控制
    var mouseP = null;
    var doMove = function (event) {
        if (mouseP == null) return;

        var tempMouseP = xhtml.mousePosition(el, event);

        // 先求解出轨迹向量
        var normal = [tempMouseP.x - mouseP.x, mouseP.y - tempMouseP.y];

        // 方向向量旋转90deg得到选择向量
        var rotateNormal = [
            normal[1],
            normal[0] * -1,
            0
        ]

        // 非法射线忽略
        if (rotateNormal[0] == 0 && rotateNormal[1] == 0) return;

        callback({
            type: "rotate",
            normal: rotateNormal,
            dist: Math.abs(tempMouseP.x - mouseP.x) + Math.abs(tempMouseP.y - mouseP.y)
        });

        mouseP = tempMouseP;
    };

    xhtml.bind(el, 'mousedown', function (event) {
        mouseP = xhtml.mousePosition(el, event);
    });
    xhtml.bind(el, 'mouseup', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'mousemove', function (event) {
        doMove(event);
    });

    // 手指控制
    xhtml.bind(el, 'touchend', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'touchstart', function (event) {
        mouseP = xhtml.mousePosition(el, event.touches[0]);
    });
    xhtml.bind(el, 'touchmove', function (event) {
        doMove(event.touches[0]);
    });

};
