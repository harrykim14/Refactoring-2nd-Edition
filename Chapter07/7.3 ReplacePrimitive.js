class Order {
    constructor(data) {
        this.priority = data.priority;
    }
    // 1. 변수부터 캡슐화하기
    // get priority() { return this._priority; }

    // 3. Priority 클래스에서 String값을 반환하므로 함수명을 변경
    get priorityString() { return this._priority; }
    set priority(aString) { this._priority = aString; }
}

// 2. 속성을 표현하는 값 클래스 Priority를 만든다
class Priority {
    constructor(value) {
        this._value = value;
    }
    toString() { return this._value; }
    get priority() { return this._priority.toString(); }
    set prioirty(aString) { this._priority = new Priority(aString); }
}

// 클라이언트
highPriorityCount = orders.filter(o => "high" === o.priorityString || "rush" === o.priorityString)
                        .length;

