const org = { name : "애크미 구스베리", country : "GB" }

// 1. org 객체를 클래스로 캡슐화하기
class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() { return this._name; }
    set name(aString) { this._name = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

const organization = new Organization(org);

// 2. 별도의 필드를 정의하고 생성자와 접근자에서 둘을 구분해 사용하자
class Organization {
    constructor(data) {
        // 3. 생성자에서 title도 name도 둘 다 받을 수 있도록 변경한다
        // this._title = data.name;
        this._title = (data.title !== undefined) ? data.title : data.name;
        this._country = data.country;
    }

    get name() { return this._title; }
    set name(aString) { this._title = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

// 4. 매개변수 내에서도 title로 변경한다
const org = { title : "애크미 구스베리", country : "GB" }

class Organization {
    constructor(data) {
        // 5. 매개변수에서 변경되었으므로 생성자도 변경한다
        this._title = data.title
        this._country = data.country;
    }

    get name() { return this._title; }
    set name(aString) { this._title = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}

 // 6. 함수 이름도 적절히 변경한다

 class Organization {
    constructor(data) {
        // 5. 매개변수에서 변경되었으므로 생성자도 변경한다
        this._title = data.title
        this._country = data.country;
    }

    get title() { return this._title; }
    set title(aString) { this._title = aString; }
    get country() { return this._country; }
    set country(aCountryCode) { this._country = aCountryCode; }
}