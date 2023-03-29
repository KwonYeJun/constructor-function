import mysql from 'mysql2';


const co = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'newdevstest',
  port: 3306,
});//db 서버 생성

export default db = co.connect(); //! db서버 열기