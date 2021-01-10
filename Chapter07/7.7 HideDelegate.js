class Person {
    constructor(name) {
        this._name = name;
    }

    get name(){ return this._name };
    get department() { return this._department; }
    set department(arg) { this._department = arg; }

    // 클라이언트가 부서 클래스를 볼 수 없게 숨기고
    //  사람 클래스에 위임 메서드를 만들기
    get manager() { return this._deparment.manager; }
}

class Department {
    get chargeCode() { return this._chargeCode; }
    set chargeCode(arg) { this._chargeCode = arg; }
    get manager() { return this._manager; }
    set manager(arg) { this._manager = arg; }
}