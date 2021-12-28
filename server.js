const express = require('express');
const app = express();
app.use(express.static('public'));
const MongoClient = require('mongodb').MongoClient;
let db;
// let navId;
// navId = 'log in';
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
    app.listen('5501', function(){
    console.log('5501포트 접속성공')
    });

    function yyyymmdd(){
        let dateObject = new Date();
        let year = dateObject.getFullYear();
        let month = dateObject.getMonth()+1;
        let date = dateObject.getDate();
        return year +"."+ month+"."+date;
    }
     // 로그인 페이지(세션,쿠키)
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Strategy;
    const session = require('express-session');

     // 미들웨어 설정
     // 비밀코드는 세션을 만들때 사용할 비밀번호
    app.use(session({
        secret : 'secret code', 
        resave : true, 
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false
        }
    })); 
     //미들웨어 : app.use = request - response 중간에 뭔가 실행되는 코드
    app.use(passport.initialize());
    app.use(passport.session()); 
    app.use(flash());
    
     // 누군가가 /login으로 방문을 하면..login관련 안내문을 띄워주자.
    app.get('/login',function(req, res){
         let fmsg = req.flash(); // 로그인 실패시 출려되는 플래시메세지
        let feedback= '';
        if(fmsg.error){
            feedback = fmsg.error[0]
        }
        res.render('login.ejs', {loginFeedback : feedback})
    });
     //passport라이브러리 사용
     app.post('/loginPost', passport.authenticate('local', { // 로컬방식으로 인증
        failureRedirect : '/fail' ,
        failureFlash : true
         //실패시 /fail페이지로 이동시켜주세요
        }), function(req, res){
            req.session.save(function(){
                console.log('세션저장')
                 res.redirect('/') // 성공시 redirect해서 홈페이지로 보내주기
            })
        }
    );

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
         // console.log('LocalStrategy', inputId, inputPw)
         // console.log(입력한아이디, 입력한비번); //-> 사용자가 입력한 id/pw가 콘솔로그로 출력됨
        db.collection('users').findOne({ id: inputId }, function (err, user) {
             //입력한 id에 대한 정보를 결과에 담아옴
             if (err) return done(err) //에러처리문법
            if (!user) {
                console.log('아이디가 없습니다')
                return done(null, false, { message: '존재하지 않는 ID입니다' })
                 //done은 3개의 파라미터를 가질수 있음, 1: 서버에러, 2: 성공시 사용자db, 3:에러메시지
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
        // console.log('시리얼라이즈', user)
         done(null, user.id); // 세션데이터안에 passport의 user값으로 사용자의 아이디가 들어간다
        //  navId = user.id; // navId라는 변수에 입력한 id를 담아서 화면에 출력해주도록 하기위한 코드
    });
     // 세션데이터를 가진 사람을 db에서 찾아주는 코드
     passport.deserializeUser(function(아이디, done) { //로그인하면 페이지에 방문할 때 마다 콜백함수가 호출, 사용자의 실제 데이터를 조회해서 가져옴
         // console.log('디시리얼라이즈')
         // console.log(id)
        db.collection('users').findOne({ id: 아이디 }, function (에러, 결과) {
             // console.log(결과);
            done(null, 결과);
        })
         // done(null, 'id')
    });
    app.post('/signupResult',function(req, res){
        db.collection('users').findOne({id: req.body.loginId}, function(err,result){
            if(result == null){
                // console.log('아이디가 없음') 
                //서버에 아이디가 없으면 if, 있으면 else 출력 -> 없으면 가입을 진행해주고 있으면 얼럿창띄운다음에 회원가입페이지로 보내기
                hasher({password: req.body.password}, function(err, pass, salt, hash){
                    // console.log(err, pass, salt, hash);
                    // err = undefined, pass:입력한비밀번호값, salt: 랜덤번호생성, hash: 입력비밀번호+salt값에 대한 해쉬값 을 출력해준다
        
                    // db의 컬렉션 만들어서 데이터 저장하기
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
            }else{
                // console.log('아이디가 있음')
                res.send("<script>alert('이미 사용중인 아이디입니다');location.href='/signup';</script>");
            }
        });
    })
let pomoResult;
let todoResult;
let notTodoResult;

    // app.get('/',function(req, res){
    //     res.render('POMOTODO.ejs', { posts : 'log in', pomodoroRecord : ' ', todoListRecord : ' ', notTodoListRecord : ' ' });
    // })
    function homeLoginCheck(req, res, next) { 
        if (req.user) { 
            next(); 
        } else { 
            res.render('POMOTODO.ejs', { posts : 'log in', pomodoroRecord : ' ', todoListRecord : ' ', notTodoListRecord : ' ' });
        } 
    } 
    app.get('/',homeLoginCheck,function(req, res){
        console.log('----get-req----');
        console.log(req.user.id);
        console.log('----get-req----');
        // pomodoro 기록 출력하는 코드
        db.collection('pomodoro').findOne({id:req.user.id}, function(err, pomodoroResult){
            pomoResult = pomodoroResult.contentHTML;

            db.collection('todolist').findOne({id : req.user.id}, function(err, todolistResult){
                todoResult = todolistResult.todoListHTML;

                db.collection('not-todolist').findOne({id : req.user.id}, function(err, nottodolistResult){
                    notTodoResult = nottodolistResult.notTodoListHTML;

                    //record컬렉션을 조회해서 없으면 만들어주는 코드
                    db.collection('pomodoro-record').findOne({ id: req.user.id, 'yyyymmdd' : yyyymmdd() }, function (err, pomoRecCheck) {
                        if(pomoRecCheck==null){
                            db.collection('pomodoro-record').insertOne({ 'id' : req.user.id, 'yyyymmdd' : yyyymmdd() ,'pomoRecord' : '' }, function(err, result){
                                console.log('db pomodoro-record create')
                            })
                        }
                    })
                    db.collection('todolist-record').findOne({ id: req.user.id, 'yyyymmdd' : yyyymmdd() }, function (err, todoRecCheck) {
                        if(todoRecCheck==null){
                            db.collection('todolist-record').insertOne({ 'id' : req.user.id, 'yyyymmdd' : yyyymmdd() ,'todoRecord' : '' }, function(err, result){
                                console.log('db todo-record create')
                            })
                        }
                    })
                    db.collection('not-todolist-record').findOne({ id: req.user.id, 'yyyymmdd' : yyyymmdd() }, function (err, notTodoRecCheck) {
                        if(notTodoRecCheck==null){
                            db.collection('not-todolist-record').insertOne({ 'id' : req.user.id, 'yyyymmdd' : yyyymmdd() ,'notTodoRecord' : '' }, function(err, result){
                                console.log('db not-todo-record create')
                            })
                        }
                    })
                    res.render('POMOTODO.ejs', { posts : req.user.id, pomodoroRecord : pomoResult, todoListRecord : todoResult, notTodoListRecord : notTodoResult}); 
                })
            })
        })
    });
    // 누군가가 /signup으로 방문을 하면..signup관련 안내문을 띄워주자.
    let idCheckResult = '';
    let idCheck;
    app.get('/signup',function(req, res){
        res.render('signup.ejs', { idCheckResult : idCheck});
    });
    
    app.get('/logout', function(req, res){
        req.session.destroy(() => {
            res.clearCookie('connect.sid');
            res.redirect('/');
        });
    })

    // Pomodoro 기록 업데이트
    app.post('/insertPomodoro', function(req, res){
        if(req.user !== undefined){ //로그인 했을때만 db에 저장하도록 하는 코드
            console.log('235라인');
            console.log(req.user.id);
            console.log('235라인');
            db.collection('pomodoro').updateOne({id : req.user.id}, { $set : req.body }, function(err, result){ 
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
            db.collection('todolist').updateOne({id : req.user.id}, { $set : req.body }, function(err, result){ 
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
            db.collection('not-todolist').updateOne({id : req.user.id}, { $set : req.body }, function(err, result){ 
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
        db.collection('pomodoro-record').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('포모도로기록 삭제')
        })
        db.collection('todolist').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('투두리스트 삭제')
        })
        db.collection('todolist-record').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('투두리스트기록 삭제')
        })
        db.collection('not-todolist').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('낫투두리스트 삭제')
        })
        db.collection('not-todolist-record').deleteOne({ id: req.user.id }, function (err, result) {
            console.log('낫투두리스트 기록 삭제')
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
                idCheck = '가입할 수 없는 ID입니다';
            }
        res.status(200).send({ message : idCheck});
        })
    })
    function yyyymmddYesterday(){
        let dateObject = new Date();
        let year = dateObject.getFullYear();
        let month = dateObject.getMonth()+1;
        let date = dateObject.getDate()-1;
        return year +"."+ month+"."+date;
    }
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
            db.collection('pomodoro-record').findOne({'id':req.user.id, 'yyyymmdd':yyyymmdd()}, function(err, pomodoroRecordResult){
                if(pomodoroRecordResult ==null){
                    console.log('pomodoro-record-error');
                    pomoRecordRes = '';
                }else{
                    pomoRecordRes = pomodoroRecordResult.pomoRecord;
                    // console.log("pomoRecordRes"+pomoRecordRes);
                }
                db.collection('todolist-record').findOne({'id' : req.user.id, 'yyyymmdd':yyyymmdd()}, function(err, todolistRecordResult){
                    if(todolistRecordResult==null){
                        console.log('todolist-record-error');
                        todoRecordRes = '';
                    }else{
                        todoRecordRes = todolistRecordResult.todoRecord;
                        // console.log("todoRecordRes"+todoRecordRes);
                    }
                    db.collection('not-todolist-record').findOne({'id' : req.user.id, 'yyyymmdd':yyyymmdd()}, function(err, nottodolistRecordResult){
                        if(nottodolistRecordResult==null){
                            console.log('not-todolist-record-error');
                            notTodoRecordRes = '';
                        }else{
                            notTodoRecordRes = nottodolistRecordResult.notTodoRecord;
                            // console.log("notTodoRecordRes"+notTodoRecordRes);
                        }
                            res.render('record.ejs', { 'posts' : req.user.id, 'pomos' : pomoRecordRes, 'todos' : todoRecordRes, 'notTodos' : notTodoRecordRes});
                    })
                })
            })
        }
    });
    //---------------------------------서버에 기록 생성 , 수정 코드--------------------------
    
    function checkTimeSave(){
        db.collection('pomodoro').find().toArray(function(err,result){
            for(let i = 0; i < result.length; i++){
// console.log('pomodoro.id = '+result[i].id) // 일단 모든 id 를 조회하긴함 -> 서버만 켜놔도 업데이트는 하는데 초기화하는 코드도 잘 구현되는지 체크하기(배포한 서버에서는 안되는것같았음)
                if(result[i].contentHTML.length>0){
                    //contentHTML이 존재할때 값을넘길코드
                    // result[i].id
                    // yyyymmdd
                    // result[i].contentHTML
                    db.collection('pomodoro-record').updateOne({'id' : result[i].id, 'yyyymmdd' : yyyymmdd()},{$set: {'pomoRecord' : result[i].contentHTML}},function(){
                        console.log('뽀모레코드 업데이트')
                    })
                }
            }
        });
            // 포모도로컬렉션의 내용을 찾아서 반복문으로 출력한다
            // (포모도로리스트에 id와 날짜데이터가 없으면 생성해주고 있으면 업데이트해준다 초기화메서드는 따로관리한다 00시00분이되면)
            // contentHTML이 0자 이상인애들은 인서트시키고 초기화시켜준다(업데이트)
        db.collection('todolist').find().toArray(function(err,result){
            for(let i = 0; i < result.length; i++){
                if(result[i].todoListHTML.length>0){
                    db.collection('todolist-record').updateOne({'id' : result[i].id, 'yyyymmdd' : yyyymmdd()},{$set: {'todoRecord' : result[i].todoListHTML}},function(){
                        console.log('투두레코드 업데이트')
                    })
                }
            }
        });
        db.collection('not-todolist').find().toArray(function(err,result){
            for(let i = 0; i < result.length; i++){
                if(result[i].notTodoListHTML.length>0){
                    db.collection('not-todolist-record').updateOne({'id' : result[i].id, 'yyyymmdd' : yyyymmdd()},{$set: {'notTodoRecord' : result[i].notTodoListHTML}},function(){
                        console.log('낫투두레코드 업데이트')
                    })
                }
            }
        });
    }
    setInterval(checkTimeSave,10100);
    
    function addStringZero(time){
        if(parseInt(time)<10)
            return "0"+time;
        else
            return time;
    }
    // 00시00분이 되면 초기화, 로그인 중이라면 바로 기록페이지에 필드생성해줌
    function checkTimeInitialization(){
        let dateObject = new Date();
        let year = dateObject.getFullYear();
        let month = dateObject.getMonth()+1;
        let date = dateObject.getDate();
        let hour = addStringZero(dateObject.getHours());
        let min = addStringZero(dateObject.getMinutes());

        // if(hour == 20 && min == 09){
        //     db.collection('pomodoro').find().toArray(function(err,result){
        //         for(let i = 0; i < result.length; i++){
        //             console.log("POMODOROID = "+ result[i].id)
        //         }
        //     });
        // }
        if(hour == 00 && min == 00){
            db.collection('pomodoro').find().toArray(function(err,result){
                for(let i = 0; i < result.length; i++){
                    if(result[i].contentHTML.length>0){
                        db.collection('pomodoro').update({'id' : result[i].id},{$set: {'contentHTML' : ''}})
                    }
                }
            });
            db.collection('todolist').find().toArray(function(err,result){
                for(let i = 0; i < result.length; i++){
                    if(result[i].todoListHTML.length>0){
                        db.collection('todolist').update({'id' : result[i].id},{$set: {'todoListHTML' : ''}})
                    }
                }
            });
            db.collection('not-todolist').find().toArray(function(err,result){
                for(let i = 0; i < result.length; i++){
                    if(result[i].notTodoListHTML.length>0){
                        db.collection('not-todolist').update({'id' : result[i].id},{$set: {'notTodoListHTML' : ''}})
                    }
                }
            });
            // if(req.user.id !== 'log in'){
            //     db.collection('pomodoro-record').findOne({ id: req.user.id, 'yyyymmdd' : yyyymmdd() }, function (err, pomoRecCheck) {
            //         if(pomoRecCheck==null){
            //             db.collection('pomodoro-record').insertOne({ 'id' : req.user.id, 'yyyymmdd' : yyyymmdd() ,'pomoRecord' : '' }, function(err, result){
            //                 console.log('db pomodoro-record create')
            //             })
            //         }
            //     })
            //     db.collection('todolist-record').findOne({ id: req.user.id, 'yyyymmdd' : yyyymmdd() }, function (err, todoRecCheck) {
            //         if(todoRecCheck==null){
            //             db.collection('todolist-record').insertOne({ 'id' : req.user.id, 'yyyymmdd' : yyyymmdd() ,'todoRecord' : '' }, function(err, result){
            //                 console.log('db todo-record create')
            //             })
            //         }
            //     })
            //     db.collection('not-todolist-record').findOne({ id: req.user.id, 'yyyymmdd' : yyyymmdd() }, function (err, notTodoRecCheck) {
            //         if(notTodoRecCheck==null){
            //             db.collection('not-todolist-record').insertOne({ 'id' : req.user.id, 'yyyymmdd' : yyyymmdd() ,'notTodoRecord' : '' }, function(err, result){
            //                 console.log('db not-todo-record create')
            //             })
            //         }
            //     })
            // }
        }
    }
    setInterval(checkTimeInitialization,55100);

    
    //달력버튼 눌러서 해당 데이터 출력하는 코드
    app.post('/dayButton', function(req, res){
        console.log(req.body.clickedButton)
        // if(req.user.id !== 'log in'){
            db.collection('pomodoro-record').findOne({'id':req.user.id, 'yyyymmdd':req.body.clickedButton}, function(err, pomodoroRecordResult){
                if(pomodoroRecordResult ==null){
                    console.log('pomodoro-record-error');
                    pomoRecordRes = '';
                }else{
                    pomoRecordRes = pomodoroRecordResult.pomoRecord;
                }
                db.collection('todolist-record').findOne({'id' : req.user.id, 'yyyymmdd':req.body.clickedButton}, function(err, todolistRecordResult){
                    if(todolistRecordResult==null){
                        console.log('todolist-record-error');
                        todoRecordRes = '';
                    }else{
                        todoRecordRes = todolistRecordResult.todoRecord;
                    }
                    db.collection('not-todolist-record').findOne({'id' : req.user.id, 'yyyymmdd':req.body.clickedButton}, function(err, nottodolistRecordResult){
                        if(nottodolistRecordResult==null){
                            console.log('not-todolist-record-error');
                            notTodoRecordRes = '';
                        }else{
                            notTodoRecordRes = nottodolistRecordResult.notTodoRecord;
                        }
                    res.status(200).send({pomoMessage : pomoRecordRes, todoMessage : todoRecordRes , notTodoMessage : notTodoRecordRes});
                    })
                })
            })
        // }else{
            // res.render('record.ejs', { 'posts' : req.user.id, 'pomos' : '', 'todos' : '', 'notTodos' : ''});
        // }
    })
    app.post('/buttonColor', function(req, res){
        db.collection('pomodoro-record').findOne({'id':req.user.id, 'yyyymmdd':req.body.count},function(err,result){
        if(result !== null){

            res.status(200).send({ message : result.pomoRecord.length});
        }else{
            res.status(200).send({ message : ''});
        }
        })
    })

    // var favicon = require('serve-favicon'); 
    // var path = require('path')
    // app.use(favicon(path.join(__dirname, 'public', 'icon.ico')));
})




