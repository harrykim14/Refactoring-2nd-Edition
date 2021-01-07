const reading = {
    costomer: "ivan",
    quantity: 10,
    month: 5,
    year: 2017
}

// 1. 캡슐화 작업
class Reading {
    constructor(data) {
        this._customer = data.customer;
        this._quantity = data.quantity;
        this._month = data.month;
        this._year = data.year;
    }

    get customer() { return this._customer; }
    get quantity() { return this._quantity; }
    get month() { return this._month; }
    get year() { return this._year; }

    // 2. 함수 옮기고 이름 적절히 변경하기
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity;
    }

    get taxableCharge(aReading) {
        return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year))
    }
}

/* Client3
const rawReading = acquireReading();
const aReading = new Reading(rawReading);
const baseCharge = aReading.baseCharge;
const taxableCharge = aReading.taxableCharge;
*/

/*
// 3. 함수로 계산과정을 추출
function taxableChargeFn(aReading) {
    return Math.max(0, aReading.baseCharge - taxThreshold(aReading.year))
}
*/