class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get totalAnnualCost() {
        return this.monthlyCost* 12;
    }
}

// 서브 클래스에 같은 동작을 하는 메서드가 있다면 같은 이름의 메서드로 변경한 후 부모 클래스로 메서드를 올려 사용한다

class Employee extends Party {
    get annualCost() {
        return this.monthlyCost * 12;
    }
}

class Department extends Party {
    get annualCost() {
        return this.monthlyCost* 12;
    }
}