function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if(data) return new ShippingRules(data);
    else return -23;
}

function calcShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
    if(shippingRules < 0) return shippingRules;
}

const status = calcShippingCosts(orderData);
if (status < 0) errorList.push({order: orderData, errorCode: status});

// 1. try/catch문으로 처리 로직을 처리할 수 없기 때문에 status선언과 초기화를 분리한다 (catch문에서 던져버리기 때문에)
let status;
status = calcShippingCosts(orderData);
if (status < 0) errorList.push({order: orderData, errorCode: status});

// 2. 전역 및 가변 변수로 status를 만들었으므로 try/catch문에서 이 변수를 사용할 수 있다
try {
    status = calcShippingCosts(orderData)
} catch (e) {
    throw e;
}
if (status < 0) errorList.push({order: orderData, errorCode: status});

// 3. 에러를 처리할 서브클래스를 생성한다
class OrderProcessingError extends Error {
    constructor(errorCode) {
        super(`주문 처리 오류 ${errorCode}`);
        this.code = errorCode;
    }
    get name() { return "OrderProcessingError" };
}

// 4. catch절에서 errorList로 에러를 push하는 로직을 추가
try {
    status = calcShippingCosts(orderData)
} catch (e) {
    if (e instanceof OrderProcessingError) 
        errorList.push({order: orderData, errorCode: e.code })
    else
        throw e;
}
if (status < 0) errorList.push({order: orderData, errorCode: status});

// 5. 오류 검출 코드를 수정하고 오류 코드 대신 이 예외를 던지도록 한다
function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if(data) return new ShippingRules(data);
    else throw new OrderProcessingError(-23)
}

// 6. 오류 처리가 잘 실행된다면 오류는 예외 메커니즘이 대신 처리해줄 것
function calcShippingCosts(anOrder) {
    const shippingRules = localShippingRules(anOrder.country);
}

// 7. try/catch문에서 예외가 처리되므로 바깥의 예외처리 구문은 제거할 수 있다
try {
    calcShippingCosts(orderData)
} catch (e) {
    if (e instanceof OrderProcessingError) 
        errorList.push({order: orderData, errorCode: e.code })
    else
        throw e;
}

