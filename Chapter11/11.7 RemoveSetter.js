class Person {
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get id() { return this._id; }
    set id(arg) { this._id = arg; }
}

const martin = new Person();
martin.name = "마틴";
martin.id = "1234";
// 대부분의 경우 id는 불변이어야한다

// 생성자에서 ID를 생성하게 하고 ID를 수정할 수 없도록 setter를 제거한다
class Person {
    constructor(id) {
        this._id = id;
    }
    get name() { return this._name; }
    set name(arg) { this._name = arg; }
    get id() { return this._id; }
    // set id(arg) { this._id = arg; }
}
const martin = new Person("1234");
martin.name = "마틴";