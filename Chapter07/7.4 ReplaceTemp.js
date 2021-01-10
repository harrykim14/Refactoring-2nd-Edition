class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    get price() {
        // basePrice를 변경 불가능한 읽기전용 변수로 만들고 테스트 해 본다
        
        // const basePrice = this.basePrice;
        // let discountFactor = 0.98;        
        // if(this.basePrice > 1000) discountFactor -= 0.03;

        // 임시변수를 메서드로 전부 변경하면 변수를 인라인한다
        return this.basePrice * this.discountFactor;
    }

    // 임시변수인 basePrice를 메서드로 변경
    get basePrice() {
        return this._quantity * this._item.price;
    }

    // 임시변수인 discountFactor도 메서드로 변경
    get discountFactor() {
        let discountFactor = 0.98;
        if(this.basePrice > 1000) discountFactor -= 0.03;
        return discountFactor;
    }
}