
let timeAnimation;
let t=0;
self.onmessage = function(e){
        // 애니메이션 관련
        timeAnimation = setInterval(draw, e.data);
        function draw(){
            if(t<1000){
                t++;
                postMessage('t');
            }else if(t == 1000){
                clearInterval(timeAnimation)
                t=0;
            }
        }
}
