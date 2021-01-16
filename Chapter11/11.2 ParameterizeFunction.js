function tenPercentRise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.1);
}

function fivePercentRise(aPerson) {
    aPerson.salary = aPerson.salary.multiply(1.05);
}

// 두 함수를 아래의 함수 하나로 대체할 수 있다

function raise(aPerson, factor) {
    aPerson.salary = aPerson.salary.multiply(1 + factor);
}

/* --------------------------------------------------------- */

function baseCharge(usage) {
    if(usage < 0) return usd(0);
    const amount = bottomBand(usage) * 0.03
                 + middleBand(usage) * 0.05
                 + topBand(usage) * 0.07;
    return usd(amount);
}

function bottomBand(u){
    return Math.min(u, 100);
} 

// 1. 리터럴을 두 개 사용하므로 이 함수를 먼저 변경한다
function middleBand(u){
    return u > 100 ? Math.min(u, 200) - 100 : 0;
} 

function topBand(u){
    return u > 200 ? u - 200 : 0;
} 

// 2. 매개변수를 입력하도록 변경한다
function withinBand(u, bottom, top){
    return u > bottom ? Math.min(u, top) - bottom : 0;
} 

// 3. 해당 로직을 이용하도록 함수 호출문을 변경하고 사용하지 않는 나머지 두 개의 함수를 제거
function baseCharge(usage) {
    if(usage < 0) return usd(0);
    const amount = withinBand(usage, 0, 100) * 0.03
                 + withinBand(usage, 100, 200) * 0.05
                 + withinBand(usage, 200, Infinity) * 0.07;
    return usd(amount);
}
