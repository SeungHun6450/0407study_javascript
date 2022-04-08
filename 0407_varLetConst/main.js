/*2.*/ 
alert('나만 나오겠지?');

// 3. 변수 선언

// 1. let 선언 방식 : 할당 연산자 x
let message1;
message1 = 'Hello';
alert(message1)
console.log('message1 :', message1)

// 2. let 선언 방식 : 할당 연산자 o
let message2 = 'world';
alert(message2);
console.log('message2 :', message2);

// 3. let 선언방식 : 한번에 여러 변수 선언
// 3-1. 한 줄에 여러개
let user='bsh', age='27', message3 ='hihi';
// 3-2. 보기 편하게 줄을 나눠서
// let user='bsh', 
//     age='27',
//     message3 ='hihi';
// 3-3. 보기 편하게 줄을 나눠서
// let user='bsh'
//     , age='27'
//     , message3 ='hihi';
console.log(user);
console.log(age);
console.log(message3);

// 4. 변수 선언 후 바로 바꾸기
let message4;
message4 = 'hihihihi';
message4 = 'hihihihi1';
console.log(message4)

// 5. 변수 두개 선언 후 하나의 변수를 다른 변수로 복사
//★ 변수는 한 번만 선언해야 한다! 같은 변수를 여러번 선언하면 에러가 발생
// let me = 'me';
// let me = 'mine'; => // SyntaxError: 'message' has already been declared
let Hello = 'Hello world!';
let message5;

message5 = Hello;
console.log('Hello :', Hello);
console.log('message5 :', message5);

// 6. const : 상수 선언
const myBirth = '96.02.27';
// myBirth = '01.01.2001'; // error, can't reassign the constant!