import http from 'http';
import db from './db-sever.js';


const server = http.createServer((request, response) => {






})


server.listen(1234, function (err) {
  if (err) {
    console.log('서버 연결 실패');
  }
  else {
    console.log('서버 연결 성공');
  }
});