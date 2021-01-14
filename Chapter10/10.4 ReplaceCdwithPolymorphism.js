function plumages(birds) {
    return new Map(birds.map(b => [b.name, plumage(b)]))
}

function speeds(birds) {
    return new Map(birds.map(b => [b.name, airSpeedVelocity(b)]))
}   

function plumage(bird) {
    switch (bird.type) {
        case "유럽 제비" : return "보통이다";
        case "아프리카 제비" 
            : return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
        case "노르웨이 파랑 앵무"
            : return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
        default: return "알 수 없다";
    }
}

function airSpeedVelocity(bird) {
    switch (bird.type) {
        case "유럽 제비" : return 35;
        case "아프리카 제비" 
            : return 40 - 2 * bird.numberOfCoconuts;
        case "노르웨이 파랑 앵무"
            : return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
        default: return null;
    }
}

// 1. airSpeedVelocity()와 plumage()를 Bird라는 클래스로 묶기

function plumage(bird) {
    return new Bird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return new Bird(bird).airSpeedVelocity;
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        switch (bird.type) {
            case "유럽 제비" : return "보통이다";
            case "아프리카 제비" 
                : return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
            case "노르웨이 파랑 앵무"
                : return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
            default: return "알 수 없다";
        }
    }

    get airSpeedVelocity() {
        switch (bird.type) {
            case "유럽 제비" : return 35;
            case "아프리카 제비" 
                : return 40 - 2 * bird.numberOfCoconuts;
            case "노르웨이 파랑 앵무"
                : return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default: return null;
        }
    }
}

// 2. 서브 클래스를 생성한다

function plumage(bird) {
    return createBird(bird).plumage;
}

function airSpeedVelocity(bird) {
    return createBird(bird).airSpeedVelocity;
}

function createBird(bird) {
    switch (bird.type) {
        case "유럽 제비" : return new EuropeanSwallow(bird);
        case "아프리카 제비" 
            : return new AfricanSwallow(bird);
        case "노르웨이 파랑 앵무"
            : return new NorwegianBlueParrot(bird);
        default: return new Bird(bird);
    }
}

class EuropeanSwallow extends Bird {
}

class AfricanSwallow extends Bird {
}

class NorwegianBlueParrot extends Bird {
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    get plumage() {
        switch (bird.type) {
            case "유럽 제비" : return "보통이다";
            case "아프리카 제비" 
                : return (bird.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";
            case "노르웨이 파랑 앵무"
                : return (bird.voltage > 100) ? "그을렸다" : "예쁘다";
            default: return "알 수 없다";
        }
    }

    get airSpeedVelocity() {
        switch (bird.type) {
            case "유럽 제비" : return 35;
            case "아프리카 제비" 
                : return 40 - 2 * bird.numberOfCoconuts;
            case "노르웨이 파랑 앵무"
                : return (bird.isNailed) ? 0 : 10 + bird.voltage / 10;
            default: return null;
        }
    }
}

// 3. 서브클래스 내부에 슈퍼클래스의 메서드를 오버라이드한다

class EuropeanSwallow extends Bird {
    get plumage() { return "보통이다"; }
    get airSpeedVelocity() { return 35; }
}

class AfricanSwallow extends Bird {
    get plumage() { return (this.numberOfCoconuts > 2) ? "지쳤다" : "보통이다";}
    get airSpeedVelocity() { return 40 - 2 * bird.numberOfCoconuts; }
}

class NorwegianBlueParrot extends Bird {
    get plumage() { return (this.voltage > 100) ? "그을렸다" : "예쁘다";}
    get airSpeedVelocity() { return (this.isNailed) ? 0 : 10 + bird.voltage / 10; }
}

class Bird {
    constructor(birdObject) {
        Object.assign(this, birdObject);
    }

    // 슈퍼클래스의 메서드는 기본 동작용으로 남겨둔다
    get plumage() {
        return "알 수 없다";
    }

    get airSpeedVelocity() {
        return null;
    }
}

// 4. 클래스 밖 함수들도 적절히 수정한다
function plumages(birds) {
    return new Map(birds.map(b => createBird(b))
                        .map(bird => [bird.name, bird.plumage]));
}

function speeds(birds) {
    return new Map(birds.map(b => createBird(b))
                        .map(bird => [bird.name, bird.airSpeedVelocity]))
}   