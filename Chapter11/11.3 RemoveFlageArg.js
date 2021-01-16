// flag 인수가 둘 이상이면 함수 하나가 너무 많은 일을 처리하고 있다는 신호이다

// client 예시
aShipment.deliveryDate = deliveryDate(anOrder, true);

function deliveryDate(anOrder, isRush) {
    if(isRush) {
        let deliveryTime;
        if(["MA", "CT"]      .includes(anOrder.deliveryState)) deliveryTime = 1;
        else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else deliveryTime = 3;
        return anOrder.placedOn.plusDays(1 + deliveryTime);
    }
    else {
        let deliveryTime;
        if(["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
        else deliveryTime = 4;
        return anOrder.placedOn.plusDays(2 + deliveryTime);
    }
}

// 조건문 분해하기를 적용해보자
function deliveryDate(anOrder, isRush) {
    if(isRush) return rushDeliveryData(anOrder);
    else return regularDeliveryDate(anOrder);
}

function rushDeliveryData(anOrder) {
    let deliveryTime;
        if(["MA", "CT"]      .includes(anOrder.deliveryState)) deliveryTime = 1;
        else if (["NY", "NH"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else deliveryTime = 3;
    return anOrder.placedOn.plusDays(1 + deliveryTime);
}

function regularDeliveryDate(anOrder) {
    let deliveryTime;
        if(["MA", "CT", "NY"].includes(anOrder.deliveryState)) deliveryTime = 2;
        else if (["ME", "NH"].includes(anOrder.deliveryState)) deliveryTime = 3;
        else deliveryTime = 4;
    return anOrder.placedOn.plusDays(2 + deliveryTime);
}

// 이 이후엔 클라이언트에서 rushDeliveryData()나 regularDeliveryDate()를 직접 호출하면 flag 인자를 사용하지 않아도 된다