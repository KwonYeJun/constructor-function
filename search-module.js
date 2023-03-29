
// ! 컴온js방식
module.exports =  function nametest(name) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i] === name) {
      console.log(i);
      return;
    }
    else {
      console.log(`해당 순서는 ${name}가 아니다.`);
    }
  }
}



// ! esm방식
export default nametest = (name) => {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i] === name) {
      console.log(i);
      return;
    }
    else {
      console.log(`해당 순서는 ${name}가 아니다.`);
    }
  }
}


const a = new nametest('박수연');

// console.log(a);



function nametest(name) {
  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i] === name) {
      console.log(i);
      return;
    }
    else {
      console.log(`해당 순서는 ${name}가 아니다.`);
    }
  }
}