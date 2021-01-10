/*
class Person {
    get courses() { return this._courses; }
    set courses(aList) { this._courses = aList; }
}
*/

class Person {

    constructor(name) {
        this._name = name;
        this._courses = [];
    }

    get name() { return this._name; }
    get courses() { return this._courses.slice(); }
    set courses(aList) { this._courses = aList; }
    addCourse(aCourse) { this._courses.push(aCourse); }
    removeCourse(aCourse, fnIfAbsent = () => { throw new RangeError(); }) { 
        const index = this._courses.indexOf(aCourse);
        if(index === -1) fnIfAbsent();
        else this._courses.splice(index, 1);
     }
}

class Course {
    constructor(name, isAdvanced) {
        this._name = name;
        this._isAdvanced = isAdvanced;
    }

    get name() { return this._name; }
    get isAdvanced() { return this._isAdvanced; }
    get courses() { return this._courses.slice(); }
    set courses(aList) { this._courses = aList.slice(); }
}

// 컬렉션의 getter를 제공하되 내부 컬렉션의 복제본을 반환하기

// 클라이언트의 사용 예
// numAdvancedCourses = aPerson.courses.filter(c => c.isAdvanced).length;
// aPerson은 Person 클래스를 사용하는 클라이언트

const basicCourseNames = readBasicCourseNames(filename);
aPerson.courses = basicCourseNames.map(name => new Course(name, false));

// 클라이언트에서의 사용 예
for(const name of readBasicCourseNames(filename)){
    aPerson.courses.push(new Course(name, false));
}

// 클래스에 addCourse 메서드를 추가한 후에는 변경
for(const name of readBasicCourseNames(filename)){
    aPerson.addCourse(new Course(name, false));
}


