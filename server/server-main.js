import http from 'http';
import db from './db-sever.js';

db.connect((err) => {
  if (err) { console.log('실패') }
  else {
    console.log('성공');
  }
}); //! db서버 열기


db.query('show tables' , (err,re,q) =>
{
  if(err){console.log(err)}
  console.log(re);
})
// const server = http.createServer((request, response) => {

//   let a = true;
//   switch (true) {
//     case (a = true):
//       console.log( '비교하려는 값보다 작습니다.' );
//       break;
//     case 4:
//       console.log( '비교하려는 값과 일치합니다.' );
//       break;
//     case 5:
//       console.log( '비교하려는 값보다 큽니다.' );
//       break;
//     default:
//       console.log( "어떤 값인지 파악이 되지 않습니다." );
//   }

// })


// server.listen(1234, function (err) {
//   if (err) {
//     console.log('서버 연결 실패');
//   }
//   else {
//     console.log('서버 연결 성공');
//   }
// });