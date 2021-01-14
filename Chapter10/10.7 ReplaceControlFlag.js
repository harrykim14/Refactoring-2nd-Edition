let found = false;
for (const p of people) {
    if(!found){
        if(p === '조커') {
            sendAlert();
            found = true;
        }
        if(p ==='사루만') {
            sendAlert();
            found = true;
        }
    }
}
// 제어 흐름을 found 변수를 통해 제어하고 있고 
// 만약 이 found가 참이라면 반복문에선 더 할 일이 없으므로 
// break 혹은 return을 써서 함수에서 빠져나오기

// 1. found = true와 같이 제어 플래그를 갱신하는 대신 return으로 변경한다
let found = false;
for (const p of people) {
    if(!found){
        if(p === '조커') {
            sendAlert();
            return;
        }
        if(p ==='사루만') {
            sendAlert();
            return;
        }
    }
}

// 2. 갱신 코드를 모두 제거했다면 제어 플래그를 참조하는 다른 코드도 모두 제거한다
for (const p of people) {   
    if(p === '조커') {
        sendAlert();
        return;
    }

    if(p ==='사루만') {
        sendAlert();
        return;
    }
}

// 3. 파이프라인을 사용하기로 더 다듬을 수도 있다
if(people.some(p => ["조커", "사루만"].includes(p))) sendAlert();