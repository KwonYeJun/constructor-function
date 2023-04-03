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
  const ip = socket.request.headers['x-forwarded-for'] || socket.request.connection.remoteAddress;
  console.log(`클라이언트 연결 성공 - 클라이언트IP: ${ip}, 소켓ID: ${socket.id}`);

  // 2) 연결 종료 이벤트: "매개변수로 들어온 socket"으로 처리해야 함 주의!
  socket.on('disconnect', (reason) => {
    console.log(reason);
    console.log(`연결 종료 - 클라이언트IP: ${ip}, 소켓ID: ${socket.id}`)
  });

  // 3) 에러 발생 이벤트: "매개변수로 들어온 socket"으로 처리해야 함 주의!
  socket.on('error', (error) => {
    console.log(`에러 발생: ${error}`);
  })

  // 4) 클라이언트에서 보낸 이벤트 처리. 클라이언트에서 "client_msg" 이름으로 보낸 데이터 수신
  socket.on('client_msg', (data) => {
    console.log(`클라이언트에서 보낸 메시지 수신: ${data}`);

    //클라이언트에게 "server_msg" 이름으로 데이터 전송
    socket.emit('server_msg', `[${socket.id}]소켓 서버에서 보낸 메시지입니다.`);
  })
});
server.listen(1234, function (err) {
  if (err) {
    console.log('서버 연결 실패');
  }
  else {
    console.log('서버 연결 성공');
  }
});