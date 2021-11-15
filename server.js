const express = require('express');
const app = express();
app.use(express.static('public'));
const MongoClient = require('mongodb').MongoClient;
let db;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

MongoClient.connect('mongodb+srv://POMOTODO:Aorqnr30335@cluster0.l9rep.mongodb.net/pomotodo?retryWrites=true&w=majority', function(err, client){
    if (err) return console.log(에러);

    // 서버를 띄우기 위한 코드(데이터베이스 내부에 배치해서 디비와 연결되면 서버를 띄우도록)
    app.listen('8080', function(){
    console.log('8080포트 접속성공')
    });

    app.post('/signupResult',function(req, res){
        // res.sendFile(__dirname + '/user/signupResult.html')

        // console.log('회원가입정보');
        // console.log(req.body) : bodyParser를 통해 요청값을 분석한 정보(객체형식으로 반환하는 값)
        // console.log("id = "+ req.body.loginId);
        // console.log("password = "+ req.body.password);
        // console.log("email = "+ req.body.email);
        // console.log("number = "+ req.body.number);
        // console.log("gender = "+ req.body.gender);
        // console.log("birthday = "+ req.body.birthday);

    //서버에 자료 저장하기
        db = client.db('pomotodo');
        db.collection('users').insertOne({ _id : req.body.loginId, password : req.body.password, email : req.body.email, number : req.body.number, gender : req.body.gender,birthday : req.body.birthday, }, function(err, result){
            console.log('db save')
        })
        res.send("<script>alert('회원가입하셨습니다.');location.href='/login';</script>");
    })
})

// 누군가가 /login으로 방문을 하면..login관련 안내문을 띄워주자.
app.get('/login',function(req, res){``
    res.sendFile(__dirname + '/user/login.html')
});
// 누군가가 /signup으로 방문을 하면..signup관련 안내문을 띄워주자.
app.get('/signup',function(req, res){
    res.sendFile(__dirname + '/user/signup.html')
});
// 누군가가 /home으로 방문을 하면..home관련 안내문을 띄워주자.
app.post('/home',function(req, res){
    // sendFile을 통해 파일전송가능, __dirname은 server.js의 현재경로를 나타냄
    res.sendFile(__dirname + '/public/index.html')
    // 응답.sendFile(__dirname + '/style.css')
});

