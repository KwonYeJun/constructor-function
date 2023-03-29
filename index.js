function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false


// const a = new Date();

// console.log(a.getFullYear());

// const b = {
//   year : 2023,
//   month : 3,
//   day : 29
// }

// console.log(b.year+ "년");