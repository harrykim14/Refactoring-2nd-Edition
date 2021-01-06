var chai = require('chai') // expect를 사용하기 위해 chai를 설치
var expect = chai.expect; 
const { hasUncaughtExceptionCaptureCallback } = require('process');

class Province {
    constructor(doc){
        this._name=doc.name;
        this._producers = [];
        this._totalProduction = 0;
        this._demand = doc.demand;
        this._price = doc.price;
        doc.producers.forEach (d => this.addProducer(new Producer(this, d)));
    }

    get name() { return this._name; }
    get producers() { return this._producers.slice() }
    get totalProduction() { return this._totalProduction; }
    set totalProduction(arg) { this._totalProduction = arg }
    get demand() { return this._demand }
    set demand(arg) { this._demand = parseInt(arg, 10) }
    get price() { return this._price }
    set price(arg) { this._price = parseInt(arg, 10) }

    get shortfall() {
        return this._demand - this.totalProduction;
    }
    get profit() {
        return this.demandValue - this.demandCost;
    }
    get demandValue() {
        return this.satisfiedDemand * this.price;
    }
    get satisfiedDemand() {
        return Math.min(this._demand, this.totalProduction);
    }

    get demandCost() {
        let remainingDemand = this.demand;
        let result = 0;
        this.producers
            .sort((a,b) => a.cost - b.cost)
            .forEach(p => {
                const contribution = Math.min(remainingDemand, p.production);
                remainingDemand -= contribution;
                result += contribution * p.cost;
            });
            return result;
    }

    addProducer(arg) {
        this._producers.push(arg);
        this._totalProduction += arg.production;
    }

}

class Producer {
    constructor(aProvince, data) {
        this._province = aProvince;
        this._cost = data.cost;
        this._name = data.name;
        this._production = data.production || 0;
    }
    get name() { return this._name; }
    get cost() { return this._cost; }
    set cost(arg) { this._cost = parseInt(arg, 10)}

    get production() { return this._production; }
    set production(amountStr) {
        const amount = parseInt(amountStr, 10);
        const newProduction = Number.isNaN(amount) ? 0 : amount;
        this._province.totalProduction += newProduction - this._production;
        this._production = newProduction;
    }
}

function sampleProvinceData() {
    return {
        name: "Asia",
        producers: [
            {name: "Byzantium", cost:10, production:9 },
            {name: "Attalia", cost:12, production:10 },
            {name: "Sinope", cost:10, production:6 }
        ],
        demand: 30,
        price: 20
    }
}

describe('province', function() {
   // const asia = new Province(sampleProvinceData());
   // 같은 인수로 테스트하지 말 것

   let asia;
   // beforeEach를 수행하면 테스트 사이에서 테스트 프레임워크가 알아서 해체해줌
   beforeEach(function() {
       asia = new Province(sampleProvinceData());
   })

   it('shortfall', function() {
        expect(asia.shortfall).equal(5);
    })

    it('profit', function() {
        expect(asia.profit).equal(230);
    })

    it('change production', function() {
        asia.producers[0].production = 20;
        expect(asia.shortfall).equal(-6);
        expect(asia.profit).equal(292);
    })

    it('zero demand', function() {
        asia.demand = 0;
        expect(asia.shortfall).equal(-25);
        expect(asia.profit).equal(0);
    })
    
    it('negative demand', function() {
        asia.demand = -1;
        expect(asia.shortfall).equal(-26);
        expect(asia.profit).equal(-10);
    })

    it('empty string demand', function() {
        asia.demand = "";
        expect(asia.shortfall).NaN;
        expect(asia.profit).NaN;
    })
})

describe('no producers', function(){
    let noProducers;
    beforeEach(function() {
        const data = {
            name: "No producers",
            producers: [],
            demand: 30,
            price: 20
        };
        noProducers = new Province(data);
    });
    it('shortfall', function() {
        expect(noProducers.shortfall).equal(30);
    })
    it('profit', function(){
        expect(noProducers.profit).equal(0);
    })
    
})

describe('string for producers', function() {
    it('', function() {
        const data = {
            name: "String producers",
            producers: "",
            demand: 30,
            price:20
        };
        const prov = new Province(data);
        expect(prov.shortfall).equal(0);
    })
})