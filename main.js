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


buttonStart.onclick = function(){ //Start
    clearInterval(intervalID) 
    intervalID = setInterval(operateTimer, 1000)

}

buttonPause.onclick = function(){ //Pause 
    clearInterval(intervalID) 
}

buttonStop.onclick = function(){ //Stop
    clearInterval(intervalID) 
    minutes = 0; seconds = 0;
    appendMinutes.textContent = "00"
    appendSeconds.textContent = "00"
}

function operateTimer(){ //1초씩 감소시키기
        if(minutes<10)
            appendMinutes.textContent="0"+minutes;
        seconds--; 
        appendSeconds.textContent = seconds;
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
        if(minutes === 0 && seconds >= 0){
            clearInterval(intervalID) 
            minutes = 0; seconds = 0;
            appendMinutes.textContent = "00"
            appendSeconds.textContent = "00"
        }
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
            appendMinutes.textContent="0"+minutes
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
let modal = document.getElementById("modal")
let btnModal = document.getElementById("mail-btn")
btnModal.addEventListener("click", e => { // 누르면 모달창 생성, 한번 더 누르면 모달창 종료
    if (modal.style.display == "flex"){
        modal.style.display = "none"
    }else{
        modal.style.display = "flex"
    }
})
let closeBtn = modal.querySelector(".close-area") //X버튼 눌러서 모달창 종료
closeBtn.addEventListener("click", e => {
    modal.style.display = "none"
})
window.addEventListener("keyup", e => { //esc키 눌렀을 때 모달창 종료
    if(modal.style.display === "flex" && e.key === "Escape") {
        modal.style.display = "none"
    }
})
//
//투두
let itemList = [];
let inputButton = document.querySelector(".input__button");
inputButton.addEventListener("click", addItem);

function addItem() {
    let item = document.querySelector(".input-text").value;
    if(item != null){
        itemList.push(item);
        document.querySelector(".input-text").value = " ";
        document.querySelector(".input-text").focus;
    }
    showList();
}


// 

function showList(){
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++){
        list += "<li>" + "<span class='list-drag' id=" + i + ">" + " ⬍ " + "</span>"
                       + itemList[i] 
                       + "<span class='list-check' id=" + i + ">" + " ✔ " + "</span>" 
                       + "<span class='list-delete' id=" + i + ">" + " ✖ " + "</span>"
                       + "</li>";
    } // 이동, 체크, 삭제버튼 여기서 생기도록 구현하고 아래에 작동 구현하기 + css로 꾸미기 + 기존에것들 지우기?

// 
    list += "</ul>";
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
