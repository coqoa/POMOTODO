const express = require('express');
const app = express();
app.use(express.static('public'));
const MongoClient = require('mongodb').MongoClient;
let db;
let navId;
navId = 'log in';
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
let flash = require('connect-flash');
let bkfd2Password = require('pbkdf2-password')
let hasher = bkfd2Password();

MongoClient.connect('mongodb+srv://POMOTODO:Aorqnr30335@cluster0.l9rep.mongodb.net/pomotodo?retryWrites=true&w=majority', function(err, client){
    //db지정하는코드
    db = client.db('pomotodo');

    if (err) return console.log(err);

    // 서버를 띄우기 위한 코드(데이터베이스 내부에 배치해서 디비와 연결되면 서버를 띄우도록)
    app.listen('8080', function(){
    console.log('8080포트 접속성공')
    });

    app.post('/signupResult',function(req, res){
        db.collection('users').findOne({id: req.body.loginId}, function(err,result){
            // console.log(result)
            if(result == null){
                console.log('아이디가 없음') 
                //서버에 아이디가 없으면 if, 있으면 else 출력 -> 없으면 가입을 진행해주고 있으면 얼럿창띄운다음에 회원가입페이지로 보내기
                hasher({password: req.body.password}, function(err, pass, salt, hash){
                    // console.log(err, pass, salt, hash);
                    // err = undefined, pass:입력한비밀번호값, salt: 랜덤번호생성, hash: 입력비밀번호+salt값에 대한 해쉬값 을 출력해준다
        
                    //서버에 자료 저장하기
                        //db의 컬렉션 지정하기
                    db.collection('users').insertOne({ id : req.body.loginId, hashPassword : hash, saltPassword : salt, email : req.body.email, number : req.body.number, gender : req.body.gender,birthday : req.body.birthday, }, function(err, result){
                        console.log('db user create')
                    })
                    db.collection('pomodoro').insertOne({ id : req.body.loginId, content: '', contentHTML:''}, function(err, result){
                        console.log('db pomodoro create')
                    })
                    db.collection('todolist').insertOne({ id : req.body.loginId, todoList: '', todoListHTML:''}, function(err, result){
                        console.log('db todolist create')
                    })
                    db.collection('not-todolist').insertOne({ id : req.body.loginId, notTodoList: '', notTodoListHTML:''}, function(err, result){
                        console.log('db not-todolist create')
                    })
                    res.send("<script>alert('회원가입하셨습니다.');location.href='/login';</script>");
                })
                // console.log('회원가입정보');
                // console.log(req.body) : bodyParser를 통해 요청값을 분석한 정보(객체형식으로 반환하는 값)
                // console.log("id = "+ req.body.loginId);
                // console.log("password = "+ req.body.password);
                // console.log("email = "+ req.body.email);
                // console.log("number = "+ req.body.num₩ber);
                // console.log("gender = "+ req.body.gender);
                // console.log("birthday = "+ req.body.birthday);
            }else{
                console.log('아이디가 있음')
                res.send("<script>alert('이미 사용중인 아이디입니다');location.href='/signup';</script>");
            }
        });
    })
let pomoResult;
let todoResult;
let notTodoResult;
    app.get('/',function(req, res){
        console.log(navId);
            // pomodoro 기록 출력하는 코드
        if(navId !== 'log in'){ // 아이디가 있을경우 서버에 저장된 결과
            db.collection('pomodoro').findOne({id:navId}, function(err, pomodoroResult){
                pomoResult = pomodoroResult.contentHTML;

                db.collection('todolist').findOne({id : navId}, function(err, todolistResult){
                    todoResult = todolistResult.todoListHTML;

                    db.collection('not-todolist').findOne({id : navId}, function(err, nottodolistResult){
                            notTodoResult = nottodolistResult.notTodoListHTML;

                            res.render('POMOTODO.ejs', { posts : `${navId}`, pomodoroRecord : pomoResult, todoListRecord : todoResult, notTodoListRecord : notTodoResult}); 
                            //todoList  <%- todolist.todoListHTML %>
                    })
                })
            })
        }else{ // 아이디가 없을경우는 빈공백
            res.render('POMOTODO.ejs', { posts : `${navId}`, pomodoroRecord : ' ', todoListRecord : ' ', notTodoListRecord : ' ' }); // 아이디없는경우 꼭 추가해줘야함
        }
    });
    // 누군가가 /signup으로 방문을 하면..signup관련 안내문을 띄워주자.
    let idCheckResult = '';
    let idCheck;
    app.get('/signup',function(req, res){
        res.render('signup.ejs', { idCheckResult : idCheck});
    });

    // 로그인 페이지(세션,쿠키)
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const session = require('express-session');

    // 미들웨어 설정
    // 비밀코드는 세션을 만들때 사용할 비밀번호
    app.use(session({secret : 'sessionCreatePOMOTODO', resave : true, saveUninitialized: false})); 
    //미들웨어 : app.use = request - response 중간에 뭔가 실행되는 코드
    app.use(passport.initialize());
    app.use(passport.session()); 
    app.use(flash());
    
    // 누군가가 /login으로 방문을 하면..login관련 안내문을 띄워주자.
    app.get('/login',function(req, res){
        let fmsg = req.flash(); // 로그인 실패시 출려되는 플래시메세지
        // console.log(fmsg); // 아이디가 없는지 , 비밀번호가 틀렸는지 검사해서 작성해놓은 message를 출력해준다 125번, 132번줄
        let feedback= '';
        if(fmsg.error){
            feedback = fmsg.error[0]
        }

        res.render('login.ejs', {loginFeedback : feedback})
    });
    //passport라이브러리 사용
    app.post('/login', passport.authenticate('local', { // 로컬방식으로 인증
        failureRedirect : '/fail' ,
        failureFlash : true
        //실패시 /fail페이지로 이동시켜주세요
        }), function(req, res){
            res.redirect('/') // 성공시 redirect해서 홈페이지로 보내주기
            // res.send("<script>location.href='/';</script>");
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
            if (!user) {
                console.log('아이디가 없습니다')
                return done(null, false, { message: '존재하지 않는 ID입니다' })

            }
            if(user){
                console.log('아이디가 존재합니다')
                hasher({password:inputPw, salt: user.saltPassword}, function(err, pass, salt, hash){
                    // console.log(err, pass, salt, hash);
                    // err = undefined, pass:입력한비밀번호값, salt: 랜덤번호생성, hash: 입력비밀번호+salt값에 대한 해쉬값 을 출력해준다
                    // 입력비밀번호와 유저의 salt를 가져와서 hash로 만들고 그 해쉬값이 서버의 해쉬값과 일치하다면  로그인성공
                    if (hash == user.hashPassword) {
                        return done(null, user)
                    } else {
                        console.log('비밀번호 틀렸어요');
                        return done(null, false, { message: '잘못된 비밀번호입니다' })
                    }
                })
            }
        })
    }));

    // 유저의 정보를 암호화해서 user.id라는 세션으로 만든다
    //user 파라미터로 아이디/비밀번호 검증 결과가 들어간다
    passport.serializeUser(function (user, done) {
        done(null, user.id); // 세션데이터안에 passport의 user값으로 사용자의 아이디가 들어간다
        navId = user.id; // navId라는 변수에 입력한 id를 담아서 화면에 출력해주도록 하기위한 코드
    });
    // 세션데이터를 가진 사람을 db에서 찾아주는 코드
    passport.deserializeUser(function (아이디, done) { //로그인하면 페이지에 방문할 때 마다 콜백함수가 호출, 사용자의 실제 데이터를 조회해서 가져옴
        done(null, {})
    });
    app.get('/logout', function(req, res){
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            navId = 'log in';
            res.redirect('/');
        });
    })

    // Pomodoro 기록 업데이트
    app.post('/insertPomodoro', function(req, res){
        if(navId !== 'log in'){ //로그인 했을때만 db에 저장하도록 하는 코드
            db.collection('pomodoro').updateOne({id : navId}, { $set : req.body }, function(err, result){ 
                console.log('뽀모도로 업데이트')
                res.status(200).send({ message : '뽀모 업데이트 성공했습니다'});
            })
        }else{
            console.log('로그인을 해주세요');
        }
    })
    //투두리스트 업데이트
    app.post('/insertTodoList', function(req, res){
        if(navId !== 'log in'){
            db.collection('todolist').updateOne({id : navId}, { $set : req.body }, function(err, result){ 
                console.log('투두리스트 업데이트')
                res.status(200).send({ message : '투두 업데이트 성공했습니다'});
            })
        }else{
            console.log('로그인을 해주세요');
        }
    })
    //낫투두리스트 업데이트
    app.post('/insertNotTodoList', function(req, res){
        if(navId !== 'log in'){
            db.collection('not-todolist').updateOne({id : navId}, { $set : req.body }, function(err, result){ 
                console.log('낫투두리스트 업데이트')
                res.status(200).send({ message : '낫투두 업데이트 성공했습니다'});
            })
        }else{
            console.log('로그인을 해주세요');
        }
    })
    // 회원탈퇴
    app.get('/deleteUser', function(req, res) {
        if(navId !== 'log in'){
            db.collection('users').deleteOne({ id: navId }, function (err, result) {
                console.log('유저 삭제')
            })
            db.collection('pomodoro').deleteOne({ id: navId }, function (err, result) {
                console.log('포모도로 삭제')
            })
            db.collection('todolist').deleteOne({ id: navId }, function (err, result) {
                console.log('투두리스트 삭제')
            })
            db.collection('not-todolist').deleteOne({ id: navId }, function (err, result) {
                console.log('낫투두리스트 삭제')
            })
        }
        navId = 'log in';
        res.redirect('/');
    })
    // 서버에서 id중복체크하는 ajax요청
    app.post('/signup-id-check', function(req, res){
        db.collection('users').findOne({id: req.body.id}, function(err,result){
            if(result == null){
                // 서버에 id가 없는경우
                idCheck = '';
            }else{
                idCheck = '가입할 수 없는 ID입니다';
            }
        res.status(200).send({ message : idCheck});
        })
    })
    
    app.get('/record',function(req, res){
        console.log(navId);
        let dateObject = new Date();
        let years = dateObject.getFullYear();
        let months = dateObject.getMonth()+1;
        let dates = dateObject.getDate()-1;
        // 만약 1을 뺏을때 0이라면 전달 말일로 바꿔주는데 1월1일에 1을뺀다면 1년-,11월+,해당달의 말일 을 데이터로 보내준다
        if(dates == 0){
            if(months == 1){
                years = years-1;
                months = months+11;
                dates = new Date(years, months, 0).getDate(); //month의 말일을 구하는 코드
            }else if(months !== 1){
                months = months-1;
                dates = new Date(years, months, 0).getDate();
            }
        }
        years = String(years);
        months = String(months);
        dates = String(dates);
        if(navId !== 'log in'){
            db.collection('pomodoro-record').findOne({'id':navId, 'year':years, 'month':months, 'date':dates}, function(err, pomodoroRecordResult){
                pomoRecordRes = pomodoroRecordResult.pomoRecord;
                // console.log("pomoRecordRes"+pomoRecordRes);
                db.collection('todolist-record').findOne({'id' : navId, 'year':years, 'month':months, 'date':dates}, function(err, todolistRecordResult){
                    todoRecordRes = todolistRecordResult.todoRecord;
                    // console.log("todoRecordRes"+todoRecordRes);
                    db.collection('not-todolist-record').findOne({'id' : navId, 'year':years, 'month':months, 'date':dates}, function(err, nottodolistRecordResult){
                        notTodoRecordRes = nottodolistRecordResult.notTodoRecord;
                        // console.log("notTodoRecordRes"+notTodoRecordRes);
                            res.render('record.ejs', { 'posts' : `${navId}`, 'pomos' : pomoRecordRes, 'todos' : todoRecordRes, 'notTodos' : notTodoRecordRes});
                    })
                })
            })
        }else{
            res.render('record.ejs', { 'posts' : `${navId}`, 'pomos' : '', 'todos' : '', 'notTodos' : ''});
        }
    });
    //---------------------------------서버에 기록 생성 , 수정 코드--------------------------
    app.post('/createBtn', function(req, res){
        if(navId !== 'log in'){
            db.collection('pomodoro-record').insertOne({ 'id' : req.body.id, 'year' : req.body.year, 'month' : req.body.month, 'date' : req.body.date ,'pomoRecord' : req.body.pomoRecord }, function(err, result){
                console.log('db pomodoro-record create')
                
            })
            db.collection('todolist-record').insertOne({ 'id' : req.body.id, 'year' : req.body.year, 'month' : req.body.month, 'date' : req.body.date ,'todoRecord' : req.body.todoRecord }, function(err, result){
                console.log('db todolist create')  
            })
            db.collection('not-todolist-record').insertOne({ 'id' : req.body.id, 'year' : req.body.year, 'month' : req.body.month, 'date' : req.body.date ,'notTodoRecord' : req.body.notTodoRecord }, function(err, result){
                console.log('db not-todolist create')    
            })
            res.status(200).send({ message : 'DB Record 생성성공'});
        }else{
            console.log('로그인을 해주세요');
        }
        // console.log(req.body); // 값 받아서 출력까진 완성, id조건넣고, 서버에 저장하도록 구현하기
        // console.log(req.body.id); 
        // console.log(req.body.year); 
        // console.log(req.body.month); 
        // console.log(req.body.pomoRecord); 
        // console.log(req.body.todoRecord); 
        // console.log(req.body.notTodoRecord); 
    })
    app.post('/saveBtn', function(req, res){
        if(navId !== 'log in'){
            db.collection('pomodoro-record').update({ 'id' : req.body.id, 'year' : req.body.year, 'month' : req.body.month, 'date' : req.body.date} ,{$set: {'pomoRecord' : req.body.pomoRecord}}, function(err, result){
                console.log('db pomodoro-record save')
            });
            db.collection('todolist-record').update({ 'id' : req.body.id, 'year' : req.body.year, 'month' : req.body.month, 'date' : req.body.date} ,{$set: {'todoRecord' : req.body.todoRecord}}, function(err, result){
                console.log('db todolist save')
            });
            db.collection('not-todolist-record').update({ 'id' : req.body.id, 'year' : req.body.year, 'month' : req.body.month, 'date' : req.body.date} ,{$set: {'notTodoRecord' : req.body.notTodoRecord}}, function(err, result){
                console.log('db not-todolistsave')
            });
            res.status(200).send({ message : 'DB Record 수정성공'});
        }else{
            console.log('로그인을 해주세요');
        }
    })
    
})




