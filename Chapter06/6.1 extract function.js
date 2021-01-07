function print0wing(invoice){
    printbanner();
    
    const outstanding = calculateOutstanding(invoice);
    /*
    // 1. 선언문을 변수가 사용되는 코드 근처로 슬라이드 한다
    let outStanding = 0;
    for (const o of invoice.orders){
        outstanding += o.amount;
    }
    */

    recordDueDate(invoice);
    printDetails(invoice, outstanding);

}

// 2. 새로운 함수 만들고 추출할 부분을 복사한다

function calculateOutstanding(invoice){

    let result = 0;
    for (const o of invoice.orders){
        result += o.amount;
    }
    return result
}