/* 표현식이 너무 복잡해서 이해하기 어려울 때엔 
   지역변수를 활용하여 표현식을 쪼개 관리하기 쉽게 만들어주자 */

function price(order) {
    // 가격 = 기본가 - 수량할인 + 배송비
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount =  Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(basePrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping

    // 1. basePrice라는 새 변수로 이 항목을 옮김
    // order.quantity * order.itemPrice - 

    // 2. quantityDiscount로 마찬가지로 옮김
    // Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +

    // 3. shipping도 옮기지만 이 때 order.quantity * order.itemPrice가 중복되므로 변경
    // Math.min(order.quantity * order.itemPrice * 0.1, 100);

}