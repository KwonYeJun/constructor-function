
const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

// console.log(studentList[studentList.length - 1]);
// ! length는 항상 마지막 인덱스보다 +1 많다
// ! 마지막원소는 length보다 항상 -1 이다.

class User {
  constructor(order,name){
    this.order = order;
    this.name = name;
  }
  set order(order){
    if(typeof(order) === 'number'){
      this._order = order;
      //  ! 숫자가 아니면 객체를 생성하지 않는다.
      // ! 자바가 이런 패턴을 강제 하여 그렇다.
      // ? _를 쓰는 경향이 있다 -> 이제 작업이 끝났다.
    }
  }
}

let test = [];
studentList.forEach((student, index) => {
  test.push(new User(index, student));
});
console.log(test);
// ! 객체를 여러개를 만들 때 -> 대규모 작업을 하기 위함
// ! 객체를 여러개 관리를 해야 할 때 -> 대규모 작업 시작


// * 타입 확인
function nametest(order,name) {

  const test = Number(order);
  // ! 타입을 스트링에서 숫자로 바꾸어 주었다.

  if (typeof (test) === 'number') {
    this.order = order,
      this.name = name
  }
    console.log(typeof(order) );
}

const a = [];
for (let i = 0; i < studentList.length; i++) {
  a.push(new nametest(i, studentList[i]));
}

console.log(...a);








// ? 생성자 함수 방식
// function nametest(name, order) {


//   this.order = order,
//     this.name = name

//   function order(order) {
//     if (typeof (order) === 'number') {
//       return this._order;
//     }
//   }
// }




// ? 객체 리턴 방식
// function nametestr(name, order) {
//   return {
//     order: order,
//     name: name
//   }
// }




