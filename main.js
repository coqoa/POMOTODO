const fins = timer.querySelector('#fins');
const endTime = 40; /*현재 60이 되면 게이지가 없는것으로 세팅 되어 있음 , 0이면 풀*/

 for (let min=0; min<endTime; min++) {
   for (let sec=0; sec<60; sec++) {
     const remainFin = document.createElement('div');
     remainFin.classList.add('fin');

    //  const deg = -(min*6+sec*0.1);
     const deg = min*6+sec*0.1;
     remainFin.style.transform = `rotate(${-deg}deg)`

     fins.append(remainFin);
   }
 }

//  실행코드???
// 디자인 말고 시간만 줄어드는 가운데부분 구현하기? -타이머-