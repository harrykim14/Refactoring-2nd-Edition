/*
    객체를 객체에 중첩하면 내부 객체를 값으로 취급할 수 있다
    객체는 불변값이고 이 값은 복제해서 여러곳에서 사용할 수 있어 다루기 좋다
    하지만 이 공유 객체의 값을 모든 관련 객체에 알려야 하는 경우에는 이 리팩터링을 적용해서는 안된다
*/

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    // 2. 이제 setter에 매개변수를 넣어주어야 한다
    get officeAreaCode() { return this._telephoneNumber.areaCode; }
    set officeAreaCode(arg) { 
        this._telephoneNumber = new TelephoneNumber(arg, this.officeNumber); }
    get officeNumber() { return this._telephoneNumber.number; }
    set officeNumber(arg) { 
        this._telephoneNumber = new TelephoneNumber(this.officeAreaCode, arg); }
}

class TelephoneNumber {
    // 1. 전화번호를 불변으로 만들기
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }
    get areaCode() { return this._areaCode; }
    set areaCode(arg) { this._areaCode = arg; }
    get number() { return this._number; }
    set number(arg) { this._number = arg; }

    // 3. 동치성 메서드를 작성한다
    equals(other) {
        if(!(other instanceof TelephoneNumber)) return false;
        return this.areaCode === other.areaCode && this.number === other.number;
    }
}