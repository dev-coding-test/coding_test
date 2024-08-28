function solution(arr) {
    var answer = [];  // 결과를 저장할 배열
    
    // 배열의 각 요소를 반복
    for (let i = 0; i < arr.length; i++) {
        // 첫 번째 요소이거나, 이전 요소와 현재 요소가 다르면
        if (i === 0 || arr[i-1] !== arr[i]) {
            answer.push(arr[i]);  // 결과 배열에 현재 요소를 추가
        }
    }
    
    return answer;  // 결과 배열 반환
}
