function score(candidate, medicalExam, scoringGuide) {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
    }
    
    result -= Math.max(healthLevel - 5, 0)
    return result;
}

// 1. 새 클래스를 만들고 함수를 옮긴다
function score(candidate, medicalExam, scoringGuide) {
    return new Scorer().execute(candidate, medicalExam, scoringGuide);
}

class Scorer {
    execute(candidate, medicalExam, scoringGuide) {
        let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (scoringGuide.stateWithLowCertification(candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
    }
    
    result -= Math.max(healthLevel - 5, 0)
    return result;
    }
}

// 2. 생성자로 매개변수를 옮긴다
function score(candidate, medicalExam, scoringGuide) {
    return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
    constructor(candidate, medicalExam, scoringGuide){
        this._candidate = candidate;
        this._medicalExam = medicalExam;
        this._scoringGuide = scoringGuide;
    }
    execute() {
        let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
        healthLevel += 10;
        highMedicalRiskFlag = true;
    }

    let certificationGrade = "regular";
    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
        certificationGrade = "low";
        result -= 5;
    }
    
    result -= Math.max(healthLevel - 5, 0)
    return result;
    }
}