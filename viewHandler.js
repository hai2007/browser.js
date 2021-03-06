/*!
 * ð - å±å¹3Dæ§å¶ä¿¡æ¯æè·
 * https://github.com/hai2007/browser.js/blob/master/viewHandler.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2022-present hai2007 èµ°ä¸æ­¥ï¼åèµ°ä¸æ­¥ã
 * Released under the MIT license
 */

import xhtml from './xhtml';
import getKeyString from './getKeyString';

export default function (callback) {

    var el = document.getElementsByTagName('body')[0];

    // é®çæ§å¶
    xhtml.bind(el, 'keydown', function (event) {
        var keyCode = getKeyString(event);

        // è§è§åä¸
        if (keyCode == 'up') {
            callback({
                type: "lookUp"
            });
        }

        // è§è§åä¸
        else if (keyCode == 'down') {
            callback({
                type: "lookDown"
            });
        }

        // è§è§åå·¦
        else if (keyCode == 'left') {
            callback({
                type: "lookLeft"
            });
        }

        // è§è§åå³
        else if (keyCode == 'right') {
            callback({
                type: "lookRight"
            });
        }

    });

    // é¼ æ æ§å¶
    var mouseP = null;
    var doMove = function (event) {
        if (mouseP == null) return;

        var tempMouseP = xhtml.mousePosition(el, event);

        // åæ±è§£åºè½¨è¿¹åé
        var normal = [tempMouseP.x - mouseP.x, mouseP.y - tempMouseP.y];

        // æ¹ååéæè½¬90degå¾å°éæ©åé
        var rotateNormal = [
            normal[1],
            normal[0] * -1,
            0
        ]

        // éæ³å°çº¿å¿½ç¥
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

    // æææ§å¶
    xhtml.bind(el, 'touchend', function (event) {
        mouseP = null;
    });
    xhtml.bind(el, 'touchstart', function (event) {
        mouseP = xhtml.mousePosition(el, event.touches[0]);
    });
    xhtml.bind(el, 'touchmove', function (event) {
        doMove(event.touches[0]);
    });

    let doScale = function (value) {
        if (value == 0) return;

        callback({
            type: "scale",
            kind: value < 0 ? "reduce" : "enlarge",
            rate: Math.abs(value),
        });
    };

    // æ»è½®æ§å¶
    xhtml.bind(el, 'mousewheel', function (event) {
        doScale(event.wheelDelta);
    });

    if (window.addEventListener) {

        // éå¯¹ç«çæµè§å¨
        window.addEventListener('DOMMouseScroll', function (event) {
            doScale(-1 * event.detail);
        }, false);
    }

};
