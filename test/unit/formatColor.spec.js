allege.test('颜色格式化', function (handler) {

    handler.do(function () {

        var red = browser.formatColor('red');
        return red[0] == 255 && red[1] == 0 && red[2] == 0 && red[3] == 1

    }, 'red = rgba(255,0,0,1)');

});
