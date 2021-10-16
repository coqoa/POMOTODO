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

let minutes = 0;
let seconds = 0;

const appendMinutes = document.getElementById("minute");
const appendSeconds = document.getElementById("second");

const buttonStart = document.getElementById("btn__start");
const buttonStop = document.getElementById("btn__stop");
const buttonPause = document.getElementById("btn__pause")

const buttonMinute1Plus = document.getElementById("minute1__plus");
const buttonMinute2Plus = document.getElementById("minute2__plus");
const buttonSecond1Plus = document.getElementById("second1__plus");
const buttonSecond2Plus = document.getElementById("second2__plus");
const buttonMinute1Minus = document.getElementById("minute1__minus");
const buttonMinute2Minus = document.getElementById("minute2__minus");
const buttonSecond1Minus = document.getElementById("second1__minus");
const buttonSecond2Minus = document.getElementById("second2__minus");

let intervalID;

//Pomo  Start
buttonStart.onclick = function(){ 
    if(minutes >0 || seconds>0){
        startRecodList();
    }
    
    clearInterval(intervalID); 
    intervalID = setInterval(operateTimer, 1000);

}
//Pomo  Pause 
buttonPause.onclick = function(){ 
    clearInterval(intervalID); 
}
//Stop
buttonStop.onclick = function(){ 
    if(minutes >0 || seconds>0){
        stopRecodList();
    }
    clearInterval(intervalID); 
    minutes = 0; seconds = 0;
    appendMinutes.textContent = "00";
    appendSeconds.textContent = "00";
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
        stopRecodList();
        clearInterval(intervalID);
    }
    if(minutes < 00){
        clearInterval(intervalID);
        minutes = 0; seconds = 0;
        appendMinutes.textContent = "00";
        appendSeconds.textContent = "00";
    }
}

//record 시간기록 
function startRecodList(){ // 스타트버튼 누를때 
    const  recordList = document.getElementById("record-list");

    let now = new Date();
    let hours = addStringZero(now.getHours());
    let mins = addStringZero(now.getMinutes());
    recordList.innerHTML += '<br><span class="record-content" id="record-time">'+hours +' : '+ mins +' ';
};

function stopRecodList(){ // 00분00초돌때, 정지버튼 누를때,
    const  recordList = document.getElementById("record-list");
    const  recordText = document.getElementById("record-text");
    
    let now = new Date();
    let hours = addStringZero(now.getHours());
    let mins = addStringZero(now.getMinutes());
    recordList.innerHTML += '<span class="record-content" id="record-time">'
                            +' ~ '+ hours +' : '+ mins 
                            +'</span><input class="record-content" id="record-text"  type="text" maxlength="26"  autocomplete=off onkeydown="if(window.event.keyCode==13){addRecordText()}"/>'
                            +'<button type="button" class="record-button" id="record-input-button"><i class="fas fa-greater-than"></i></button>';
    // 값을 다른 페이지로 넘기려면 배열에 넣어야??
};
function addRecordText(){
    let aaa = document.getElementById("record-text").value;
    alert(aaa);
    //위에서 recordList를 통해 입력창은 모달형식으로, 출력창을 버튼으로 만들어서 출력창 클릭시 모달창뜨면서 입력할 수 있도록 구현?
    // recordText.innerHTML = 'aaa'
    // let bbb = document.getElementById("record-text");
    // aaa = recordText에 대입?
    // recordtext에 대입하는 코드를 내부에서 찾아보자 (그동안 했던 코드들?)
}
//minutes증감 버튼
buttonMinute1Plus.onclick = function(){
    if(minutes<90){
        minutes+=10;
        appendMinutes.textContent=minutes;
    }
}
buttonMinute2Plus.onclick = function(){
    if(minutes<99){
        minutes++;
        appendMinutes.textContent=minutes;
        if(minutes<10)
            appendMinutes.textContent="0"+minutes;
    }
}
buttonMinute1Minus.onclick = function(){
    if(minutes>9){
        minutes-=10;
        appendMinutes.textContent=minutes;
        if(minutes<10)
            appendMinutes.textContent="0"+minutes;
    }
}
buttonMinute2Minus.onclick = function(){
    if(minutes>0){
        minutes--;
        appendMinutes.textContent=minutes;
        if(minutes<10)
            appendMinutes.textContent="0"+minutes;
    }
}
//
//seconds 증감 버튼
buttonSecond1Plus.onclick = function(){
    if(seconds<50){
        seconds+=10;
        appendSeconds.textContent=seconds;
        // if(seconds === 60)
        //     alert('60이다')
    }
}
buttonSecond2Plus.onclick = function(){
    if(seconds<59){
        seconds++;
        appendSeconds.textContent=seconds;
        if(seconds<10)
            appendSeconds.textContent="0"+seconds;
    }
}
buttonSecond1Minus.onclick = function(){
    if(seconds>10){
        seconds-=10;
        appendSeconds.textContent=seconds;
        if(seconds<10)
            appendSeconds.textContent="0"+seconds;
    }
}
buttonSecond2Minus.onclick = function(){
    if(seconds>0){
        seconds--;
        appendSeconds.textContent=seconds;
        if(seconds<10)
                appendSeconds.textContent="0"+seconds;
    }
}
//
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
//
//투두 
//버튼을 누르면 addItem메소드를 실행한다 addItem메소드는 인풋텍스트값을 아이템리스트배열에 넣은 후 값을초기화, 포커스는 인풋텍스트에 남게한후 showList메소드를 실행한다
//showList메소드는 리스트를 출력해주는 메소드이고 ol태그인 list변수에다가 for문을 통해 li태그, span태그, 아이템리스트 등등을 넣은뒤 innerHTML을 통해 list에 다시 넣어준다
let itemList = [];
let inputButton = document.querySelector(".input-button");
inputButton.addEventListener("click", addItem);


function addItem() {
    let item = document.querySelector(".input-text").value;

    if(item.length !== 0 ){ //빈값출력안되도록 구현 211009
        itemList.push(item);
        document.querySelector(".input-text").value = "";
        document.querySelector(".input-text").focus();
    }
    showList();
}

function showList(){
    let list = "<ol class = 'container'>"
    for (let i = 0; i < itemList.length; i++){
        list += "<li class = 'draggable' draggable = 'true'>" 
                       + "<span class='list-drag'  id=" + i + " >" + " ⇵ " + "</span>"
                    //    + itemList[i]
                       + "<span class='list-content' id=" + i + ">" + itemList[i] + "</span>" 
                       + "<span class='list-delete' id=" + i + ">" + " ✖ " + "</span>"
                       + "</li>";
    } 

    list += "</ol>";
    document.querySelector(".item-list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".list-delete");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
   
}

function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}

// const draggables = document.querySelectorAll('.draggable');
// const containers = document.querySelectorAll('.container');

// draggables.forEach(draggable => {
//     draggable.addEventListener('dragstart', () => {
//         alert('dragStart');
//         // draggable.classList.add("dragging");
//     });

//     draggable.addEventListener("dragend", () => {
//         console.log('dragEnd');
//         // draggable.classList.remove("dragging");
//     });
// });
// containers.forEach(container => {
//     container.addEventListener("dragover", e => {
//         e.preventDefault();
//         const draggable = document.querySelector(".dragging");
//         container.appendChild(draggable);
//     });
// });


// let checkList = document.querySelector('.item-list'); 
// checkList.addEventListener('click', event => {
//       if (event.target.tagName === 'LI') {
//         // event.target.style.color ="red"; -> 빨강으로변경 : 선택한컬러로변경하기? 각 색상별로 토글만들고 토글로구현?
//          event.target.classList.toggle('checked');
//   }
// });


//투두 모달창 구현
let todoModal = document.getElementById("todo-modal");
let todoModalBtn = document.querySelector(".item-list");
let setColorList;
todoModalBtn.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if(e.target.tagName !== "SPAN"){
        if (todoModal.style.display == "flex"){
            todoModal.style.display = "none";
        }else{
            setColorList = e.target;
            todoModal.style.display = "flex";
        }
    }
})
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
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="lightgray";
    todoModal.style.display = "none";
    }
})
let todoRedBtn = document.getElementById("red")
todoRedBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="red";
    todoModal.style.display = "none";
    }
})
let todoBlueBtn = document.getElementById("blue")
todoBlueBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="blue";
    todoModal.style.display = "none";
    }
})
let todoGreenBtn = document.getElementById("green")
todoGreenBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="green";
    todoModal.style.display = "none";
    }
})
// 
let todoPutpleBtn = document.getElementById("purple")
todoPutpleBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="purple";
    todoModal.style.display = "none";
    }
})
let todoOrangeBtn = document.getElementById("orange")
todoOrangeBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="orange";
    todoModal.style.display = "none";
    }
})
let todoPinkBtn = document.getElementById("pink")
todoPinkBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="pink";
    todoModal.style.display = "none";
    }
})
let todoTomatoBtn = document.getElementById("tomato")
todoTomatoBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="tomato";
    todoModal.style.display = "none";
    }
})
let todoNavyBtn = document.getElementById("navy")
todoNavyBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    setColorList.style.color="navy";
    todoModal.style.display = "none";
    }
})




// 낫투두
let ntdItemList = [];

let ntdInputButton = document.querySelector(".ntd-input-button");
ntdInputButton.addEventListener("click", ntdAddItem);

function ntdAddItem() {
    let ntdItem = document.querySelector(".ntd-input-text").value;
    if(ntdItem.length !== 0 ){
        ntdItemList.push(ntdItem);
        document.querySelector(".ntd-input-text").value = "";
        document.querySelector(".ntd-input-text").focus();
    }
    ntdShowList();
}

function ntdShowList(){
    let ntdList = "<ol>"
    for (let i = 0; i < ntdItemList.length; i++){
        ntdList += "<li>" + "<span class='ntd-list-drag' id=" + i + ">" + " ⇵ " + "</span>"
                       + ntdItemList[i]
                       + "<span class='ntd-list-delete' id=" + i + ">" + " ✖ " + "</span>"
                       + "</li>";
    } 

    ntdList += "</ol>";
    document.querySelector(".ntd-item-list").innerHTML = ntdList;

    let ntdDeleteButtons = document.querySelectorAll(".ntd-list-delete");
    for (let i = 0; i < ntdDeleteButtons.length; i++) {
        ntdDeleteButtons[i].addEventListener("click", ntdDeleteItem);
    }
   
}

function ntdDeleteItem() {
    let ntdId = this.getAttribute("id");
    ntdItemList.splice(ntdId, 1);
    ntdShowList();
}

// let ntdCheckList = document.querySelector('.ntd-item-list'); 
// ntdCheckList.addEventListener('click', event => {
//       if (event.target.tagName === 'LI') {
//          event.target.classList.toggle('checked');
//   }
// });

//낫투두 모달창 구현
let notTodoModal = document.getElementById("not-todo-modal");
let notTodoModalBtn = document.querySelector(".ntd-item-list");
let ntdSetColorList;
notTodoModalBtn.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if(e.target.tagName !== "SPAN"){
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
    if (e.target.tagName === 'BUTTON') {
    ntdSetColorList.style.color="lightgray";
    notTodoModal.style.display = "none";
    }
})
let notTodoRedBtn = document.getElementById("ntdRed")
notTodoRedBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    ntdSetColorList.style.color="red";
    notTodoModal.style.display = "none";
    }
})

let notTodoGreenBtn = document.getElementById("ntdGreen")
notTodoGreenBtn.addEventListener("click", e => {
    if (e.target.tagName === 'BUTTON') {
    ntdSetColorList.style.color="green";
    notTodoModal.style.display = "none";
    }
})
//낫투두 작동완료
//뮤직플레이어
let music1 = new Audio('POMOTODO audio/Rain On Rooftop.mp3');
let music2 = new Audio('POMOTODO audio/Thunderstorm .mp3');
let music3 = new Audio('POMOTODO audio/Jungle Atmosphere Morning.mp3');
let music4 = new Audio('POMOTODO audio/Jungle Atmosphere Late Night.mp3');
let music5 = new Audio('POMOTODO audio/Carnival Atmosphere.mp3');
// let music6 = new Audio('POMOTODO audio/The Boy Got Skills - Max McFerren.mp3');
let check = document.getElementById("select-music");
let start = document.getElementById("start-button");
let pause = document.querySelectorAll("start-music playing")
start.addEventListener("click", function(){
    // audio1.play();
    // console.log(check.value);
    switch(check.value){
        case 'music1':
            if(music1.paused) music1.play();
            else music1.pause();
            start.classList.toggle('playing')
            break;
        case 'music2':
            if(music2.paused) music2.play();
            else music2.pause();
            break;
        case 'music3':
            if(music3.paused) music3.play();
            else music3.pause();
            break;
        case 'music4':
            if(music4.paused) music4.play();
            else music4.pause();
            break;
        case 'music5':
            if(music5.paused) music5.play();
            else music5.pause();
            break;
    }
// pause.addEventListener("click", ()=>{
//     alert('pause');
// })
});

