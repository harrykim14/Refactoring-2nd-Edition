const { assert } = require("chai");

class ProductionPlan {
    get production() { 
        // 어서션이 실패하지 않으면 필드를 반환하던 코드를 수정한다
        // assert(this._production === this.calculatedProduction);
        // return this._production; 
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }

    /*
    get calculatedProduction() {
        return this._adjustments.reduce((sum, a) => sum + a.amount, 0);
    }
    */

    applyAdjustment(anAdjustment) { 
        this._adjustments.push(anAdjustment);
        // 옛 변수 _production을 참조하는 코드는 정리한다
        // this._production += anAdjustment.amount;
    }
}