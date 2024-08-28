function solution(answers) {
    var answer = [];
    let scores =  [0, 0, 0];
    const patternOfStudent1 = [1, 2, 3, 4, 5];
    const patternOfStudent2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const patternOfStudent3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === patternOfStudent1[i % patternOfStudent1.length]) {
            scores[0]++;
        }
        if (answers[i] === patternOfStudent2[i % patternOfStudent2.length]) {
            scores[1]++;
        }
        if (answers[i] === patternOfStudent3[i % patternOfStudent3.length]) {
            scores[2]++;
        }
        
    }
    
    const maxScore = Math.max(...scores);
    
    for (let i = 0; i < scores.length; i++) {
        if (maxScore === scores[i]) {
            answer.push(i + 1);
        }
    }
    
    return answer;
}
    