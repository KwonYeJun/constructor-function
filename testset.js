function info(id, pw, email) {
  this.id = id,
    this.pw = pw,
    this.email = email
}
const test = new info('kyj', '1234', 'kyj@gmail.com');
console.log(test);


let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname , this.nickname] = value.split(" ");
  }

};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper asdf asdf2 asdf3";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
console.log(user.nickname); 


// function Foo(name) {

//   if (!new.target)
//    {
//     return new Foo(name);
     
//     }
//     this.name = name;
// }

// try {

//  console.log(Foo('이름').name);
// } catch (e) {
//   console.log('실패');

// }
