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
    let list = "<ol>"
    for (let i = 0; i < itemList.length; i++){
        list += "<li>" + "<span class='list-drag' id=" + i + ">" + " ⇵ " + "</span>"
                       + itemList[i]
                    //    + "<span class='list-content' id=" + i + ">" + itemList[i] + "</span>" 
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

let checkList = document.querySelector('.item-list'); 
checkList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        console.log("td-LI")
         event.target.classList.toggle('checked');
  }
});


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

let ntdCheckList = document.querySelector('.ntd-item-list'); 
ntdCheckList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
          console.log("ntd-LI")
         event.target.classList.toggle('checked');
  }
});
//낫투두 작동완료

