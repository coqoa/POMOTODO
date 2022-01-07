let intervalID;

self.onmessage = function(e){
    if(typeof(e.data) == 'number'){
        let seconds = e.data;
        intervalID = setInterval(operateTimer, 1000);
        function operateTimer(){
            seconds--;
            postMessage(seconds);
            if(seconds == "0"){
                clearInterval(intervalID);
            }
        }
    }else if(e.data == 'stop'){
        clearInterval(intervalID);
        postMessage('stop worker method');
    }
}