// Rule:
// 我们考虑出租车计价问题，出租车的运价是每公里0.8元，
// 八公里起会加收50%的每公里运价，起步价是两公里以内6块，
// 停车等待时加收每分钟0.25元，最后计价的时候司机会四舍五入只收整块钱。
module.exports = function main(input) {
        //获取输入
        distance=input.distance;
        parkTime=input.parkTime;

        //判断是否为有效输入
        if (distance<0 || parkTime<0) {
            console.log("您的输入有误，请重新输入！");
            return NaN;
        }

        //起步价
        var price=6;

        //超过2公里时
        if (distance>=2) {
            price+=0.8*(distance-2)
        }

        //超过8公里时
        if (distance>=8) {
            price+=(distance-8)*0.8*0.5
        }

        //加上停车等待费
        price+=parkTime*0.25
        
        //输出总价
        return Math.round(price);
};
