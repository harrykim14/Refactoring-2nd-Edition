class Order {
    constructor(data) {
        this._number = data.number;
        this._customer = registerCustomer(data.customer);
    }

    get customer() { return this._customer; }
}

class Customer {
    constructor(id) {
        this._id = id;
    }

    get id() { return this._id; }
}

// 1. 물리적으로 똑같은 객체를 사용하고 싶다면 저장소 객체를 생성한다
let _repositoryData;

export function initialize() {
    _repositoryData = {};
    _repositoryData.customers = new Map();
}

export function registerCustomer(id) {
    if(! _repositoryData.cusotmers.has(id))
        _repositoryData.customers
    return findCustomer(id);
}

export function findCustomer(id) {
    return _repositoryData.customers.get(id);
}