// 레코드를 통째로 넘기면 나중에 그 함수가 더 다양한 값을 사용하게 되더라도 유연하게 대처할 수 있다
//const low = aRoom.daysTempRange.low;
//const high = aRoom.daysTempRange.high;
if(!aPlan.withinRange(low, high))
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");

class HeatingPlan {
    withinRange(bottom, top) {
        return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high);
    }

    // 1. 빈 메서드를 만든다
    xxNEWwithinRange(aNumberRange) {
        return this.withinRange(aNumberRange.low, aNumberRange.high);
    }
}

// 2. 새 함수를 사용하도록 변경
if(!aPlan.xxNEWwithinRange(aRoom.daysTempRange))
    alerts.push("방 온도가 지정 범위를 벗어났습니다.");

// 3. low와 high는 더이상 사용하지 않으므로 제거

// 4. 새 함수로 기존 함수 내용을 인라인
function xxNEWwithinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) && 
           (aNumberRange.high <= this._temperatureRange.high)
}
