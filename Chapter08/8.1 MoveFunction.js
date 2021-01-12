// 중첩 함수인 calculateDistance()를 최상위로 옮겨서 독립적으로 계산하기

function trackSummary(points) {
    const totalTime = calculateTime();
    // 5. 바깥의 함수명을 변경하고 변수는 인라인하기
    // const totalDistance = top_calculateDistance(points);
    const pace = totalTime / 60 / totalDistance(points);
    return {
        time: totalTime,
        // distance: totalDistance,
        distance: totalDistance(points),
        pace: pace
    };
}

function calculateTime() { /*...*/ }

// 1. 최상위로 함수를 복사 
function totalDistance(points) {
    let result = 0;
    // 2. 정의되지 않은 distance와 points를 사용하기 때문에 매개변수로 넘겨주기
    for(let i = 1; i < points.length; i++){
        result += distance(points[i-1], points[i]);
    }
    return result;

    // 3. distance()는 top_calculateDistance에 의존하는 함수
    function distance(p1, p2) { 
        const EARTH_RADIUS = 3959 // 단위: 마일
        const dLat = radians(p2.lat) - radians(p1.lat); // Math.PI/180
        const dLon = radians(p2.lon) - radians(p1.lon);
        const a = Math.pow(Math.sin(dLat / 2), 2)
                + Math.cos(radians(p2.lat))
                * Math.cos(radians(p1.lat))
                * Math.pow(Math.sin(dLon / 2), 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        return EARTH_RADIUS * c
    }

    // 4. distance()는 radians밖에 사용하지 않으므로 이 함수는 calculateDistance 내부로 옮기는 것이 낫다
    function radians(degrees) {
        return degrees * Math.PI / 180;
    }
}
