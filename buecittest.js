
import AWS from 'aws-sdk';
import fs from 'fs';
// AWS SDK 구성
const s3 = new AWS.S3({
  accessKeyId: '<access key>',
  secretAccessKey: '<secret key>'
});

// S3 버킷 업로드 함수
function uploadToS3(bucketName, fileName, fileData) {
  const params = {
    Bucket: bucketName,
    Key: fileName,
    Body: fileData
  };

  s3.upload(params, function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(`File uploaded successfully. File location: ${data.Location}`);
    }
  });
}

// 테스트를 위해 로컬 파일을 읽어옴
const fileData = fs.readFileSync('./index.js');

// S3 버킷 업로드 실행
uploadToS3('firstnewdevstest', 'kwon', fileData);
