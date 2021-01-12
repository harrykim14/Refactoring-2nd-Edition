function calculatePeopleAge(people) {
    
    return `최연소: ${youngestAge()}, 총 급여: ${totalSalary()}`;

    function totalSalary() {
        /*
        let totalSalary = 0;
        for (const p of people) {
            //if (p.age < youngest) youngest = p.age;
            totalSalary += p.salary;
        }
        return totalSalary;
        */

        return people.reduce((total, p) => total + p.salary, 0)
        
    }

    function youngestAge() {
        /*
        let youngest = people[0] ? people[0].age : Infinity;
        // 1. 반복문을 단순복제 
        for (const p of people) {
            if (p.age < youngest) youngest = p.age;
            //totalSalary += p.salary;
        }
        */
       return Math.min(...people.map(p => p.age));
    }
}

