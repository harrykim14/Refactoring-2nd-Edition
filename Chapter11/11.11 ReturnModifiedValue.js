let totalAscent = 0;
let totalTime = 0;
let totalDistance = 0;
calculateAscent();
calculateTime();
calculateDistance();
const pace = totalTime / 60 / totalDistance;

function calculateAscent() {
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i-1].elevation;
        totalAscent += (verticalCharge > 0) ? verticalChange : 0;
    }
}

// 1. 갱신되는 값인 totalAscent를 내부에서 선언하고 반환하도록 한다 (함수에서 반환값은 result로 이름을 변경해준다)
function calculateAscent() {
    let result = 0;
    for (let i = 1; i < points.length; i++) {
        const verticalChange = points[i].elevation - points[i-1].elevation;
        result += (verticalCharge > 0) ? verticalChange : 0;
    }
    return result;
}

// 2. 변수를 선언할 때 호출값이 대입되도록 변경하고 나머지도 똑같이 적용
const totalAscent = calculateAscent();
const totalTime = calculateTime();
const totalDistance = calculateDistance();