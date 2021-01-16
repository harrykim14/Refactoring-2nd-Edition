class Employee {
    constructor(name, typeCode) {
        this._name = name;
        this._typeCode = typeCode;
    }

    get name() {
        return this._name;
    }
    get type() {
        return Employee.legalTypeCodes[this._typeCode]
    }
    static get legalTypeCodes() {
        return { "E": "Engineer", "M": "Manager", "S": "Salesperson" }
    }
}

// 호출 예
candidate = new Employee(document.name, document.empType);
const leadEngineer = new Employee(document.name, "E");

// 1. 팩터리 함수 만들기
function createEmployee(name, typeCode) {
    return new Employee(name, typeCode);
}

// 2. 호출 예를 팩터리 함수로 변경
candidate = createEmployee(document.name, document.empType);
const leadEngineer = createEmployee(document.name, "E");

// 3. 문자열 리터럴을 건내는 함수를 변경
const leadEngineer = createEngineer(document.name);

function createEngineer(name) {
    return new Employee(name, 'E');
}