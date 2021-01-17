class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
    get genderCode() { return "X"; }
}

class Male extends Person {
    get genderCode() { return "M"; }
}

class Female extends Person {
    get genderCode() { return "F"; }
}

function createPerson(name) {
    return new Person(name)
}

function createMale(name) {
    return new Male(name)
}

function createFemale(name) {
    return new Female(name)
}

function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        let p;
        switch(aRecord.gender) {
            case "M" : p = new Male(aRecord.name); break;
            case "F" : p = new Female(aRecord.name); break;
            default : p = new Person(aRecord.name);
        }
        result.push(p);
    });
    return result;
}

function createPerson(aRecord) {
    let p;
    switch(aRecord.gender) {
        case "M" : p = new Male(aRecord.name); break;
        case "F" : p = new Female(aRecord.name); break;
        default : p = new Person(aRecord.name);
    }
    result.push(p);
}

function loadFromInput(data) {
    const result = [];
    data.forEach(aRecord => {
        result.push(createPerson(aRecord));
    })
    return result;
}

// 변수 p를 인라인하기
function createPerson(aRecord) {
    switch(aRecord.gender) {
        case "M" : new Male(aRecord.name); break;
        case "F" : new Female(aRecord.name); break;
        default : new Person(aRecord.name);
    }
}

// 파이프라인으로 바꾼다
function loadFromInput(data) {
    return data.map(aRecord => createPerson(aRecord));
}

//  
class Person {
    constructor(name, genderCode) {
        this._name = name;
        this._genderCode = genderCode;
    }
    get name() { return this._name; }
    get genderCode() { return "X"; }
    get isMale() { return "M" === this._genderCode; }
}

function createPerson(aRecord) {
    switch(aRecord.gender) {
        case "M" : new Person(aRecord.name, "M"); break;
        case "F" : new Person(aRecord.name, "F"); break;
        default : new Person(aRecord.name, "X");
    }
}