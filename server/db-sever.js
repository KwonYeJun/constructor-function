import mysql from 'mysql2';

export default mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'newdevstest',
  port: 3306,
});//db 서버 생성
