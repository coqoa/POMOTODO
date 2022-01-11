const express = require('express');
const app = express();
app.use(express.static('public'));
const MongoClient = require('mongodb').MongoClient;
let db;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine', 'ejs');
let flash = require('connect-flash');
let pbkfd2Password = require('pbkdf2-password')
let hasher = pbkfd2Password();

MongoClient.connect('mongodb+srv://POMOTODO:x5pYtvf91GCOg7gb@cluster0.l9rep.mongodb.net/pomotodo?retryWrites=true&w=majority', function(err, client){
    //db지정하는코드
    db = client.db('pomotodo');
    if (err) return console.log(err);
    // 서버를 띄우기 위한 코드
    app.listen('5501', function(){
    console.log('5501포트 접속성공')
    });
     // 로그인 페이지(세션,패스포트)
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const session = require('express-session');
    // 미들웨어 설정
     //미들웨어 : app.use = request - response 중간에 뭔가 실행되는 코드
    app.use(session({
        secret : 'secret code', 
        resave : true, 
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false
        }
    })); 
    app.use(passport.initialize());
    app.use(passport.session()); 
    app.use(flash());
     // 누군가가 /login으로 방문을 하면..login관련 안내문을 띄워주자.
    app.get('/login',function(req, res){
         let fmsg = req.flash(); // 유효성 검사 오류시 출려되는 플래시메세지
        let feedback= '';
        if(fmsg.error){
            feedback = fmsg.error[0]
        }
        res.render('login.ejs', {loginFeedback : feedback})
    });
     //로그인 할 때 passport라이브러리 사용
     app.post('/loginPost', passport.authenticate('local', { // 로컬방식으로 인증
        failureRedirect : '/fail' ,
        failureFlash : true
         //실패시 /fail페이지로 이동
        }), function(req, res){

            req.session.save(function(){
                // 성공시 redirect해서 홈페이지로 이동
                res.redirect('/') 
            })
    });
    // /fail로 접속시 처리할 코드
    app.get('/fail', function(req, res){ 
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
         // console.log(inputId, inputPw) -> 사용자가 입력한 id/pw가 콘솔로그로 출력됨
        db.collection('users').findOne({ id: inputId }, function (err, user) {
             //입력한 id에 대한 정보를 결과에 담아옴
             if (err) return done(err) //에러처리문법
            if (!user) { //db에 없는 아이디일때?
                return done(null, false, { message: 'ID does not exist' })
                 //done은 3개의 파라미터를 가질수 있음, 1: 서버에러, 2: 성공시 사용자db, 3:에러메시지
            }
            if(user){ // db에 아이디가 존재하면?
                hasher({password:inputPw, salt: user.saltPassword}, function(err, pass, salt, hash){
                     // console.log(err, pass, salt, hash);
                     // err = undefined, pass:입력한비밀번호값, salt: 랜덤번호생성, hash: 입력비밀번호+salt값에 대한 해쉬값 을 출력해준다
                     // 입력비밀번호와 유저의 salt를 가져와서 hash로 만들고 그 해쉬값이 서버의 해쉬값과 일치하다면  로그인성공
                    if (hash == user.hashPassword) { // 인증완료 - 로그인
                        return done(null, user)
                    } else { // 비밀번호가 틀렸을 때
                        return done(null, false, { message: 'password incorrect' })
                    }
                })
            }
        })
    }));
     //user 파라미터로 아이디/비밀번호 검증 결과가 들어간다
    passport.serializeUser(function (user, done) {
         done(null, user.id); // 세션데이터안에 passport의 user값으로 사용자의 아이디가 들어간다
    });
     // 세션데이터를 가진 사람을 db에서 찾아주는 코드
     passport.deserializeUser(function(아이디, done) { //로그인하면 페이지에 방문할 때 마다 콜백함수가 호출, 사용자의 실제 데이터를 조회해서 가져옴
        db.collection('users').findOne({ id: 아이디 }, function (err, result) {
            done(null, result);
        })
    });
    app.post('/signupResult',function(req, res){
        db.collection('users').findOne({id: req.body.loginId}, function(err,result){
            if(result == null){
                // console.log('아이디가 없음') 
                hasher({password: req.body.password}, function(err, pass, salt, hash){
                    // db의 컬렉션에 데이터 저장하기
                    db.collection('users').insertOne({ id : req.body.loginId, hashPassword : hash, saltPassword : salt, email : req.body.email, number : req.body.number, gender : req.body.gender,birthday : req.body.birthday, }, function(err, result){
                        console.log('db user create')
                    })
                    res.send("<script>alert('WELCOME !');location.href='/login';</script>");
                })
            }else{
                // console.log('아이디가 있음')
                res.send("<script>alert('this id is already in use.');location.href='/signup';</script>");
            }
        });
    })
let pomoResult;
let todoResult;
let notTodoResult;
    // 로그인/비로그인 체크하는 미들웨어 
    function homeLoginCheck(req, res, next) { 
        if (req.user) { 
            next(); 
        } else { 
            // 비로그인시 출력해줄 코드
            res.render('POMOTODO.ejs', { posts : 'log in', pomodoroRecord : ' ', todoListRecord : ' ', notTodoListRecord : ' ' });
        } 
    } 
    // 홈페이지 post요청시 데이터를 생성해줄 코드
    app.post('/',function(req, res){
        // 서버에 날짜에 따른 데이터 생성, post요청은 홈으로 리다이렉트 할 때마다 한다 - 클라이언트의 시간이 00시 00분이면 리다이렉트 시키기 때문에 날짜변경되면 데이터 생성하도록
        console.log(req.body.id) // ajax전달받는 데이터 id 
        console.log(req.body.yyyymmdd) // ajax 전달받는 날짜
        if(req.body.id !== 'log in'){
            db.collection('pomodoro').findOne({id: req.body.id, 'yyyymmdd' : req.body.yyyymmdd}, function(err, pomodoroResult){
                if(pomodoroResult==null){ // 없으면 빈값의 데이터 생성
                    db.collection('pomodoro').insertOne({ 'id' : req.body.id, 'yyyymmdd' : req.body.yyyymmdd ,'contentHTML' : '' }, function(err, result){
                        console.log('pomo생성')
                    });
                    db.collection('todolist').findOne({id: req.body.id, 'yyyymmdd' : req.body.yyyymmdd}, function(err, todolistResult){
                        if(todolistResult==null){
                            db.collection('todolist').insertOne({ 'id' : req.body.id, 'yyyymmdd' : req.body.yyyymmdd ,'todoListHTML' : '' }, function(err, result){
                                console.log('todo생성')
                            });
                            db.collection('not-todolist').findOne({id: req.body.id, 'yyyymmdd' : req.body.yyyymmdd}, function(err, nottodolistResult){
                                if(nottodolistResult==null){
                                    db.collection('not-todolist').insertOne({ 'id' : req.body.id, 'yyyymmdd' : req.body.yyyymmdd ,'notTodoListHTML' : '' }, function(err, result){
                                        console.log('not-todo생성')
                                    });
                                    res.status(200).send({ message : '데이터가없음'}); 
                                }
                            })
                        }
                    })
                }else{
                    res.status(200).send({ message : '데이터가있음'}); 
                }
            })
        }
    })
    // 홈페이지 get요청시 출력해줄 코드
    app.get('/',homeLoginCheck,function(req, res){
        //서버에서 단순 검색 및 출력담당
        db.collection('pomodoro').find({id : req.user.id}).toArray(function(err,pomodoroResult){
            let a = pomodoroResult.length-1;
            // console.log(a) // 마지막 배열 인덱스 == a
            // console.log(pomodoroResult[a]) // 마지막 배열 출력
            // console.log(pomodoroResult[a].contentHTML.length) // 배열 마지막값 출력
            pomoResult = pomodoroResult[a].contentHTML;

            db.collection('todolist').find({id : req.user.id}).toArray(function(err,todolistResult){
                let b = todolistResult.length-1;
                todoResult = todolistResult[b].todoListHTML;
                
                db.collection('not-todolist').find({id : req.user.id}).toArray(function(err,nottodolistResult){
                    let c = nottodolistResult.length-1;
                    notTodoResult = nottodolistResult[c].notTodoListHTML;
                    res.render('POMOTODO.ejs', { posts : req.user.id, pomodoroRecord : pomoResult, todoListRecord : todoResult, notTodoListRecord : notTodoResult}); 

                })
            })
        })
    });
    // /signup get요청 하면?
    let idCheckResult = '';
    let idCheck;
    app.get('/signup',function(req, res){
        res.render('signup.ejs', { idCheckResult : idCheck});
    });
    // /logout get요청하면?
    app.get('/logout', function(req, res){
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    })

    // Pomodoro 기록 업데이트
    app.post('/insertPomodoro', function(req, res){
        if(req.user !== undefined){ //로그인 했을때만 db에 저장하도록 하는 코드
            db.collection('pomodoro').updateOne({id : req.user.id, yyyymmdd : req.body.yyyymmdd}, { $set : req.body }, function(err, result){ 
                console.log('뽀모도로 업데이트')
                res.status(200).send({ message : '뽀모 업데이트 성공했습니다'});
            })
        }else{
            console.log('로그인을 해주세요');
            res.status(200).send({ message : '로그인을 해주세요'});
        }
    })
    //투두리스트 업데이트
    app.post('/insertTodoList', function(req, res){
        if(req.user !== undefined){
            db.collection('todolist').updateOne({id : req.user.id, yyyymmdd : req.body.yyyymmdd}, { $set : req.body }, function(err, result){ 
                console.log('투두리스트 업데이트')
                res.status(200).send({ message : '투두 업데이트 성공했습니다'});
            })
        }else{
            console.log('로그인을 해주세요');
            res.status(200).send({ message : '로그인을 해주세요'});
        }
    })
    //낫투두리스트 업데이트
    app.post('/insertNotTodoList', function(req, res){
        if(req.user !== undefined){
            db.collection('not-todolist').updateOne({id : req.user.id, yyyymmdd : req.body.yyyymmdd}, { $set : req.body }, function(err, result){ 
                console.log('낫투두리스트 업데이트')
                res.status(200).send({ message : '낫투두 업데이트 성공했습니다'});
            })
        }else{
            console.log('로그인을 해주세요');
            res.status(200).send({ message : '로그인을 해주세요'});
        }
    })
    // 회원탈퇴
    app.get('/deleteUser', function(req, res) {
        db.collection('users').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('유저 삭제')
        })
        db.collection('pomodoro').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('포모도로 삭제')
        })
        db.collection('todolist').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('투두리스트 삭제')
        })
        db.collection('not-todolist').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('낫투두리스트 삭제')
        })
        res.redirect('/');
    })
    // 서버에서 id중복체크하는 ajax요청
    app.post('/signup-id-check', function(req, res){
        db.collection('users').findOne({id: req.body.id}, function(err,result){
            if(result == null){
                // 서버에 id가 없는경우
                idCheck = '';
            }else{
                idCheck = 'this id is already in use.';
            }
        res.status(200).send({ message : idCheck});
        })
    })
    // record 회원상태에서만 제공하도록
    function recordLoginCheck(req, res, next){
        if(req.user){
            next();
        }else{
            res.send("<script>alert('Please log in.');location.href='/login';</script>")
        }
    }
    app.get('/record',recordLoginCheck,function(req, res){
        console.log(req.user.id);
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
        if(req.user.id !== 'log in'){
            db.collection('pomodoro').find({id : req.user.id}).toArray(function(err,pomodoroResult){
                let a = pomodoroResult.length-1;
                pomoRecordRes = pomodoroResult[a].contentHTML;
                db.collection('todolist').find({id : req.user.id}).toArray(function(err,todolistResult){
                    let b = todolistResult.length-1;
                    todoRecordRes = todolistResult[b].todoListHTML;
                    db.collection('not-todolist').find({id : req.user.id}).toArray(function(err,nottodolistResult){
                        let c = nottodolistResult.length-1;
                        notTodoRecordRes = nottodolistResult[c].notTodoListHTML;
    
                        res.render('record.ejs', { 'posts' : req.user.id, 'pomos' : pomoRecordRes, 'todos' : todoRecordRes, 'notTodos' : notTodoRecordRes}); 
                    })
                })
    
            })
        }
    });
    //달력버튼 눌러서 해당 데이터 출력하는 코드
    app.post('/dayButton', function(req, res){
        console.log(req.body.clickedButton)
        db.collection('pomodoro').findOne({'id':req.user.id, 'yyyymmdd':req.body.clickedButton}, function(err, pomodoroRecordResult){
            if(pomodoroRecordResult ==null){
                pomoRecordRes = '';
            }else{
                pomoRecordRes = pomodoroRecordResult.contentHTML;
            }
            db.collection('todolist').findOne({'id' : req.user.id, 'yyyymmdd':req.body.clickedButton}, function(err, todolistRecordResult){
                if(todolistRecordResult==null){
                    todoRecordRes = '';
                }else{
                    todoRecordRes = todolistRecordResult.todoListHTML;
                }
                db.collection('not-todolist').findOne({'id' : req.user.id, 'yyyymmdd':req.body.clickedButton}, function(err, nottodolistRecordResult){
                    if(nottodolistRecordResult==null){
                        notTodoRecordRes = '';
                    }else{
                        notTodoRecordRes = nottodolistRecordResult.notTodoListHTML;
                    }
                res.status(200).send({pomoMessage : pomoRecordRes, todoMessage : todoRecordRes , notTodoMessage : notTodoRecordRes});
                })
            })
        })
    })
    app.post('/buttonColor', function(req, res){
        // console.log(req.body.count);
        db.collection('pomodoro').findOne({'id':req.user.id, 'yyyymmdd':req.body.count},function(err,result){
        if(result !== null){
            res.status(200).send({ message : result.contentHTML.length});
        }else{
            res.status(200).send({ message : ''});
        }
        })
    })
})
