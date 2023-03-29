let a = true;
switch (true) {
  case 3:
    console.log( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    console.log( '비교하려는 값과 일치합니다.' );
    break;
  case (a === true):
    console.log( '비교하려는 값보다 큽니다.' );
    break;
  default:
    console.log( "어떤 값인지 파악이 되지 않습니다." );
}