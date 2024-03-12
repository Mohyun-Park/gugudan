const readline = require('readline');

// 콘솔 입력을 처리하기 위한 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 구구단 출력 함수
function printMultiplicationTable(dan) {
    // 입력된 단 수에 해당하는 구구단 출력
    console.log(`구구단 ${dan}단 출력`);
    for (let i = 1; i <= 9; i++) {
        console.log(`${dan} x ${i} = ${dan * i}`);
    }
}

// 사용자로부터 단 수 입력 받기
rl.question('출력할 구구단의 단 수를 입력하세요: ', (dan) => {
    // 입력된 값이 숫자인지 확인
    if (isNaN(dan)) {
        console.log('올바른 숫자를 입력하세요.');
    } else {
        // 입력된 값으로 구구단 출력 함수 호출
        printMultiplicationTable(parseInt(dan));
    }
    
    // 입력 종료 및 프로그램 종료
    rl.close();
});
