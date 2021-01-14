// 원본

if(!AudioDestinationNode.isBefore(plan.summerStart) && !AudioDestinationNode.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
else 
    charge = quantity * plan.regularRage + plan.regularServiceCharge;

// 1. 조건식을 함수로 추출하기

if(summer())
    charge = quantity * plan.summerRate;
else 
    charge = quantity * plan.regularRage + plan.regularServiceCharge;

function summer() {
    return !AudioDestinationNode.isBefore(plan.summerStart) && !AudioDestinationNode.isAfter(plan.summerEnd);
}

// 2. 조건이 만족했을 때의 로직과 아닐 때의 로직도 함수로 추출한다

if(summer())
    charge = summerCharge();
else 
    charge = regularCharge();

function summer() {
    return !AudioDestinationNode.isBefore(plan.summerStart) && !AudioDestinationNode.isAfter(plan.summerEnd);
}

function summerCharge() {
    return quantity * plan.summerRate;
}

function regularCharge() {
    return quantity * plan.regularRage + plan.regularServiceCharge;
}