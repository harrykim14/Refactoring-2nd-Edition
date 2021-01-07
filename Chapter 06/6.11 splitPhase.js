// 계산이 두 단계로 나눠서 이루어지므로 절차를 나누기
function priceOrder(product, quantity, shippingMethod) {
    const priceData = calculatePrincingData(product, quantity);
    
    
    // 1. 배송비 부분을 함수로 추출하기
    // const shippingPerCase = (basePrice > shippingMethod.discountThreshold)
    //                     ? shippingMethod.discountedFee
    //                     : shippingMethod.feePerCase;
    // const shippingCost = quantity * shippingPerCase;
    // const price = basePrice - discount + shippingCost;

    /*
    // 2. 중간 데이터 구조를 만들기
    const priceData = {
        // basePrice는 첫번째 줄에서 생성되므로 여기에 바로 넣고 매개변수에서 제거
        basePrice: basePrice,
        // 함수 실행시 전달받는 매개변수도 객체로 옮기기
        quantity: quantity,
        // discount도 같은 방식으로 객체로 옮기고 매개변수에서 삭제
        discount: discount,
    };
    */

    // const price = applyShipping(priceData, /*basePrice,*/ shippingMethod /*quantity,*/ /*discount*/);
    return applyShipping(priceData, shippingMethod);;
}

function calculatePrincingData(product, quantity) {
const basePrice = product.basePrice * quantity;
    const discount = Math.max(quantity - product.discountThreshold, 0)
                    * product.basePrice
                    * product.discountRate;
    
    // 매개변수를 처리하고 나면 객체를 반환하는 함수로 추출
    return {  basePrice: basePrice, quantity: quantity, discount: discount }
}

function applyShipping(priceData, /*basePrice,*/ shippingMethod /*quantity,*/ /*discount*/) {
    const shippingPerCase = (priceData.basePrice > shippingMethod.discountThreshold)
                        ? shippingMethod.discountedFee
                        : shippingMethod.feePerCase;
    const shippingCost = priceData.quantity * shippingPerCase;
    const price = priceData.basePrice - priceData.discount + shippingCost;
    return price;
}

