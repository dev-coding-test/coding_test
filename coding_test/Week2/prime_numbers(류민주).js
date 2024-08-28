function solution(n) {
    var answer = 0;
    
    // n + 1 길이의 배열을 true로 초기화하여 소수 여부를 표시
    const sieve = new Array(n + 1).fill(true);
    sieve[0] = sieve[1] = false;  // 0과 1은 소수가 아니므로 false로 설정
    
    // 에라토스테네스의 체 알고리즘
    for (let i = 2; i * i <= n; i++) { //i * i <= n 조건을 사용하여 제곱근 n까지 반복
        if (sieve[i]) {  // i가 소수인 경우
            for (let j = i * i; j <= n; j += i) {  // i의 배수를 false로 설정, i * i 보다 작은 배수들은 이미 이전 단계에서 제거되었기 때문에 j = i * i 로 시작
                sieve[j] = false;
            }
        }
    }
    
    // true 값인 요소의 개수를 세어 소수의 개수를 구함
    answer = sieve.filter(item => item).length;
    
    return answer;  // 소수의 개수 반환
}
