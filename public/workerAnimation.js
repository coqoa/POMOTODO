
let timeAnimation;
let t=100;
self.onmessage = function(e){
    if(typeof(e.data) == 'number'){
        // 애니메이션 관련
        timeAnimation = setInterval(draw, e.data);
        function draw(){
            if(t>0){
                t -= 0.1;
                postMessage(t);
            }else if(t < 0){
                clearInterval(timeAnimation)
                t=100;
            }
        }
    }else if(e.data == 'stop'){
        // console.log('스탑메소드');
        clearInterval(timeAnimation);
        t=100;
        postMessage('stop worker-animation method');
    }
}
