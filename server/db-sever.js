import mysql from 'mysql2';

export default mysql.createConnection({
  host: '192.168.0.156',
  user: 'admin_kwon',
  password: '1234',
  database: 'IA',
  port: 3306,
});//db 서버 생성

