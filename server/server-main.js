import http from 'http';
import db from './db-sever.js';
import fs from 'fs';
import io from 'socket.io-client';
const socket = io('http://localhost');



db.connect((err) => {
  if (err) { console.log('실패') }
  else {
    console.log('성공');
  }
}); //! db서버 열기


db.query('show tables', (err, re, q) => {
  if (err) { console.log(err) }
  console.log(re);
})
const server = http.createServer((request, response) => {

  const testfile = fs.readFileSync('./test.html', { encoding: 'utf-8' });
  if (request.method === "GET") {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    response.end(testfile);
  }


})
io.on('connect', (socket) => {
 
  console.log(`클라이언트 연결 성공`);
});
server.listen(1234, function (err) {
  if (err) {
    console.log('서버 연결 실패');
  }
  else {
    console.log('서버 연결 성공');
  }
});