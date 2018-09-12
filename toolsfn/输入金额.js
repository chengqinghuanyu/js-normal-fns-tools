const WXWITHDWRAWALMAX = 20000.00; //微信允许最大值
const BANKWITHDWRAWALMAX = 50000.00; //银行卡允许最大值
const CASHADVANCEMAX = 8000.00 //信用卡支付额度最大值
    /**
     * input：text:oninput事件输入监听货币函数
     * o:this,
     * i:隐藏域的值
     * tips:错误提示
     * type:哪种类型的最大限制
     */
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