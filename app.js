const fs = require("fs");

function user(id, password, email) {
  (this.id = id), (this.password = password), (this.email = email);
}
const d = new user("kyj", "1234", "kyj@gmail.com");
const e = new user("daljae", "1234", "daljae@gmail.com");
const f = new user("jieun", "1234", "jieun@gmail.com");

// console.log(d);
// console.log(e);
// console.log(f);

let names = ["kyj", "daljae", "jieun"];
let passwords = ["1234", "1234", "1234"];
let emils = ["kyj@gmail.com", "daljae@gmail.com", "jieun@gmail.com"];
let meubers = [];
for (let i = 0; i < 3; i++) {
  meubers.push(new user(names[i], passwords[i], emils[i]));
}
console.dir(meubers);
fs.writeFileSync("meubers.JSON", JSON.stringify(meubers, null, 2), "utf-8");

// function c(a,b,c) {

//     this.year = a;
//     this.month = b;
//     this.day = c;
// }//? . 은 객체다 this. 도 객체?

// const test = c(2023,3,29);
// console.log(test);

// const b = {
//   year : 2023,
//   month : 3,
//   day : 29
// }
