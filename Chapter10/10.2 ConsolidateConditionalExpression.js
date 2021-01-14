// 원본
function disablilityAmount(anEmployee){
    if(anEmployee.seniority < 2) return 0;
    if(anEmployee.monthsDisabled > 12) return 0;
    if(anEmployee.isPartTime) return 0;
}

// 1. 연산자로 조건식을 연결한다
function disablilityAmount(anEmployee){
    if((anEmployee.seniority < 2) || (anEmployee.monthsDisabled > 12)) return 0;
    if(anEmployee.isPartTime) return 0;
}

// 2. 나머지도 부수효과가 같다면 조건식을 연결한다
function disablilityAmount(anEmployee){
    if((anEmployee.seniority < 2) 
        || (anEmployee.monthsDisabled > 12)
        || (anEmployee.isPartTime)) return 0;
}

// 3. 모든 조건문을 통합했다면 최종 조건식을 함수로 추출할 수도 있다
function disablilityAmount(anEmployee){
    if(isNotEligibleForDisability()) return 0;
}

function isNotEligibleForDisability() {
    return (anEmployee.seniority < 2) 
            || (anEmployee.monthsDisabled > 12)
            || (anEmployee.isPartTime)
}

/* ------------------------------------------- */

function a(anEmployee) {
    if (anEmployee.onVacation)
        if(anEmployee.seniority > 10)
            return 1;
    return 0.5
}

function a(anEmployee) {
    if ((anEmployee.onVacation) 
        && (anEmployee.seniority > 10)) return 1;
    return 0.5
}