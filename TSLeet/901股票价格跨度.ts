/*
编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。
今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。
例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。
示例：
输入：["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
输出：[null,1,1,1,2,1,4,6]
解释：
首先，初始化 S = StockSpanner()，然后：
S.next(100) 被调用并返回 1，
S.next(80) 被调用并返回 1，
S.next(60) 被调用并返回 1，
S.next(70) 被调用并返回 2，
S.next(60) 被调用并返回 1，
S.next(75) 被调用并返回 4，
S.next(85) 被调用并返回 6。
*/

// 暴力解法 维护一个股票列表
class StockSpanner1 {
    constructor() {
    }
    spannerList: number[] = [];

    next(price: number): number {
        let day:number = 1;
        let i = this.spannerList.length - 1;
        if (this.spannerList.length === 0) {
            day = 1;
        } else {
            while(price >= this.spannerList[i] && i >= 0) {
                i--;
                day++;
            }
        }
        this.spannerList.push(price);
        return day;
    }
}


// 单调栈 维护一个降序的股票列表 [[当天股票是第几天, 当天股票的价格]]
class StockSpanner {
    spannerList: number[][];
    spannerListLength: number;
    constructor() {
        // 初始化，避免栈溢出
        this.spannerList = [[-1, Number.MAX_VALUE]];
        this.spannerListLength = -1;
    }

    next(price: number): number {
        // 天数+1
        this.spannerListLength++;
        // 遇到当天价格比维护中的股票价格高时，将所有比当天价格低的股票全出栈，无需判断栈的长度，栈始终不会溢出
        while (price >= this.spannerList[this.spannerList.length - 1][1]) {
           this.spannerList.pop()
        }
        // 计算出上一次股票价格比当天价格高之间的差距
        let result = this.spannerListLength - this.spannerList[this.spannerList.length - 1][0]
        // 将当天的股票入栈
        this.spannerList.push([this.spannerListLength, price])
        return result; 
    }
}

let S = new StockSpanner();
console.log(S.next(100))
console.log(S.next(80))
console.log(S.next(60))
console.log(S.next(70))
console.log(S.next(60))
console.log(S.next(75))
console.log(S.next(85))
