class HeatingPlan {
    get targetTemperature() {
        if(thermostat.selectedTemperature > this._max) return this._max;
        else if (thermostat.selectedTemperature < this._min) return this._min;
        else return thermostat.selectedTemperature;
    }
}

// 1. 변수 추출하기로 매개변수를 준비하기
class HeatingPlan {
    get targetTemperature() {
        const selectedTemp = thermostat.selectedTemperature;
        if(selectedTemp > this._max) return this._max;
        else if (selectedTemp < this._min) return this._min;
        else return selectedTemp;
    }
}

// 2. 메서드로 추출하기를 실행한다
class HeatingPlan {
    get targetTemperature() {
        const selectedTemp = thermostat.selectedTemperature;
        return this.xxNEWtargetTemp(selectedTemp);
    }

    xxNEWtargetTemp(selectedTemp) {
        if(selectedTemp > this._max) return this._max;
        else if (selectedTemp < this._min) return this._min;
        else return selectedTemp;
    }
}

// 3. 방금 추출한 변수를 인라인하고 메서드까지 인라인 한다
class HeatingPlan {
    get targetTemperature() {
        return this.xxNEWtargetTemp(thermostat.selectedTemperature);
    }

    xxNEWtargetTemp(selectedTemp) {
        if(selectedTemp > this._max) return this._max;
        else if (selectedTemp < this._min) return this._min;
        else return selectedTemp;
    }
}

// 클라이언트에서도 호출 함수를 변경하고 테스트한 후 잘 작동한다면 원래 함수 명으로 변경한다