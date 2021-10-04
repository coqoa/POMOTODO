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