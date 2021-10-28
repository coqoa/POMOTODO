//네비 날짜
function setClock(){
    let dateObject = new Date();
    let hour = addStringZero(dateObject.getHours());
    let min = addStringZero(dateObject.getMinutes());
    let year = dateObject.getFullYear();
    let month = dateObject.getMonth()+1;
    let date = dateObject.getDate();

    document.getElementById("POMOTODO__clock").innerHTML = year + ". " + month + ". " + date + "ﾠ " + hour+ " : " + min ; 

}
function addStringZero(time){
    if(parseInt(time)<10){
        return "0"+time;
    }else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock,1000);
}
//뽀모도로타이머
let redMinutes = 25;
let greenMinutes = 5;
let minutes = redMinutes;

let redSeconds = 0;
let greenSeconds = 0;
let seconds = redSeconds;

const appendMinutes = document.getElementById("minute");
const appendSeconds = document.getElementById("second");
const appendTimes = document.getElementById("#pomo-timer");

const buttonStart = document.getElementById("btn__start");
const buttonStop = document.getElementById("btn__stop");
// const buttonPause = document.getElementById("btn__pause")

const buttonMinute1Plus = document.getElementById("minute1__plus");
const buttonMinute2Plus = document.getElementById("minute2__plus");
const buttonSecond1Plus = document.getElementById("second1__plus");
const buttonSecond2Plus = document.getElementById("second2__plus");
const buttonMinute1Minus = document.getElementById("minute1__minus");
const buttonMinute2Minus = document.getElementById("minute2__minus");
const buttonSecond1Minus = document.getElementById("second1__minus");
const buttonSecond2Minus = document.getElementById("second2__minus");

//뽀모도로 타이머 게이지 채우는 코드
let intervalID;
let func1;

let pomodoroDelayRed=1500; //25분은 1500초
let pomodoroDelayGreen=300; 
let pomodoroDelay = pomodoroDelayRed;



let pieChart = document.getElementById("pie-chart1")
let PomodoroGuage

let pomodoroColor;
pomodoroColor = '#FF6F71';
let pomodoroGuageColor = 1; //토글을 위한 변수
// pomodoroGuageColor 가 1이면 pomodoroColor = ff6f71, 2면 초록색 출력?

//뽀모도로 게이지 구현부분 draw함수를 호출해서 애니메이션을 시각화
function draw(classname){

    PomodoroGuage = 100; //100%여서 고정
    func1 = setInterval(function(){
       if(PomodoroGuage >= 0){ //0%일때까지 반복
        color1(PomodoroGuage ,classname);
        PomodoroGuage -= 0.1;
    } else{  
        clearInterval(func1);
    }
    },pomodoroDelay); // 5가 최소값이라서 뽀모도로 초 변경부분 5초씩 늘리도록 구현했음
}
function color1(PomodoroGuage, classname){
    $(classname).css({
        "background":"conic-gradient("+pomodoroColor+" 0% "+PomodoroGuage+"%, #ffffff "+PomodoroGuage+"% 0%)"
    });
}

//Pomo  Start버튼
buttonStart.onclick = function(){ 
    if(minutes >0 || seconds>0){
        if(buttonStart.className === 'clock__btn'){
            startRecodList();
            audio = new Audio('POMOTODO audio/Beep Short .mp3');
            audio.volume = 0.1;
            // audio.play();
            pieChart.style.background = pomodoroColor;
        }
        buttonStart.classList.add('active');
        buttonStop.classList.add('active');
        buttonStart.style.display = "none";
        buttonStop.style.display = "inline";
        clearInterval(intervalID); 
    }else if (minutes == 0 && seconds == 0){
        alert('시간은 0 이상이여야함 JS 105번줄')
    }
    intervalID = setInterval(operateTimer, 1000);

    console.log(pomodoroGuageColor+'타입 '+minutes+'분 '+seconds+'초 '+'애니메이션 시간 = '+pomodoroDelay);
    // 콘솔 출력내용 : 현재타입, 분, 초, 애니메이션시간
}

//Pomo stop버튼
buttonStop.onclick = function(){ 
    if(minutes >0 || seconds>0){
        if(buttonStop.className === 'clock__btn active'){
            stopRecodList();
        }
    
    }else if (minutes == 0 && seconds == 0){
        // 구현내용 없어도 이상없음? 00분00초일때 정지버튼이 안나오니깐
    }
    clearInterval(intervalID); 
}

function operateTimer(){ //1초씩 감소시키기
    seconds--; 
    appendSeconds.textContent = seconds;
    if(minutes<10)
        appendMinutes.textContent="0"+minutes;
    if(seconds<10)
        appendSeconds.textContent="0"+seconds;
    if(seconds<0){
        minutes--;
        appendMinutes.textContent = minutes;
        seconds = 59;
        appendSeconds.textContent = seconds;
    if(minutes<10)
        appendMinutes.textContent="0"+minutes;
    }
    if(minutes === 00 && seconds === 00){
        clearInterval(intervalID);
        // minutes = 25; seconds = 0;
        // appendMinutes.textContent = "25";
        // appendSeconds.textContent = "00";
        stopRecodList();
        
    }
    if(minutes < 00){
        clearInterval(intervalID);
        minutes = 0; seconds = 0;
        appendMinutes.textContent = "00";
        appendSeconds.textContent = "00";
    }
}

//record 시간기록 
let recordList = document.getElementById("record-list");

let now;
let startHours;
let startMins;
let stopHours;
let stopMins;

function startRecodList(){ // 스타트버튼 누를때 

    now = new Date();
    startHours = addStringZero(now.getHours());
    startMins = addStringZero(now.getMinutes());
    draw(pieChart); // 타이머 애니메이션 적용,
};

function stopRecodList(){ // 00분00초돌때, 정지버튼 누를때,
    // 재생, 일시정지, 정지버튼을 원래대로 되돌리는 코드
    buttonStart.style.display = "inline";
    buttonStop.style.display = "none";
    buttonStart.classList.remove('active');
    buttonStop.classList.remove('active');

    PomodoroGuage = 0; // 애니메이션 종료시키기
    pomodoroDelay = 1500; // 초기값으로 초기화;

    now = new Date();
    stopHours = addStringZero(now.getHours());
    stopMins = addStringZero(now.getMinutes());
    
    // 스탑버튼 누르면 기록하는 코드
    recordList.innerHTML += '<br><button type="button" class="record-content" id="record-time" onclick="appearInputText(this)" >'
                                    +'<span style="color:'+pomodoroColor+'"><i class="fas fa-circle"></i>ㅤㅤ</span>'
                                    + startHours +' : '+ startMins 
                                    +' ~ '+ stopHours +' : '+ stopMins +'ㅤㅤㅤ'
                                    +'<input type="text" class="record-text" id="record-text" style ="display: inline" '
                                    +'onkeydown=" if(window.event.keyCode==13){changeText(this)}" maxlength="26"  autocomplete=off></input>'
                            +' </button>'
                            
    //스탑버튼 누르면 출력하는 오디오
    audio = new Audio('POMOTODO audio/Beep Short .mp3');
    audio.volume = 0.1;
    // audio.play();

    
    // 스탑버튼 누르면 색깔, 분 변경하는 코드
    if(pomodoroGuageColor == 1){ // 스탑버튼을 눌렀을 때 빨강이면 초록으로+05분으로+게이지도 초록으로 + 토글변수인 포모도로게이지컬러도 2로변경
        buttonStart.style.color = '#56D69C'; // 타이머실행버튼 컬러 조작함수

        pomodoroDelay = pomodoroDelayGreen;
        minutes = parseInt(pomodoroDelayGreen/60);
        seconds = pomodoroDelayGreen%60;

        if(minutes<10)
            appendMinutes.textContent = "0"+minutes;
        else
            appendMinutes.textContent = minutes;
        
        if(seconds>9)
            appendSeconds.textContent = seconds;
        else if(seconds<10)
            appendSeconds.textContent = "0"+seconds;   
        pomodoroColor = '#56D69C'; // 게이지컬러 조작함수
        pomodoroGuageColor = 2;

    }else if(pomodoroGuageColor == 2){
        buttonStart.style.color = '#FF6F71'

        pomodoroDelay = pomodoroDelayRed;
        minutes = parseInt(pomodoroDelayRed/60); 
        seconds = pomodoroDelayRed%60;
        if(minutes<10)
            appendMinutes.textContent = "0"+minutes;
        else
            appendMinutes.textContent = minutes;

        if(seconds < 10)
            appendSeconds.textContent = "0"+seconds;
        else if(seconds > 9)
            appendSeconds.textContent = seconds;
        pomodoroColor = '#FF6F71';
        pomodoroGuageColor = 1;
    }
};

//기록에 입력시 값 대입해주는 코드
function changeText(txt){
    txt.style.display ='none';
    let recordTextParent = txt.parentNode;
    recordTextParent.innerHTML += "<span>"+txt.value+"</span>";
}

function appearInputText(txt){ // 기록내용 수정 클릭 시 
    
    let recordTextInputTextTag = txt.childNodes[2]; // inputText창의 display를 inline으로 변경해서 보이게 한다
    recordTextInputTextTag.style.display = 'inline';
    let recordTextContent = txt.childNodes[4]; // 입력을 통해 생성된 span태그를 변수에 담아준다
    if(recordTextContent!==undefined) // 생성된 span태그가 있을경우에 지워주고 없다면 실행하지않는다
        txt.removeChild(recordTextContent);
    recordTextInputTextTag.focus();
    //     recordTextInputTextTag.focus();
    // }else
    //     recordTextInputTextTag.focus();
}
function addZeroMinutes(){ // 10분 미만은 0을 붙여주는 메서드
    if(minutes<10) // 타이머 10분 증가, 출력
        appendMinutes.textContent="0"+minutes
    else
        appendMinutes.textContent=minutes; 
}
function addZeroSeconds(){// 10초 미만은 0을 붙여주는 메서드
    if(seconds<10) // 타이머 1분 증가, 출력
        appendSeconds.textContent="0"+seconds
    else
        appendSeconds.textContent = seconds; 
}
//minutes증감 버튼
buttonMinute1Plus.onclick = function(){ //10분 증가
    if(minutes<90 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redMinutes+=10;
            minutes = redMinutes;
            addZeroMinutes();
            pomodoroDelayRed += 600; // 게이지 10분 증가
            pomodoroDelay = pomodoroDelayRed; //pomodoeoDelay = pomodoroDelayRed 때문에 한번 더 거쳐야 해서  재할당 해줘야 값이 저장됨 안하면 2번째바퀴부터 값이 저장됨
        }else if(pomodoroGuageColor === 2){
            greenMinutes+=10;
            minutes = greenMinutes;
            addZeroMinutes();
            pomodoroDelayGreen += 600;
            pomodoroDelay = pomodoroDelayGreen;
        }
    }
}
buttonMinute2Plus.onclick = function(){ //1분 증가
    if(minutes<99 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redMinutes++;
            minutes = redMinutes;
            addZeroMinutes();
            pomodoroDelayRed += 60; // 게이지 1분 증가
            pomodoroDelay = pomodoroDelayRed; 
        }else{
            greenMinutes++;
            minutes = greenMinutes;
            addZeroMinutes();
            pomodoroDelayGreen += 60;
            pomodoroDelay = pomodoroDelayGreen;
        }
    }
}
buttonMinute1Minus.onclick = function(){ //10분 감소
    if(minutes>9 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redMinutes-=10;
            minutes = redMinutes;
            addZeroMinutes();
            pomodoroDelayRed -= 600; // 게이지 10분 감소
            pomodoroDelay = pomodoroDelayRed; 
        }else{
            greenMinutes-=10;
            minutes = greenMinutes;
            addZeroMinutes();
            pomodoroDelayGreen -= 600;
            pomodoroDelay = pomodoroDelayGreen;
        }
    }
}
buttonMinute2Minus.onclick = function(){ //1분 감소
    if(minutes>0 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redMinutes--;
            minutes = redMinutes;
            addZeroMinutes();
            pomodoroDelayRed -= 60; // 게이지 1분 증가
            pomodoroDelay = pomodoroDelayRed; 
        }else{
            greenMinutes--;
            minutes = greenMinutes;
            addZeroMinutes();
            pomodoroDelayGreen -= 60;
            pomodoroDelay = pomodoroDelayGreen;
        }
    }
}
//
//seconds 증감 버튼
buttonSecond1Plus.onclick = function(){ //10초 증가
    if(seconds<50 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redSeconds+=10;
            seconds = redSeconds;
            appendSeconds.textContent = seconds

            pomodoroDelayRed += 10; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayRed; //pomodoeoDelay = pomodoroDelayRed 때문에 한번 더 거쳐야 해서  재할당 해줘야 값이 저장됨 안하면 2번째바퀴부터 값이 저장됨
        }else if(pomodoroGuageColor === 2){
            greenSeconds+=10;
            seconds = greenSeconds;
            appendSeconds.textContent = seconds; 

            pomodoroDelayGreen += 10; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayGreen;
        }

    }else if (seconds>=50 && buttonStart.style.display !== "none" && minutes < 99){
        if(pomodoroGuageColor === 1){
            redMinutes++;
            minutes = redMinutes;
            addZeroMinutes();
            redSeconds -= 50;
            seconds = redSeconds;
            appendSeconds.textContent="0"+seconds;

            pomodoroDelayRed += 10; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayRed;
            
        }else if(pomodoroGuageColor === 2){
            greenMinutes++;
            minutes = greenMinutes;
            addZeroMinutes();
            greenSeconds -= 50;
            seconds = greenSeconds;
            appendSeconds.textContent="0"+seconds;
            
            pomodoroDelayGreen += 10; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayGreen;
            
        } 
    }
}
buttonSecond2Plus.onclick = function(){ // 5초 증가
    if(seconds<=54 && buttonStart.style.display !== "none" && minutes < 99){
        if(pomodoroGuageColor === 1){

            redSeconds += 5;
            seconds = redSeconds;
            appendSeconds.textContent=seconds;
            addZeroSeconds();
            pomodoroDelayRed += 5;
            pomodoroDelay = pomodoroDelayRed;

        }else if(pomodoroGuageColor === 2){

            greenSeconds += 5;
            seconds = greenSeconds;
            appendSeconds.textContent=seconds;
            addZeroSeconds();
            pomodoroDelayGreen += 5;
            pomodoroDelay = pomodoroDelayGreen;

        }

    }else if(seconds >= 55 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redMinutes++;
            minutes = redMinutes;
            addZeroMinutes();
            redSeconds -= 55;
            seconds = redSeconds;
            appendSeconds.textContent="0"+seconds;

            pomodoroDelayRed += 5; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayRed;
            
        }else if(pomodoroGuageColor === 2){
            greenMinutes++;
            minutes = greenMinutes;
            addZeroMinutes();
            greenSeconds -= 55;
            seconds = greenSeconds;
            appendSeconds.textContent="0"+seconds;
            
            pomodoroDelayGreen += 5; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayGreen;
            
        } 
    }
}

buttonSecond1Minus.onclick = function(){ //10초감소

    if(seconds>=10 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){
            redSeconds -= 10;
            seconds = redSeconds;
            addZeroSeconds();
            pomodoroDelayRed -= 10;
            pomodoroDelay = pomodoroDelayRed; 
        }else{
            greenSeconds -= 10;
            seconds = greenSeconds;
            addZeroSeconds();
            pomodoroDelayGreen -= 10;
            pomodoroDelay = pomodoroDelayGreen; 
        }

    }else if (seconds<10 && buttonStart.style.display !== "none" && minutes > 0){
        if(pomodoroGuageColor === 1){
            redMinutes--;
            minutes = redMinutes;
            addZeroMinutes();
            redSeconds += 50;
            seconds = redSeconds;
            if(seconds<10)
                appendSeconds.textContent="0"+seconds;
            else
                appendSeconds.textContent=seconds;

            pomodoroDelayRed -= 10; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayRed; 

        }else if(pomodoroGuageColor === 2){
            greenMinutes--;
            minutes = greenMinutes;
            addZeroMinutes();
            greenSeconds += 50;
            seconds = greenSeconds;
            if(seconds<10)
                appendSeconds.textContent="0"+seconds;
            else
                appendSeconds.textContent=seconds;

            pomodoroDelayGreen -= 10; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayGreen; 
            
        } 
    }
}

buttonSecond2Minus.onclick = function(){ //5초감소 
    if(seconds>=5 && buttonStart.style.display !== "none"){
        if(pomodoroGuageColor === 1){

            redSeconds -= 5;
            seconds = redSeconds;
            appendSeconds.textContent=seconds;
            addZeroSeconds();
            pomodoroDelayRed -= 5;
            pomodoroDelay = pomodoroDelayRed;

        }else if(pomodoroGuageColor === 2){

            greenSeconds -= 5;
            seconds = greenSeconds;
            appendSeconds.textContent=seconds;
            addZeroSeconds();
            pomodoroDelayGreen -= 5;
            pomodoroDelay = pomodoroDelayGreen;

        }
        
    }else if (seconds < 5  && buttonStart.style.display !== "none" && minutes > 0){
        if(pomodoroGuageColor === 1){
            redMinutes--;
            minutes = redMinutes;
            addZeroMinutes();
            redSeconds += 55;
            seconds = redSeconds;
            addZeroSeconds();
            pomodoroDelayRed -= 5; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayRed; 

        }else if(pomodoroGuageColor === 2){
            greenMinutes--;
            minutes = greenMinutes;
            addZeroMinutes();
            greenSeconds += 55;
            seconds = greenSeconds;
            addZeroSeconds();
            pomodoroDelayGreen -= 5; // 게이지 10초 증가
            pomodoroDelay = pomodoroDelayGreen; 
            
        } 
    }
}

//모달창 구현
let modal = document.getElementById("modal");
let btnModal = document.getElementById("mail-btn");
btnModal.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if (modal.style.display == "flex"){
        modal.style.display = "none";
    }else{
        modal.style.display = "flex";
    }
})
let closeBtn = modal.querySelector(".close-area") //X버튼 눌러서 모달창 종료
closeBtn.addEventListener("click", e => {
    modal.style.display = "none";
})
window.addEventListener("keyup", e => { //esc키 눌렀을 때 모달창 종료
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none";
    }
})

//투두 
//버튼을 누르면 addItem메소드를 실행한다 addItem메소드는 인풋텍스트값을 아이템리스트배열에 넣은 후 값을초기화, 포커스는 인풋텍스트에 남게한후 showList메소드를 실행한다
//showList메소드는 리스트를 출력해주는 메소드이고 ol태그인 list변수에다가 for문을 통해 li태그, span태그, 아이템리스트 등등을 넣은뒤 innerHTML을 통해 list에 다시 넣어준다

let itemList = document.querySelector(".item-list")
let inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".input-text").value;

    if(item.length !== 0 ){ //빈값출력안되도록 구현 211009
        // itemList.push(item);
        itemList.innerHTML += "<li class = 'draggable' draggable = 'true' ><i class='fas fa-arrows-alt-v'></i>"
                                +" <button type= ='button' class='todo-list-content' >"+ item +"</button>"
                                +"<button type ='button' class='todo-list-delete' onclick='deleteItem(this)'>"+" ✖ "+"</button></li>"
        document.querySelector(".input-text").value = "";
        document.querySelector(".input-text").focus();
    }
}

$(function(){
    $("#sortable").sortable({
        start:function(event, ui){
            console.log("drag : " + (ui.item.index()));
        }    
    });
})

function deleteItem(txt) {
    txt.parentNode.remove();
}

//투두 모달창 구현
let todoModal = document.getElementById("todo-modal");
let setColorList;
itemList.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if(e.target.tagName !== "SPAN" && e.target.className=='todo-list-content'){
        if (todoModal.style.display == "flex"){
            todoModal.style.display = "none";
        }else{
            setColorList = e.target;
            todoModal.style.display = "flex";
        }
    }
})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let todoCloseBtn = document.getElementById("close") //X버튼 눌러서 모달창 종료
todoCloseBtn.addEventListener("click", e => {
    todoModal.style.display = "none";
})
window.addEventListener("keyup", e => { //esc키 눌렀을 때 모달창 종료
    if(todoModal.style.display === "flex" && e.key === "Escape") {
        todoModal.style.display = "none";
    }
})



let todoCheckBtn = document.getElementById("check")
todoCheckBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON' || e.target.className === 'fas fa-check') {
        setColorList.style.color="lightgray";
        todoModal.style.display = "none";
    }
})



let modalTodoColor = document.getElementById("todo-modal-content");
modalTodoColor.addEventListener("click", e =>{
    console.log(e.target) // 클릭한 요소의 태그를 콘솔에 찍어줌다 10월 28일 2시 여기까지완료
})


// let todoRedBtn = document.getElementById("red")
// todoRedBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#f36164";
//     todoModal.style.display = "none";
//     }
// })
// let todoLightOrangeBtn = document.getElementById("light-orange")
// todoLightOrangeBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#FFD77F";
//     todoModal.style.display = "none";
//     }
// })
// let todoOrangeBtn = document.getElementById("orange")
// todoOrangeBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#FFA045";
//     todoModal.style.display = "none";
//     }
// })
// // 
// let todoLightPinkBtn = document.getElementById("light-pink")
// todoLightPinkBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#FFC1F8";
//     todoModal.style.display = "none";
//     }
// })
// let todoPinkBtn = document.getElementById("pink")
// todoPinkBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#EE57B6";
//     todoModal.style.display = "none";
//     }
// })
// let todoLightPurpleBtn = document.getElementById("light-puple")
// todoLightPurpleBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#B8B2FF";
//     todoModal.style.display = "none";
//     }
// })
// let todoPurpleBtn = document.getElementById("purple")
// todoPurpleBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#B668FC";
//     todoModal.style.display = "none";
//     }
// })
// let todoLightGreenBtn = document.getElementById("light-green")
// todoLightGreenBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#AFD5AB";
//     todoModal.style.display = "none";
//     }
// })
// let todoGreenBtn = document.getElementById("green")
// todoGreenBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#56D69C";
//     todoModal.style.display = "none";
//     }
// })
// let todoDeepGreenBtn = document.getElementById("deep-green")
// todoDeepGreenBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#88BE7B";
//     todoModal.style.display = "none";
//     }
// })
// let todoLightBlueGreenBtn = document.getElementById("light-blue-green")
// todoLightBlueGreenBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#66DAE2";
//     todoModal.style.display = "none";
//     }
// })
// let todoBlueGreenBtn = document.getElementById("blue-green")
// todoBlueGreenBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#429488";
//     todoModal.style.display = "none";
//     }
// })
// let todoLightBlueBtn = document.getElementById("light-blue")
// todoLightBlueBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#289BFF";
//     todoModal.style.display = "none";
//     }
// })
// let todoBlueBtn = document.getElementById("blue")
// todoBlueBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#1C00FF";
//     todoModal.style.display = "none";
//     }
// })
// let todoOliveBtn = document.getElementById("olive")
// todoOliveBtn.addEventListener("click", e => {
//     if (e.target.tagName === 'BUTTON') {
//     setColorList.style.color="#BFC655";
//     todoModal.style.display = "none";
//     }
// })
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 낫투두

let ntdItemList = document.querySelector(".ntd-item-list")
let ntdInputButton = document.querySelector(".ntd-input-button");
ntdInputButton.addEventListener("click", ntdAddItem);

function ntdAddItem() {
    let ntdItem = document.querySelector(".ntd-input-text").value;

    if(ntdItem.length !== 0 ){ //빈값출력안되도록 구현 211009
        // itemList.push(item);
        ntdItemList.innerHTML += "<li class = 'draggable' draggable = 'true' ><i class='fas fa-arrows-alt-v'></i>"
                                    +" <button type= ='button' class='ntd-todo-list-content' >"+ ntdItem +"</button>"
                                    +"<button type ='button' class='ntd-todo-list-delete' onclick='deleteItem(this)'>"+" ✖ "+"</button></li>"
        document.querySelector(".ntd-input-text").value = "";
        document.querySelector(".ntd-input-text").focus();
    }
}

$(function(){
    $("#ntd-sortable").sortable({
        start:function(event, ui){
            console.log("drag : " + (ui.item.index()));
        }    
    });
})

//낫투두 모달창 구현
let notTodoModal = document.getElementById("not-todo-modal"); 
let ntdSetColorList;
ntdItemList.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if(e.target.tagName !== "SPAN"  && e.target.className=='ntd-todo-list-content'){
        if (notTodoModal.style.display == "flex"){
            notTodoModal.style.display = "none";
        }else{
            ntdSetColorList = e.target;
            notTodoModal.style.display = "flex";
        }
    }
})
let notTodoCloseBtn = document.getElementById("ntdClose") //X버튼 눌러서 모달창 종료
notTodoCloseBtn.addEventListener("click", e => {
    notTodoModal.style.display = "none";
})
window.addEventListener("keyup", e => { //esc키 눌렀을 때 모달창 종료
    if(notTodoModal.style.display === "flex" && e.key === "Escape") {
        notTodoModal.style.display = "none";
    }
})
let ntdCheckBtn = document.getElementById("ntdCheck")
ntdCheckBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON' || e.target.className === 'fas fa-check') {
    ntdSetColorList.style.color="#88BE7B";
    notTodoModal.style.display = "none";
    }
})
let notTodoRedBtn = document.getElementById("ntdRed")
notTodoRedBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    ntdSetColorList.style.color="#f36164";
    notTodoModal.style.display = "none";
    }
})
//낫투두 작동완료
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//뮤직플레이어
let audio = new Audio('POMOTODO audio/Farm Morning with Sheep.mp3');
let selectAudio = document.getElementById("select-audio");
let modalAudio = document.getElementById("modal-audio");
let start = document.getElementById("start-button");
let stop = document.getElementById("pause-button")

selectAudio.innerText = audio1.innerText;

start.addEventListener("click", function(){
    audio.play();
    start.style.display = "none";
    stop.style.display = "flex";
});
stop.addEventListener("click", function(){
    audio.pause();
    start.style.display = "flex";
    stop.style.display = "none";
});


// 클릭시 모달창 나오는 코드
selectAudio.addEventListener("click", modalClick);
function modalClick(){
    if(modalAudio.style.display == "none")
        modalAudio.style.display = "flex";
    else if(modalAudio.style.display == "flex")
        modalAudio.style.display = "none"
    // 오디오 선택 버튼 상호작용 구현
    modalAudio.addEventListener("click", e =>{
        audio.pause();
        if(e.target.value == 'audio1'){
            audio = new Audio('POMOTODO audio/Farm Morning with Sheep.mp3');
            selectAudio.innerText = audio1.innerText;
        }else if(e.target.value == 'audio2'){
            audio = new Audio('POMOTODO audio/Fire.mp3');
            selectAudio.innerText = audio2.innerText;
        }else if(e.target.value == 'audio3'){
            audio = new Audio('POMOTODO audio/Outdoor Summer Ambience.mp3');
            selectAudio.innerText = audio3.innerText;
        }else if(e.target.value == 'audio4'){
            audio = new Audio('POMOTODO audio/Rain Heavy Loud.mp3');
            selectAudio.innerText = audio4.innerText;
        }else if(e.target.value == 'audio5'){
            audio = new Audio('POMOTODO audio/Rain On Rooftop.mp3');
            selectAudio.innerText = audio5.innerText;
        }else if(e.target.value == 'audio6'){
            audio = new Audio('POMOTODO audio/Valley Night.mp3');
            selectAudio.innerText = audio6.innerText;
        }else if(e.target.value == 'audio7'){
            audio = new Audio('POMOTODO audio/Waves Crashing on Rock Beach.mp3');
            selectAudio.innerText = audio7.innerText;
        }
        audio.loop = true;
        setTimeout(function(){ //stop과 동시에 play를 해서 생기는 문제 해결
            audio.play();
        },150) 
        start.style.display = "none";
        stop.style.display = "flex";
        modalAudio.style.display = "none"

    })
}