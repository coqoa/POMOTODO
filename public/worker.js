

self.onmessage = function(e){
    // 수행할코드 
    // if(e.data == 'worker 송신'){
    //     postMessage('worker 수신완료');
    // }
    // console.log(e.data)
    let seconds = e.data;
    let intervalID = setInterval(operateTimer, 1000);
    function operateTimer(){
        seconds--;
        postMessage(seconds);
    }
    // loop();
}
// function loop() {

//     // 1씩 증가시켜서 전달
//     postMessage( ++i ); 

//     // 1초뒤에 다시 실행
//     setTimeout( function() {
//         loop();
//     }, 1000 );

// }