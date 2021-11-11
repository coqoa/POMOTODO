const express = require('express');
const app = express();

//listen(서버띄울 포트번호, 띄운 후 실행할 코드)
app.listen(8080, function(){
    console.log('listening on 8080');
});

// 누군가가 /pet으로 방문을 하면..
// pet관련 안내문을 띄워주자.

// app.get('경로',function({});
app.get('/pet',function(요청, 응답){
    응답.send('펫용품 쇼핑할 수 있는 페이지입니다.')
});

app.get('/beauty',function(요청, 응답){
    응답.send('뷰티용품 쇼핑할 수 있는 페이지입니다.')
});

// -----------------서버를 만들었고 get요청 처리까지 했다----------------------

// /어쩌구 접속시 HTML을 보내기
// '/'은 홈페이지 접속시
app.get('/',function(요청, 응답){
    // sendFile을 통해 파일전송가능, __dirname은 server.js의 현재경로를 나타냄
    응답.sendFile(__dirname + '/index.html')
});

