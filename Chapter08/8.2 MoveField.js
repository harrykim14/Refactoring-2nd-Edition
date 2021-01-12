class Customer {
    constructor(name, discountRate) {
        this._name = name;
        this._contract = new CustomerContract(dateToday());
        this._setDiscountRate(discountRate);
    }

    get discountRate() { return this._contract._discountRate; }
    // 1. 필드를 캡슐화하기
    _setDsicountRate(aNumber) { this._contract._discountRate = aNumber; }
    becomePreferred() {
        this._setDsicountRate(this.discountRate + 0.03);
    }
    applyDiscount(amount) {
        return amount.subtract(amount.multiply(this.discountRate));
    }
}

// 할인율을 뜻하는 discountRate 필드를 옮겨보자

class CustomerContract {
    constructor(startDate, discountRate) {
        this._startDate = startDate;
        this._discountRate = discountRate;
    }

    get discountRate() { return this._discountRate; }
    set discountRate(arg) { this._discountRate = arg; }
}