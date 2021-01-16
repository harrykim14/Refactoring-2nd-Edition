function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "조커") { 
            setOffAlarms(); 
            return "조커";
        }
        if (p === "사루만") {
            setOffAlarms();
            return "사루만";
        }
    }
    return "";
}

// 1. 함수를 복제하고 질의 목적에 맞는 이름 짓기
function findMiscreant(people) {
    for (const p of people) {
        if (p === "조커") { 
            setOffAlarms(); 
            return "조커";
        }
        if (p === "사루만") {
            setOffAlarms();
            return "사루만";
        }
    }
    return "";
}

// 2. 부수효과를 낳는 부분을 제거
function findMiscreant(people) {
    for (const p of people) {
        if (p === "조커") { 
           // setOffAlarms(); 
            return "조커";
        }
        if (p === "사루만") {
           // setOffAlarms();
            return "사루만";
        }
    }
    return "";
}

// 3. 클라이언트에서는 새로운 질의함수로 호출하도록 바꾸고 원래 함수를 호출하도록 변경
const found = findMiscreant(people)
alertForMiscreant(people);

// 4. 원래 함수에서는 return 값을 제거
function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "조커") { 
            setOffAlarms(); 
            return;
        }
        if (p === "사루만") {
            setOffAlarms();
            return;
        }
    }
    return "";
}