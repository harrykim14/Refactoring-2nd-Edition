
function createStatementData(invoice, plays){
    const result = {};
    result.customer = invoice[0].customer;
    result.performances = invoice[0].performances.map(enrichPerformance);
    result.totalAmount = totalAmount(result);
    result.totalVolumeCredits = totalVolumeCredits(result);
    return result;

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance);
        result.play = playFor(result);
        result.amount = amountFor(result);
        result.volumeCredits = volumeCreditsFor(result);
        return result;
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID];
    }
    function amountFor(aPerformance){
        let result = 0;
    
            // 새로운 요구사항에 의해 switch문은 점점 복잡해질 것
            switch (aPerformance.play.type) {
                case "tragedy" : // 비극
                    result = 40000;
                    if(aPerformance.audience > 30) result += 1000 * (aPerformance.audience - 30);
                    break;
                case "comedy" : // 희극
                    result = 30000;
                    if(aPerformance.audience > 20) result += 10000+ 500 * (aPerformance.audience - 20);
                    result += 300 * aPerformance.audience;
                    break;
                case "default" : // 디폴트
                    throw new Error(`알 수 없는 장르: ${aPerformance.play.type}`);
            }
    
            return result;    
    }
    function volumeCreditsFor(aPerformance) {
        let result = 0;
        //포인트 적립
        result += Math.max(aPerformance.audience - 30, 0); 
    
         // 관객 5명마다 추가 포인트 제공
         if("comedy" === aPerformance.play.type) 
            result += Math.floor(aPerformance.audience / 5);
    
        return result;
    }

    function totalAmount(data) {
        return data.performances
                .reduce((total, p) => total + p.amount, 0);
    }
    function totalVolumeCredits(data) {
        return data.performances
                .reduce((total, p) => total + p.volumeCredits, 0);
    }
};

module.exports = createStatementData;