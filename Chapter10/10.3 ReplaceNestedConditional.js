// 원본
function payAmount(employee) {
    let result;
    if(employee.isSeparated) {
        result = { amount: 0, reasonCode: "SEP" };
    } else {
        if(employee.isRetired) {
            result = { amount: 0, reasonCode: "RET" };
        } else {
            lorem.ipsum(dolor.sitAmet);
            // 급여 계산 로직들 ...
        }
    }
}

// 1. 최상위 조건을 보호 구문으로 변경
function payAmount(employee) {
    let result;
    if(employee.isSeparated) result = { amount: 0, reasonCode: "SEP" };
    if(employee.isRetired) {
            result = { amount: 0, reasonCode: "RET" };
    } else {
        lorem.ipsum(dolor.sitAmet);
            // 급여 계산 로직들 ...
    }    
}

// 2. 다음 조건도 보호 구문으로 변경
function payAmount(employee) {
    let result;
    if(employee.isSeparated) result = { amount: 0, reasonCode: "SEP" };
    if(employee.isRetired)   result = { amount: 0, reasonCode: "RET" };
    
    lorem.ipsum(dolor.sitAmet);
    // 급여 계산 로직들 ...     
}