function solution(n) {
    var answer = 0;
  
    function factorial(i) {
        if (i <= 1) {
            return 1;
        } 
        else {
        return i * factorial(i - 1);
        }
    }
    while(factorial(answer) <= n) {
        answer++;
    }
    return --answer;
}