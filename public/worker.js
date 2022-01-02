let intervalID;

self.onmessage = function(e){
    // 수행할코드 
    // if(e.data == 'worker 송신'){
    //     postMessage('worker 수신완료');
    // }
    // console.log(typeof(e.data) == 'number');
    if(typeof(e.data) == 'number'){
        let seconds = e.data;
        intervalID = setInterval(operateTimer, 1000);
        function operateTimer(){
            seconds--;
            postMessage(seconds);
            if(seconds == "0"){
                clearInterval(intervalID);
                // 어떻게 초기값으로 돌리지? -> 본문에서도 clearInterval 수행하도록
                // 이제 애니메이션 손봐야됨
            }
        }
    }else if(e.data == 'stop'){
        // console.log('스탑메소드');
        clearInterval(intervalID);
        postMessage('stop worker method');
    }
}