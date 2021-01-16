class ChargeCal {
    constructor(cust, usage, prov){
        this._cust = cust;
        this._usage = usage;
        this._prov = prov;
    }

    get baseCharge() {
        return this._cust.baseRate * this._usage;
    }

    get charge() {
        return this.baseCharge + this._prov.connectionCharge;
    }
}

// 호출 예
monthCharge = new ChargeCal(cust, usage, prov).charge;

// 1. 생성자를 함수로 추출
function charge(cust, usage, prov) {
    return new ChargeCal(cust, usage, prov).charge;
}

// 2. 반환값을 변수로 추출하고 보조 메서드를 인라인한다
class ChargeCal {
    constructor(cust, usage, prov){
        this._cust = cust;
        this._usage = usage;
        this._prov = prov;
    }

    get charge() {
        const baseCharge = this._cust.baseRate * this._usage;
        return baseCharge + this._prov.connectionCharge;
    }
}

// 3. 로직이 한 메서드 안에서 이루어진다면 생성자에 전달되는 모든 데이터를 메서드로 옮긴다
class ChargeCal {
    constructor(cust, usage, prov){
        this._cust = cust;
        this._usage = usage;
        this._prov = prov;
    }

    get charge(cust, usage, prov) {
        const baseCharge = this._cust.baseRate * this._usage;
        return baseCharge + this._prov.connectionCharge;
    }
}

function charge(cust, usage, prov) {
    return new ChargeCal(cust, usage, prov).charge(cust, usage, prov)

}

// 4. 생성자에서 변수를 제거하고 메서드로 전부 옮긴다
class ChargeCal {

    get charge(cust, usage, prov) {
        const baseCharge = cust.baseRate * usage;
        return baseCharge + prov.connectionCharge;
    }
}

function charge(cust, usage, prov) {
    return new ChargeCal().charge(cust, usage, prov)
}

// 5. 최상위 charge 함수로 클래스 내 함수를 전부 인라인
function charge(cust, usage, prov) {
    const baseCharge = cust.baseRate * usage;
    return baseCharge + prov.connectionCharge;
}