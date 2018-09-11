// var oWrap = document.getElementById(container);
function change(container) {
    var max = 88;
    var min = 66;
    var color = [max, min, min];
    var timer = null;
    var length = color.length;
    var colorL, colorR;
    timer = setInterval(changes, 23);

    function changes() {
        for (var i = 0; i < length; i++) {
            i %= length;
            var arrX = (i + 1) % length;
            var arrY = (i + 2) % length;
            if (color[i] == max && color[arrX] == min) {
                color[arrY]++;
            }
            if (color[i] == min && color[arrX] == max) {
                color[arrY]--;
            }
            colorL =
                "#" +
                convert(color[0]) +
                "" +
                convert(color[1]) +
                "" +
                convert(color[2]) +
                "";
            colorR =
                "#" +
                convert(color[2]) +
                "" +
                convert(color[0]) +
                "" +
                convert(color[1]) +
                "";
        }
        gColor(colorL, colorR);
    }

    function convert(sRgb) {
        var sRgb = sRgb;
        var sHex = sRgb.toString(16);
        sHex = sHex.length < 2 ? "0" + sHex : sHex;
        return sHex;
    }

    function gColor(colorL, colorR) {
        if (
            navigator.userAgent.match(/Trident/i) &&
            navigator.userAgent.match(/MSIE [7|8|9].0/i)
        ) {
            container.style.filter =
                "progid:DXImageTransform.Microsoft.gradient( startColorstr=" +
                colorL +
                ", endColorstr=" +
                colorR +
                ",GradientType=0 )";
        } else {
            container.style.background =
                "-webkit-linear-gradient(left," + colorL + "," + colorR + ")";
            container.style.background =
                "-ms-linear-gradient(left," + colorL + "," + colorR + ")";
        }
    }
}

export {
    change
}