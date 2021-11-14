const express = require('express');
const app = express();
app.use(express.static('public'));
const MongoClient = require('mongodb').MongoClient;
let db;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

MongoClient.connect('mongodb+srv://POMOTODO:Aorqnr30335@cluster0.l9rep.mongodb.net/pomotodo?retryWrites=true&w=majority', function(err, client){
    if (err) return console.log(에러);

    db = client.db('pomotodo');
    db.collection('users').insertOne({ id : 1, password : 1}, function(err, res){
        console.log('db save')
    })

    // 서버를 띄우기 위한 코드를 내부에 배치하기
    app.listen('8080', function(){
    console.log('8080포트 접속성공')
    });
})
// 누군가가 /login으로 방문을 하면..
// login관련 안내문을 띄워주자.

app.get('/login',function(req, rep){``
    rep.sendFile(__dirname + '/user/login.html')
});
app.get('/signup',function(req, rep){
    rep.sendFile(__dirname + '/user/signup.html')
});

// /어쩌구 접속시 HTML을 보내기
// '/'은 홈페이지 접속시
app.post('/home',function(req, rep){
    // sendFile을 통해 파일전송가능, __dirname은 server.js의 현재경로를 나타냄
    rep.sendFile(__dirname + '/public/index.html')
    // 응답.sendFile(__dirname + '/style.css')
});
app.post('/signupResult',function(req, rep){
    rep.sendFile(__dirname + '/user/signupResult.html')
    // console.log(req.body);
    console.log('회원가입정보');
    console.log("id = "+ req.body.loginId);
    console.log("password = "+ req.body.password);
    console.log("email = "+ req.body.email);
    console.log("number = "+ req.body.number);
    console.log("gender = "+ req.body.gender);
    console.log("birthday = "+ req.body.birthday);
    console.log('회원가입정보');
    // rep.send('가입전송완료');
   
    // db = client.db('pomotodo');
    // db.collection('users').insertOne({ id : 1, password : 1}, function(err, res){
    //     console.log('db save')
    // })
})


//서버에 자료 저장하기


// app.post('/signupResult', function(req, rep){
//     rep.sendFile(__dirname + '/signupResult.html')
//     db = client.db('pomotodo');
//     db.collection('users').insertOne({아이디 : 1, 비밀번호 : 1, 비밀번호확인 : 1, 이메일 : 1, 휴대전화번호 : 1,  생년월일 : 1, 성별 : 1}, function(err, res){
//         console.log('db저장완료');
//     })
    
// });