function solution(n, m) {
    var answer = [];
    
    // 최대공약수를 구하는 재귀 함수 (유클리드 호제법)
    function gcd(n, m) {
        if (n === 0) {  // n이 0인 경우 m이 최대공약수
            return m;
        } else {  // 그렇지 않으면 재귀적으로 최대공약수를 구함
            return gcd(m % n, n);
        }
    }
    
    // n이 m보다 작거나 같은 경우
    if (n <= m) {
        // 최대공약수와 최소공배수를 구하여 answer 배열에 추가
        answer.push(gcd(n, m), (n * m) / gcd(n, m));
    } else {  // n이 m보다 큰 경우
        // 최대공약수와 최소공배수를 구하여 answer 배열에 추가
        answer.push(gcd(m, n), (n * m) / gcd(m, n));
    }
    
    return answer;  // 최대공약수와 최소공배수 배열 반환
}
