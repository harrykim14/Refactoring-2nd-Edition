function distanceTravelled(scenario, time) {
    let result;
    let acc = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * acc * primaryTime * primaryTime;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = acc * scenario.delay;
        acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime
                + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return result;
}
// acc라는 변수 값이 쓰임새에 따라 두 번 변경되므로 이를 분리해보자

// 1. 새로운 변수명을 지어준다
function distanceTravelled(scenario, time) {
    let result;
    const primaryAcc = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcc * primaryTime * primaryTime;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcc * scenario.delay;
        let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime
                + 0.5 * acc * secondaryTime * secondaryTime;
    }
    return result;
}

// 2. 나머지 하나도 변수명을 변경하고 const처리한다
function distanceTravelled(scenario, time) {
    let result;
    const primaryAcc = scenario.primaryForce / scenario.mass;
    let primaryTime = Math.min(time, scenario.delay);
    result = 0.5 * primaryAcc * primaryTime * primaryTime;
    let secondaryTime = time - scenario.delay;
    if (secondaryTime > 0) {
        let primaryVelocity = primaryAcc * scenario.delay;
        let secondaryAcc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
        result += primaryVelocity * secondaryTime
                + 0.5 * secondaryAcc * secondaryTime * secondaryTime;
    }
    return result;
}