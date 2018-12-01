/**
 *
 * @desc 判断两个数组是否相等
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Boolean}
 */
function arrayEqual(arr1, arr2) {
    if (arr1 === arr2) {
        return true;
    }
    if (arr1.length != arr2.length) {
        return false;
    }
    for (var i = 0; i < arr1.length; ++i) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

///---------------/////////////////////////////////////////////////////////////////////
/*cookie*/
/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
function getCookie(name) {
    var arr = document.cookie.replace(/\s/g, "").split(';');
    for (var i = 0; i < arr.length; i++) {
        var tempArr = arr[i].split('=');
        if (tempArr[0] == name) {
            return decodeURIComponent(tempArr[1]);
        }
    }
    return '';
}
/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
function setCookie(name, value, days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    document.cookie = name + '=' + value + ';expires=' + date;
}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
function removeCookie(name) {
    // 设置已过期，系统会立刻删除cookie
    setCookie(name, '1', -1);
}

///---------------/////////////////////////////////////////////////////////////////////
/**
 *
 * @desc 获取浏览器类型和版本
 * @return {String}
 */
function getExplore() {

    var sys = {},
        ua = navigator.userAgent.toLowerCase(),
        s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]: (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] : (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] : (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] : (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
        (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] : (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    // 根据关系进行判断
    if (sys.ie) {
        return ('IE: ' + sys.ie)
    }
    if (sys.edge) {
        return ('EDGE: ' + sys.edge)
    }
    if (sys.firefox) {
        return ('Firefox: ' + sys.firefox)
    }
    if (sys.chrome) {
        return ('Chrome: ' + sys.chrome)
    }
    if (sys.opera) {
        return ('Opera: ' + sys.opera)
    }
    if (sys.safari) {
        return ('Safari: ' + sys.safari)
    }
    return 'Unkonwn'
}


//---------------------------//////////////////////////////////////////////////////
/**
 *
 * @desc 获取操作系统类型
 * @return {String}
 */
function getOS() {
    var userAgent = 'navigator' in window && 'userAgent' in navigator && navigator.userAgent.toLowerCase() || '';
    var vendor = 'navigator' in window && 'vendor' in navigator && navigator.vendor.toLowerCase() || '';
    var appVersion = 'navigator' in window && 'appVersion' in navigator && navigator.appVersion.toLowerCase() || '';

    if (/mac/i.test(appVersion)) {
        return 'MacOSX'
    }
    if (/win/i.test(appVersion)) {
        return 'windows'
    }
    if (/linux/i.test(appVersion)) {
        return 'linux'
    }
    if (/iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)) {
        return 'ios'
    }
    if (/android/i.test(userAgent)) {
        return 'android'
    }
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) { return 'windowsPhone' }

}

/*识别是手机端*/
function mobilecheck() {
    var e = !1;
    return function(t) {
        (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 4))) && (e = !0)
    }(navigator.userAgent || navigator.vendor || window.opera), e
}

/**name:getWithdrawConfirm()
 * input：text:oninput事件输入监听货币函数
 * o:this,
 * i:隐藏域的值
 * tips:错误提示
 * type:哪种类型的最大限制
 */
{
    const WXWITHDWRAWALMAX = 20000.00; //微信允许最大值
    const BANKWITHDWRAWALMAX = 50000.00; //银行卡允许最大值
    const CASHADVANCEMAX = 8000.00 //信用卡支付额度最大值

    function getWithdrawConfirm(o, i, tips, type) {
        var wx_withdraw_tips = $("." + tips);
        wx_withdraw_tips.hide();
        var typeNum = 0;
        var v = $.trim(o.value);
        if (type === 'wx') {
            typeNum = WXWITHDWRAWALMAX;
        } else if (type === 'bankcard') {
            typeNum = BANKWITHDWRAWALMAX;
        } else if (type === 'cashadvance') {
            typeNum = CASHADVANCEMAX;
        }
        if (isNaN(v) || v === "") {
            return $("#" + i).val("");
        } else {
            //如果输入金额大于20000则取出20000.00
            if (parseFloat(v) > typeNum) {
                wx_withdraw_tips.show();
                return $("#" + i).val("");
            }
            //如果是整数
            if (Math.floor(v) === v) {
                console.log("符合规则的整数");
                return $("#" + i).val(v);
            } else {
                //如果是小数
                if (v.length > 3) {
                    if (v.charAt(v.length - 4) === '.') {
                        //v.substring(0, v.length - 1)
                        return $("#" + i).val(v.substring(0, v.length - 1));
                    } else {
                        console.log("符合规则");
                    }
                } else if (v.length === 3) {
                    console.log("输入的是三位长度");
                } else if (v.length === 2) {
                    console.log("两位长度");
                    if (v.charAt(0) === '0' && v.charAt(v.length - 1) === '0') {
                        //v.substring(0, v.length - 1)
                        return $("#" + i).val(v.substring(0, v.length - 1));
                    }
                }
            }

        }
    }
}


//
/**
 * js控制将字符串逗号分隔转化为数组
 */
function stringToArray() { //es5
    return [].splice.call(arguments);
}

function stringToArray() { //es6
    return [...arguments];
}

function stringToArray(arg) {
    return arg.split(',');
    return arg.split('&');
    return arg.split(';');
}

//将数组转成字符串
function arrayToString(array) {
    return array.join(",");
}

//电话号码验证
function checkTel(id) {
    var obj = document.getElementById(id);
    var value = obj.value;
    var regTel1 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(value); //带区号的固定电话
    var regTel2 = /^(\d{7,8})(-(\d{3,}))?$/.test(value); //不带区号的固定电话
    var regTel3 = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/.test(value); //手机电话
    if (value != "") {
        if (!regTel1 && !regTel2 && !regTel3) {
            alert("电话号码输入有误！");
            obj.focus();
            return false;
        }
    } else {
        alert("请输入电话号码！");
        return false;
    }
    alert("电话号码输入正确！");
    return true;
}
//验证邮箱
function isEmail(str) {
    var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    return reg.test(str);
}
//验证身份证号码
function isCP(str) {
    //身份证号（18位）正则
    var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
    return cP.test(str);
}

//验证中文
function isZH(str) {
    var re1 = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])*$");
    return rel.test(str);
}

// 验证url
function isURL(str) {
    //URL正则
    var urlP = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    return urlP.test(str)
}

//密码强度验证
function isPassword(str) {
    //密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    if (str.lengt < 6) {
        return '密码长度小于6位'
    }
    var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
    return pPattern.test(str);
}
//pv4验证
function ipV4(str) {
    //ipv4地址正则
    var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    //输出 true
    return ip.test(str);
}

//16进制颜色
function x0(str) {
    var cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    //输出 true
    return cPattern.test(str);
}


//小数点取出两位
function numToFixedTwo(num) {
    //toFixed();
    if (isNaN(num)) {
        num = 0;
    }
    if (typeof(num) === "string") {
        num = parseFloat(num);
    }
    let mg = num,
        n = mg.toString();
    if (n.indexOf(".") > 0) {
        g = n.split("."),
            p = g[0],
            k = g[1].substring(0, 2),
            val = p + "." + k;
        n = parseFloat(val);
    } else {
        n = Number(n);
    }
    console.log(n);
    return n;
}
numToFixedTwo("-10000.9a");


//手机端返回=====================
{
    window.onload = function() {
        pushHistory();
        var bool = false;
        setTimeout(function() {
            bool = true;
        }, 1500);
        window.addEventListener("popstate", function(e) {
            if (bool) {
                //alert("我监听到了浏览器的返回按钮事件啦");//根据自己的需求实现自己的功能
                //window.history.go(-1);
                //window.history.back();
                window.history.go(-1);
            }
            pushHistory();

        }, false);

        function pushHistory() {
            var state = {
                title: "title",
                url: window.location.href
            };
            window.history.pushState(state, "title", "#");
        }
    }

}
//手机端返回=====================
//
//
/*两位小数数字验证*/
/*设置
<input type="text" name="je" onkeyup="clearNoNum(this)" />元
*/
function clearNoNum(obj) {
    obj.value = obj.value.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
    obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
    obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
    obj.value = obj.value.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
    if (obj.value.indexOf(".") < 0 && obj.value != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        obj.value = parseFloat(obj.value);
    }
}


/*加减乘除函数*/
var CMX = CMX || {};
/**
 ** 加
 **/
CMX.add = function(arg1, arg2) {
    var r1, r2, m, c;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
        var cm = Math.pow(10, c);
        if (r1 > r2) {
            arg1 = Number(arg1.toString().replace(".", ""));
            arg2 = Number(arg2.toString().replace(".", "")) * cm;
        } else {
            arg1 = Number(arg1.toString().replace(".", "")) * cm;
            arg2 = Number(arg2.toString().replace(".", ""));
        }
    } else {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
};

/**
 ** 减
 **/
CMX.sub = function(arg1, arg2) {
    var r1, r2, m, n;
    try {
        r1 = arg1.toString().split(".")[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
    n = (r1 >= r2) ? r1 : r2;
    return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
};

/**
 ** 乘
 **/
CMX.mul = function(arg1, arg2) {
    var m = 0,
        s1 = arg1.toString(),
        s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch (e) {}
    try {
        m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
};

/**
 ** 除
 **/
CMX.div = function(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    } catch (e) {}
    try {
        t2 = arg2.toString().split(".")[1].length;
    } catch (e) {}
    with(Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 / r2) * pow(10, t2 - t1);
    }
};