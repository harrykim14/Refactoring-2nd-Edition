// 1. 새 클래스를 만들어 슈퍼클래스로 사용하기
class Party {
    // 3. 공통 부분을 추출하여 생성자에 등록
    constructor(name) {
        this._name = name;
    }

    get name() { return this._name; }
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

// 2. 나머지 클래스들을 서브클래스로 변경
class Employee extends Party {
    constructor(name, id, monthlyCost) {
        super(name);
        // this._name = name;
        this._id = id;
        this._monthlyCost = monthlyCost;
    }
    get monthlyCost() { return this._monthlyCost; }
    // get name() { return this._name; }
    get id() { return this._id; }
    
    /*
    get annualCost() {
        return this.monthlyCost * 12;
    }
    */
}

class Department extends Party {
    constructor(name, staff) {
        super(name);
        // this._name = name;
        this._staff = staff;
    }

    get staff() { return this._staff.slice(); }
    // get name() { return this._name; }

    // 4. montlyCost로 함수명 통일
    get monthlyCost() {
        return this.staff
            .map(e => e.monthlyCost)
            .reduce((sum, cost) => sum + cost)
    }
    get headCount() {
        return this.staff.length;
    }
    // get annualCost() {
    //     return this.monthlyCost * 12;
    // }
}