class Employee {
    constructor(name, type){
        this.validateType(type);
        this._name = name;
        this._type = type;
    }
    validateType(arg) {
        if(!["enginner", "manager", "salesperson"].includes(arg))
        throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
    toString() { return `${this._name} (${this._type})`};
}

// 1. 타입 코드 변수를 자가 캡슐화한다

class Employee {
    constructor(name, type){
        this.validateType(type);
        this._name = name;
        this._type = type;
    }
    get type() { return this._type; }
    validateType(arg) {
        if(!["enginner", "manager", "salesperson"].includes(arg))
        throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
    toString() { return `${this._name} (${this._type})`};
    
    createEmployee(name, type) {
        switch (type) {
            case "engineer": return new Engineer(name, type);
            case "salesperson": return new Salesperson(name, type);
            case "manager": return new Manager(name, type);
            default: throw new Error(`${type}라는 직원 유형은 없습니다.`);
        }
        // return new Employee(name, type);
    }
}

class Engineer extends Employee {
    get type() { return "engineer" }
}

class Salesperson extends Employee {
    get type() { return "salesperson"; }
}

class Manager extends Employee {
    get type() { return "manager" }
}

// 2. switch문으로 서브 클래스를 생성하므로 생성자에서 type 변수는 제거한다
class Employee {
    constructor(name){
        this._name = name;
    }
    get type() { return this._type; }
    validateType(arg) {
        if(!["enginner", "manager", "salesperson"].includes(arg))
        throw new Error(`${arg}라는 직원 유형은 없습니다.`);
    }
    toString() { return `${this._name} (${this._type})`};
    createEmployee(name) {
        switch (type) {
            case "engineer": return new Engineer(name);
            case "salesperson": return new Salesperson(name);
            case "manager": return new Manager(name);
            default: throw new Error(`${type}라는 직원 유형은 없습니다.`);
        }
        // return new Employee(name, type);
    }
}