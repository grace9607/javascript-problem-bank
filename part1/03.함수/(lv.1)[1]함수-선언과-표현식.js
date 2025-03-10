/**
 * [(lv.1)[1]함수-선언과-표현식.js]
 *
 * 숫자를 인자로 받아서 해당 숫자의 제곱을 반환하는 square 함수를 함수 선언 방식으로 작성하세요.
 * 숫자를 인자로 받아서 해당 숫자의 세제곱을 반환하는 cube 함수를 함수 표현식 방식으로 작성하세요.
 */

function square(x) {
  return x ** 2; // 제곱 계산
}

// 함수 표현식 방식으로 cube 함수 정의
let cube = function (x) {
  return x ** 3; // 세제곱 계산
};

// export 를 수정하지 마세요.
export { square, cube };
