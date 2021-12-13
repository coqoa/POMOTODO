// //네비 날짜
// function setClock(){
//     let dateObject = new Date();
//     let year = dateObject.getFullYear();
//     let month = dateObject.getMonth()+1;
//     let date = dateObject.getDate();
//     let hour = addStringZero(dateObject.getHours());
//     let min = addStringZero(dateObject.getMinutes());
//     document.getElementById("POMOTODO__clock").innerHTML = year + ". " + month + ". " + date + "ﾠ " + hour+ " : " + min ; 
// }
// function addStringZero(time){
//     if(parseInt(time)<10)
//         return "0"+time;
//     else
//         return time;
// }
// window.onload = function(){
//     setClock();
//     setInterval(setClock,1000);
// }
// let modalButton = document.getElementById('modal-button-id-check');
// let modalWindow = document.getElementById('modal-window-id-check');
// let loginButton = document.getElementById('loginButton');
// let logoutButton = document.getElementById('logoutButton');
// let unregister = document.getElementById('unregister');
// let unregisterCheck = document.getElementById('unregister-check');
// let unregisterOk = document.getElementById('unregister-ok');
// let unregisterNo = document.getElementById('unregister-no');
// let signupLoginModal = document.getElementById('signup-login-modal');
// let hello = document.getElementById('hello');
// let helloUser = document.getElementById('hello-user');

// modalButton.addEventListener("click", e=>{
//     if(modalWindow.style.display == 'flex')
//         modalWindow.style.display = "none"
//     else
//         modalWindow.style.display = "flex"
//         if(modalButton.innerText == "log in"){
            
//             loginButton.style.display = "flex"
//             signupLoginModal.style.display = "flex"
//             hello.style.display="inline-block"
//             // logoutButton.style.display = "none"
//         }
//         else{
//             logoutButton.style.display = "flex"
//             unregister.style.display = "flex"
//             helloUser.style.display="inline-block"
//             // loginButton.style.display = "none"
//         }
// })

// loginButton.addEventListener("click", e=>{
//     location.href='/login';
//     // testReplace.style.display = "none"
// })
// logoutButton.addEventListener("click", e=>{
//     location.href='/logout';
// })

// unregister.addEventListener("click", e=>{
//     unregisterCheck.style.display = "inline-block"
// })
// unregisterOk.addEventListener("click", e=>{
//     location.href='/deleteUser';
// })
// unregisterNo.addEventListener("click", e=>{
//     unregisterCheck.style.display = "none"
// })
// signupLoginModal.addEventListener("click", e=>{
//     location.href='/signup';
// })
//  ------------------------------------------------(header.js로 이동시켰음 211208)------------------------------------------------------------ 
// 달력
var today = new Date();//오늘 날짜//내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌
var date = new Date();//today의 Date를 세어주는 역할



function prevCalendar() {//이전 달
    today = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
    buildCalendar();

 // today라는 변수에다가 인자값으로 년, 월, 일을 넣어서  빌드캘린더함수실행
 // getFullyear ? : 년도를 출력하는 함수
 // getMonth ? : 월 출력 함수 저번달이므로 -1해준다 getMonth는 0~11월로 표시되지만 빌드캘린더 함수에서 +1해주므로 -1을 넣어줘야 전달값이 나옴
 // getDate ? : 일 출력 함수
}

function nextCalendar() {//다음 달
    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    buildCalendar();
}

function buildCalendar(){//입력받은 값을 기준으로 달력 만들기
    var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
    //이번 달의 첫째 날,
    //new를 쓰는 이유 : new를 쓰면 이번달의 로컬 월을 정확하게 받아온다.     
    //new를 쓰지 않았을때 이번달을 받아오려면 +1을 해줘야한다. 
    //왜냐면 getMonth()는 0~11을 반환하기 때문
    var lastDate = new Date(today.getFullYear(),today.getMonth()+1,0);
    //이번 달의 마지막 날
    //new를 써주면 정확한 월을 가져옴, getMonth()+1을 해주면 다음달로 넘어가는데
    //day를 1부터 시작하는게 아니라 0부터 시작하기 때문에 
    //대로 된 다음달 시작일(1일)은 못가져오고 1 전인 0, 즉 전달 마지막일 을 가져오게 된다
    var tbCalendar = document.getElementById("calendar");
    //날짜를 찍을 테이블 변수 만듬, 일 까지 다 찍힘
    var tbCalendarYM = document.getElementById("tbCalendarYM");
    //테이블에 정확한 날짜 찍는 변수
    //innerHTML : js 언어를 HTML의 권장 표준 언어로 바꾼다
    //new를 찍지 않아서 month는 +1을 더해줘야 한다. 
     tbCalendarYM.innerHTML = today.getFullYear() + "." + (today.getMonth() + 1) + ""; 

     /*while은 이번달이 끝나면 다음달로 넘겨주는 역할*/
    while (tbCalendar.rows.length > 2) {
    //열을 지워줌
    //기본 열 크기는 body 부분에서 2로 고정되어 있다.
          tbCalendar.deleteRow(tbCalendar.rows.length-1);
          //테이블의 tr 갯수 만큼의 열 묶음은 -1칸 해줘야지 
        //30일 이후로 담을달에 순서대로 열이 계속 이어진다.
     }
     var row = null;
     row = tbCalendar.insertRow();
     //테이블에 새로운 열 삽입//즉, 초기화
     var cnt = 0;// count, 셀의 갯수를 세어주는 역할
    // 1일이 시작되는 칸을 맞추어 줌
     for (i=0; i<doMonth.getDay(); i++) {
     /*이번달의 day만큼 돌림*/
          cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
          cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
     }
    /*달력 출력*/
     for (i=1; i<=lastDate.getDate(); i++) { 
     //1일부터 마지막 일까지 돌림
          cell = row.insertCell();//열 한칸한칸 계속 만들어주는 역할
          cell.innerHTML = "<button class='day-button' id='"+i+"' onclick='clickButton(this.id)'>"+i+"</button>";//셀을 1부터 마지막 day까지 HTML 문법에 넣어줌
          cnt = cnt + 1;//열의 갯수를 계속 다음으로 위치하게 해주는 역할
          if (cnt % 7 == 1) {/*일요일 계산*/
            //1주일이 7일 이므로 일요일 구하기
            //월화수목금토일을 7로 나눴을때 나머지가 1이면 cnt가 1번째에 위치함을 의미한다
            // cell.innerHTML = "<font color=#F79DC2>" + i
            cell.innerHTML = "<button class='day-button' id='"+i+"' onclick='clickButton(this.id)'>"+i+"</button>";//셀을 1부터 마지막 day까지 HTML 문법에 넣어줌
            //1번째의 cell에만 색칠
        }    
        if (cnt%7 == 0){/* 1주일이 7일 이므로 토요일 구하기*/
            //월화수목금토일을 7로 나눴을때 나머지가 0이면 cnt가 7번째에 위치함을 의미한다
            // cell.innerHTML = "<font color=skyblue>" + i
            cell.innerHTML = "<button class='day-button' id='"+i+"' onclick='clickButton(this.id)'>"+i+"</button>";//셀을 1부터 마지막 day까지 HTML 문법에 넣어줌
          //7번째의 cell에만 색칠
           row = calendar.insertRow();
           //토요일 다음에 올 셀을 추가
      }
      /*오늘의 날짜에 노란색 칠하기*/
    if (today.getFullYear() == date.getFullYear()
         && today.getMonth() == date.getMonth()
         && i+1 == date.getDate()) {//어제날짜에 칠해야하므로
          //달력에 있는 년,달과 내 컴퓨터의 로컬 년,달이 같고, 일이 오늘의 일과 같으면
        cell.style.border = "1px solid gray";//셀의 배경색을 노랑으로 
    }
}
}  
function clickButton(clicked_id){
  let year = today.getFullYear();
  let month = ((today.getMonth()+1));
  let day = (clicked_id);
  let yyyymmdd = year+"."+month+"."+day;
  // console.log(yyyymmdd);
  let pomoRecordContent = document.querySelector(".record-pomo-content");
  let todoRecordContent = document.querySelector(".record-todo-content");
  let notTodoRecordContent = document.querySelector(".record-nottodo-content");
  // 클릭제외버튼 테두리색 초기화
  let buttonBorder = document.querySelectorAll('.day-button');
  for (let i = 0; i < buttonBorder.length; i++)
    buttonBorder[i].style.border = "1px solid #dadada";
  //클릭한 버튼 테두리색
  let clickedButton = document.getElementById(clicked_id);
  clickedButton.style.border = "4px solid #FF8000";
      
    // 이거랑 navId로 서버에서 자료찾아서 화면에 뿌려주도록 ajax 있으면 뿌려주고 없으면 빈값으로 출력
  $.ajax({
      method : 'POST',
      url : '/dayButton',
      data : {'clickedButton' : yyyymmdd},
      success : function(data) {
        $(pomoRecordContent).html (data.pomoMessage);
        $(todoRecordContent).html (data.todoMessage);
        $(notTodoRecordContent).html (data.notTodoMessage);
          console.log('데이버튼클릭 성공')
      },
      error : function(xhr, status, error) {
          console.log('데이버튼 클릭실패');
      }
  })
}

buildCalendar();


// // 버튼.addEventListener("click",e=>{
// 버튼.onclick = function(){
// // console.log(e.target.id);
// console.log('a');
// }
// 달력