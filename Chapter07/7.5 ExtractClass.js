class Person {
    
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    get name() { return this._name; }
    set name(arg) { this._name = arg; }

    get telephoneNumber() {
        return this._telephoneNumber.toString();
     }
    /*
    get telephoneNumber() { 
        return `(${this.officeAreaCode}) ${this.officeNumber}`; 
    }
    */
    get officeAreaCode() { return this._telephoneNumber._officeAreaCode; }
    set officeAreaCode(arg) { this._telephoneNumber._officeAreaCode = arg; }
    
    get officeNumber() { return this._telephoneNumber._officeNumber; }
    set officeNumber(arg) { this._telephoneNumber._officeNumber = arg; }
}

// 전화번호 관련 동작을 별도 클래스로 추출하기
class TelephoneNumber {
    get areaCode() { return this._officeAreaCode; }
    set areaCode(arg) { this._officeAreaCode = arg; }
    get number() { return this._number; }
    set number(arg) { this._number = arg; }

    // 형식을 추출하여 표시하는 함수라면 toString()과 같은 이름으로 알기 쉽게 변경
    get toString() { 
        return `(${this.officeAreaCode}) ${this.officeNumber}`; 
    }
}