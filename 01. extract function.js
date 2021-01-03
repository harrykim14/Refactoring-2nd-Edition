const invoice = require('./invoice.json');
const plays = require('./plays.json');
const createStatementData = require('./01-1. createStatementData')

// 계산 관련 코드를 이 함수로 모두 옮기기
function htmlStatement(invoice, plays){;
    return renderHTML(createStatementData(invoice,plays));   
}

function renderHTML(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
    result += "<table>\n";
    result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>";


    // let thisAmount = amountFor(perf);    

    // const play = plays[perf.playID];
    // const play = playFor(perf); -> 함수로 추출한 변수("인라인된 변수")는 제거한다

    for (let perf of data.performances){
        // 청구 내역 출력 : <<< 리팩터링 필요: HTML로 출력하는 기능이 필요 >>>
        result += `<tr><td>${perf.play.name}</td><td>(${perf.audience}석)</td>`;
        result += `<td>${usd(perf.amount)}</td></tr>\n`;
   }

   result += `</table>\n`;
   result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
   result += `<p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n`;
   return result;

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
         { style: "currency", currency: "USD", minimumFractionDigits: 2}).format(aNumber/100);
         // 단위 변환 로직 또한 함수 안으로 이동시키기
    }   

}

console.log(htmlStatement(invoice, plays));

