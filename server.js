const express = require('express');
const app = express();
app.use(express.static('public'));
const MongoClient = require('mongodb').MongoClient;
let db;
let navId;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');

MongoClient.connect('mongodb+srv://POMOTODO:Aorqnr30335@cluster0.l9rep.mongodb.net/pomotodo?retryWrites=true&w=majority', function(err, client){
    //db지정하는코드
    db = client.db('pomotodo');

    if (err) return console.log(err);

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
        // console.log("number = "+ req.body.num₩ber);
        // console.log("gender = "+ req.body.gender);
        // console.log("birthday = "+ req.body.birthday);

    //서버에 자료 저장하기
        //db의 컬렉션 지정하기
        db.collection('users').insertOne({ id : req.body.loginId, password : req.body.password, email : req.body.email, number : req.body.number, gender : req.body.gender,birthday : req.body.birthday, }, function(err, result){
            console.log('db save')
        })
        res.send("<script>alert('회원가입하셨습니다.');location.href='/login';</script>");
    })
    app.get('/',function(req, res){
        //로그인 아이디를 화면에 출력시켜주는 코드 변수 posts (ejs파일에 넣을 변수임)
        res.render('POMOTODO.ejs', { posts : `${navId}`}); 
    });

    // 누군가가 /login으로 방문을 하면..login관련 안내문을 띄워주자.
    app.get('/login',function(req, res){
        res.render('login.ejs')

    });
    // 누군가가 /signup으로 방문을 하면..signup관련 안내문을 띄워주자.
    app.get('/signup',function(req, res){
        res.sendFile(__dirname + '/views/signup.html')
    });
    
    // 로그인 페이지(세션,쿠키)
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const session = require('express-session');

    // 미들웨어 설정
    app.use(session({secret : 'sessionCreatePOMOTODO', resave : true, saveUninitialized: false})); 
    // 비밀코드는 세션을 만들때 사용할 비밀번호
    app.use(passport.initialize());
    app.use(passport.session());
    //미들웨어 : app.use = request - response 중간에 뭔가 실행되는 코드

    //passport라이브러리 사용
    app.post('/login', passport.authenticate('local', { // 로컬방식으로 인증
        failureRedirect : '/fail' //실패시 /fail페이지로 이동시켜주세요
        }), function(req, res){
            res.redirect('/') // 성공시 redirect해서 홈페이지로 보내주기
        });
        app.get('/fail', function(req, res){ // /fail로 접속시 처리할 코드 (alert창을 띄우고 로그인으로 리다이렉트)
            res.redirect('/login')
        })

    //new LocalStrategy인증방식
    //LocalStrategy( { 설정 }, function(){ 아이디비번 검사하는 코드 } )
    passport.use(new LocalStrategy({
        usernameField: 'loginId', //사용자가 제출한 id가 어디 적혔는지(input의 name 속성값)
        passwordField: 'loginPassword', //사용자가 제출한 pw가 어디 적혔는지(input의 name 속성값)
        session: true,  //로그인 후 세션을 저장할지 ?
        passReqToCallback: false, //사용자가 입력한 id,pw외에 다른정보도 검증해보고 싶으면

    }, function (inputId, inputPw, done) {
    // console.log(입력한아이디, 입력한비번); //-> 사용자가 입력한 id/pw가 콘솔로그로 출력됨
        db.collection('users').findOne({ id: inputId }, function (err, user) {
            //입력한 id에 대한 정보를 결과에 담아옴
            if (err) return done(err) //에러처리문법

            //done은 3개의 파라미터를 가질수 있음, 1: 서버에러, 2: 성공시 사용자db, 3:에러메시지
            if (!user) return done(null, false, { message: '존재하지않는 아이디입니다' })
            if (inputPw == user.password) {
                return done(null, user)
            } else {
                return done(null, false, { message: '비밀번호 틀렸어요' })
            }
        })
    }));

    // 유저의 정보를 암호화해서 user.id라는 세션으로 만든다
    //user 파라미터로 아이디/비밀번호 검증 결과가 들어간다
    passport.serializeUser(function (user, done) {
        done(null, user.id); // 세션데이터안에 passport의 user값으로 사용자의 아이디가 들어간다
        // console.log(user.id); // 로그인한 정보를 콘솔로그로 찍어주는 코드임 밑에 user.id를 확인하기 위해 작성한 코드
        navId = user.id; // navId라는 변수에 입력한 id를 담아서 화면에 출력해주도록 하기위한 코드
    });
    // 세션데이터를 가진 사람을 db에서 찾아주는 코드
    passport.deserializeUser(function (아이디, done) { //로그인하면 페이지에 방문할 때 마다 콜백함수가 호출, 사용자의 실제 데이터를 조회해서 가져옴
        done(null, {})
    });
    
})




