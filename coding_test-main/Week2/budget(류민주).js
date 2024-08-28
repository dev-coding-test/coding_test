function solution(d, budget) {
    var answer = 0;  // 지원 가능한 부서의 수를 저장할 변수
    let sum = 0;  // 현재까지 지원한 금액의 합

    // 부서별 예산 요청을 오름차순으로 정렬
    d.sort((a, b) => a - b).forEach(item => {
        // 현재까지의 합과 현재 부서의 요청 금액을 더한 값이 예산을 초과하면 종료
        if (sum + item > budget) return true;
        // 예산을 초과하지 않으면 현재 부서의 요청 금액을 합에 더함
        sum += item;
        // 지원 가능한 부서의 수 증가
        answer++;
    });
    
    return answer;  // 지원 가능한 부서의 수 반환
}