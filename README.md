<img width="1440" alt="스크린샷 2021-12-31 오후 6 31 10" src="https://user-images.githubusercontent.com/81023768/147815368-b5ed5144-d747-480b-bb5c-88b7b5c7d4ff.png">

---
### 🔥 개발정보
<details>
<summary> click  </summary>  

#### 📝 언어  
- <b>HTML</b> 
- <b>CSS</b> 
- <b>Java Script</b>  

</br>

#### ☁ 클라우드 서버 (AWS)
- <b>EC2 Ubuntu</b>  
- <b>Route 53</b>  
- <b>ACM</b>  
- <b>ELB</b>  

</br>

#### 🖥 런타임환경 (NodeJS)  
- <b>NodeJS 모듈</b>  
  - body-parser  
  - connect-flash  
  - ejs  
  - express  
  - express-session  
  - mongodb  
  - passport  
  - passport-local  
  - pbkdf2-password  

#### 💾  데이터베이스 (MongoDB)  

</br>

#### 📅 개발기간
2021.08.28 ~ 2022.01.10

</br>

#### 👁 DB설계 시각화  

![스크린샷 2022-01-11 오전 2 04 11](https://user-images.githubusercontent.com/81023768/148807312-a837c5bc-81f8-4c09-b44e-bf0f1d6ea52a.png)


---

</br>


 ### 💡 내가 필요로 하는 웹 애플리케이션을 만들자 💡 
 
 </br>
 
 ##### 🤔 내가 만들고자 하는 프로그램은? 
- 공부를 좀 더 효율적으로 하기 위해 매시간 체크하는 <b>pomodoro 타이머</b>
- 명확한 목표를 설정하기 위한 <b>TodoList</b>
- 나의 안 좋은 습관을 체크하고 고치기 위한 <b>Not TodoList</b>
- 집중하는 데 도움이 되는 <b>생활 소음</b>
- '나'를 객관적으로 판단하기 위해 체크할 <b>과거 기록</b> 
 
</br>

##### 😪 시장에 있는 기존 프로그램들을 사용해 보고 불편했던 점
- 맘에 들지 않는 디자인
  - 디자인과 기능 및 사용성을 모두 동시에 만족시키는 애플리케이션이 없었음

##### 🧐 개선했으면 하는 점
- 포모도로시간을 자동으로 기입해서 그 시간에 어떤 걸 했는지 한눈에 보고 싶었음
- 투 두 리스트 / 낫 투 두 리스트의 `작성`, `수정`, `삭제` 기능이 직관적이었으면 좋겠음
- 마우스와 키보드의 멀티태스킹이 너무 잦아서 불편했음

##### 😱 지원하지 않는 기능으로 인해 발생하는 문제점
- 여러 개의 창을 띄우고 공부해야 하는 상황에서 사소한 문제들로 인해 집중이 흐트러지는 경험을 했음
- 포모도로 타이머와 메모를 동시에 지원하지 않아서 기능마다 각기 다른 프로그램을 사용해야 했음
- 투 두 리스트 / 낫 투 두 리스트의 리스트를 범주에 따라 그룹화 / 시각화할 수 있는 기능이 부족했음
- 생활 소음을 듣기 위해 유튜브를 사용하면 광고 시청 또는 영상 길이 문제 등 공부의 흐름을 방해하는 요소가 많음

</br>

### 🌟 POMOTODO를 이용한 일정 관리 방법들을 실물로 사용하는 것보다 확연히 좋은점이 있어야한다 🌟  
  
  </br>
  
#####  공책보다 웹 애플리케이션이 좋은이유  
- 작성, 수정, 삭제가 자유롭다
- 자동화를 통해서 시간이 절약되며 집중하기 좋은 여건을 만들어줌  

##### 모바일 어플리케이션보다 웹 어플리케이션이 좋은 이유
- 휴대폰으로 공부하는사람보다 노트북이나 데스크탑으로 공부하는 사람이 월등히 많다   
  - 디바이스를 통일해서 공부에 필요한 준비를 줄일 수 있음 

</br>
    
 ### 🔥 이것들을 한데 묶어 관리 및 사용할 수 있는 웹애플리케이션을 만들자 ! 🔥 

매일 직접 사용하고 있는 프로그램들이기에 내 결과물을 사용자의 시선에서 좀 더 객관적으로 평가할 수 있고,  
내가 만든 서비스를 통해 내역을 남긴다면 앞으로 공부를 지속하는데 많은 도움이 될 것이라고 생각함  

</br>

---

### 왜 이렇게 개발을 했나?

   
#### 💡 기능 💡 
- <b>포모도로 타이머</b>  
  - 포모도로 타이머를 깜빡하고 시작하지 않거나, 시간 기록을 하지 않으면 흐름이 끊어지기 쉽고, 의욕 저하의 원인이 된다
    - 위와 같은 실수를 방지하기 위해 자동화 (시간 자동 입력 + 텍스트 입력창 생성) 했다    

- <b>투두 리스트 / 낫 투두 리스트</b>

  - 투 두 리스트 / 낫 투 두 리스트는 시각화, 그룹화, 수정이 굉장히 빈번하게 발생하는 프로그램이다 
    - 자유롭게 리스트를 추가, 삭제, 드래그&드롭, 색상 변경할 수 있게 하여 그룹화 / 시각화 기능을 구현함으로써
    - 노트보다 사용성이 훨씬 좋은 웹 애플리케이션을 만들고자 했다. 

- <b>과거 기록</b>
  - 과거 기록을 통해 '나'를 객관적으로 볼 수 있다 
    - 기록 확인을 통해 객관적으로 '나'를 판단할 수 있고, 뿌듯함, 자신감,
      지속할 수 있는 에너지 같은 작은 보상들을 얻을 수 있다

- <b>오디오 프로그램</b>

  - 외부 프로그램을 사용하지 않고 하나로 통일해서 준비 시간을 줄일 수 있다
  - 7가지 생활 소음을 제공하여 선택의 폭을 넓혔다

- <b>확장프로그램</b>
  - POMOTODO를 기본 화면으로 설정한다  
    - 왜? 일정관리프로그램은 자주 볼수록 경각심을 불러일으키기 때문에.  
  
</br>

#### ✋ 확장 프로그램을 사용함으로 인해 발생하는 문제점을 해결하기 위해 어떻게 했나? 🤚 
  
  </br>

- ___사용자들이 새 탭 버튼을 사용하는 이유___  

  - <b>검색</b>을 하기 위해서    

- ___그런데 새 탭 버튼을 통해 POMOTODO가 뜬다면 ?___  

  - 검색을 위해 address bar를 직접 클릭하거나 즐겨찾기를 눌러서 페이지를 옮기는 등
    <u>사소하지만 굉장히 귀찮은 작업</u>을 해야 하고 이로 인해 사용자의 의도를 방해하는 <b>불편함</b>을 주게 된다
    
    - 사용자의 입장에서 키보드에 있던 오른손을 마우스로 옮겼다가 타이핑을 하기 위해
      다시 키보드로 가져오는 일은 아주아주아주 귀찮은 일이다
  
- ___그래서 어떻게 해결?___  
  - <b>구글 검색창</b>을 구현
    - <b>shift + tab</b> ```단축키```를 통해 구글 검색창 -> adress bar로 포커스를 이동  
    - 검색창이 POMOTODO를 사용하는 데는 방해가 되므로 검색창 외부를 클릭하면 사라지도록 했다.    
    - <b>shift+enter</b> ```단축키```로 POMOTODO 어디서든 검색을 위해 마우스를 사용할 필요가 없게 했다   

</br>

#### 💡 디자인 💡  
- <b>통일성 있는 디자인 (레이아웃, 폰트, 아이콘, 컬러 등등)</b>  

  - <b>레이아웃</b>  
    - 전체 레이아웃은 부드러운 느낌의 뉴모피즘 디자인을 적용해서 눈이 편하도록 했으며,  
      모달창이나 생성되는 리스트들은 글래스모피즘 디자인을 적용해서 시각적으로 차별화했다 
    - 비슷한 톤의 컬러를 사용해서 각 디자인 기법들이 조화롭도록 디자인했다

  - <b>폰트</b>  
    - 곡선과 직선이 균형 잡힌 `IBM Plex Sans KR 폰트`를 기본으로 사용하고,  
      영문은 개성을 주기위해 `ubuntu 폰트`를 사용했다  
    - 각 폰트의 역할마다 두께를 달리했다  
 
 
  - <b>아이콘</b>  
    - [폰트어썸](https://fontawesome.com/)의 웹폰트아이콘을 기본으로 사용해서 전체적인 통일감을 줬고,  
      [플래티콘](flaticon.com/)의 아이콘은 포인트를 줄 때 사용했다
 
  - <b>컬러</b>  
    - 디자인에서 사용된 베이스 컬러와 어울리도록 채도가 톤 다운된 색상들을 사용했다


#### 💡 UX/UI 💡

- <b>디자인에 맞게 버튼 구분</b>  
  - <b>뉴모피즘 버튼</b>  
      - 입체적인 뉴모피즘 디자인의 장점을 부각시키기 위해 그림자를 통해 눌리는 느낌 표현했다  
    
  - <b>일반 버튼</b>  
      - 모든 버튼에 뉴모피즘 디자인을 적용하면 오히려 촌스럽고 사용성이 안 좋기 때문에  
        일반 버튼은 레이아웃 없이 텍스트나 아이콘으로만 만들었고,  
        hover, active 등의 이벤트가 발생할 때 버튼의 색상을 변화시켜 버튼임을 알 수 있도록 했다  
       
  
- <b> 버튼 위치</b>
  - <b>홈버튼</b>  
    - UX를 위한 홈 버튼(좌측상단) & UI를 위한 홈버튼(네비게이션 바)  
      - 같은 버튼이라도 사용자의 경험, 디자인에 따라 다른 위치에 버튼이 필요한 경우가 있다  
        홈으로 가려면 웹 애플리케이션의 이름을 클릭하는 게 대부분이기 때문에 좌측 상단에 홈버튼이 있어야 하고,  
        홈과 기록을 왔다 갔다 하기 위해서 네비게이션 바를 사용하기 때문에 중앙 상단에도 홈버튼이 존재해야 한다.
  - <b>로그인버튼</b>  
    - 우측상단
      - 다른 웹 서비스들을 이용했을 때 <b>내가 익숙했던 위치</b>를 생각해 본 뒤 로그인을 위한 버튼을 배치했다. 
 
- <b>효과음</b>  
  - 타이머 시작과 종료시 서로 상반되는 효과음을 출력한다   

- <b>사용자의 불편을 미리 예상해서 해결책 구현</b>
  - <b>검색창</b>
    - 접속시 자동생성 & 포커스
    - 주소창으로 가기 편하게 하기 위한 구조화 [단축키 설명 & 주소창을 좀 더 명시적으로 ??]
    - 외부 클릭시 숨기기
    - 숨김 상태에서 마우스 없이 검색할 수 있도록 단축키(shift+enter)
  - <b>모달창</b>
    -  외부를 클릭하면 모달창이 닫히도록 


</br>

#### 💡 배포 💡 

- 단순 웹사이트뿐 아니라 크롬 확장 프로그램을 통해 제공해서 리뷰를 쓸 수 있고, 더욱 편하게 사용할 수 있도록 했다

</br>

---

### ✍️ 개발하면서 공부한 것 

</br>

##### 💡 회원가입 유효성검사 및 예외처리 💡 

https://coqoa.tistory.com/110

</br>

##### 💡 ejs템플릿 include  💡 

https://coqoa.tistory.com/111

</br>

##### 💡 DB 💡 

https://coqoa.tistory.com/114

</br>

##### 💡 암호화 💡 

https://coqoa.tistory.com/113

</br>

##### 💡 session / passport / serialize / deserialize 💡 

https://coqoa.tistory.com/112

</br>

##### 💡 jquery - ajax, sortable 💡 

https://coqoa.tistory.com/115

</br>

##### 💡 ubuntu 포트포워딩, AWS 도메인연결하기 💡 

https://coqoa.tistory.com/120

</br>

##### 💡 POMOTODO : 크롬 확장프로그램 배포 💡 

https://coqoa.tistory.com/125

</br>

---

### 😱 발생한 이슈 😱

</br>

 💡 jquery sortable 범위인식 문제 💡 

https://coqoa.tistory.com/116

</br>

 💡 jquery ui touch punch 무반응 💡 

https://coqoa.tistory.com/117

</br>

💡 웹워커사용 💡 

https://coqoa.tistory.com/118

</br>

💡 db조회 및 출력시 발생하는 병목현상 💡  

https://coqoa.tistory.com/119

</br>

💡 로컬에서는 잘 작동하는데 도메인에서 안됨 💡 

https://coqoa.tistory.com/121

</br>

💡 502 Bad Gateway 💡 

https://coqoa.tistory.com/122

</br>

💡 조건에 따른 홈페이지 새로고침 💡  

https://coqoa.tistory.com/124

</br>

💡 신규가입계정 502 bad gateway issue 💡  

https://coqoa.tistory.com/126

</br>

---

## 🌈 끝내며.. 


처음 프로젝트를 시작하면서 내가 할 수 있을까 하는 걱정이 가장 앞섰다.  
모든 생각을 적으려면 너무 길어지기 때문에 몇 가지로 나눠서 설명하려 한다.  

### 💡 느낀점  

##### 1. 처음에는 가장 간단한 기능부터  
시작하기 전부터 먼 미래의 일까지 생각하니까 너무 막막해서 손도 못 대는 경우가 많았다.  
작은 단위로 기능을 쪼개서 필수 기능/부가 기능을 나누고 가장 간단한 일부터 시작해서 부담감이나 막막함을 줄일 수 있었고,  
어떻게 시작해야 할지 순서를 정할 수 있었다.  
일단은 현재 내 수준에서 해결할 수 있는 최선의 방법을 사용해서 구현하고, 추후에 업그레이드하면 된다고 생각한다.  

##### 2. 개발은 레고 만들기와 비슷하다 언제든 무너뜨리고 다시 만들어야 하는 상황이 올 수 있다
현재 내 수준에 맞는 코드로 작성해서 퀄리티가 떨어지거나, 아예 구현을 못해서 개발 외적인 해결법으로 우회하기도 했지만,  
시간이 지난 뒤에 보니깐 충분히 더 직관적이고 (사람이 보기에도, 컴퓨터가 보기에도), 리소스를 절약할 수 있는 방법이 보였다.  
(예를 들어 DB를 처음 다루다 보니 어떤 식으로 데이터를 주고받고 해야 하는지 처음에는 어려웠지만 여러 가지 이슈를 해결하는 과정에 좀 더 직관적이고 간단하게 변경할 수 있었다.)  
첫 기획은 완벽할 수 없고 기획이 바뀔 수 있다, 그럼 거기에 맞춰서 가장 좋은 해결법을 적용하면 된다고 생각한다.  

##### 3. 개발보다 중요한 것은 유지 보수  
유지 보수를 하려면 사용자의 다양한 의견이 필요하고 많은 사용자가 필요하다.  
단순 개발하는 걸로 그치는 게 아닌 실제 서비스를 만들려면 마케팅도 염두에 두고 기획을 해야 했는가,  
개발자가 사용자의 입장에서 생각해 보고 서비스를 제공할 수 있는가, 개발 외적인 부분에서 더 챙길 것은 없는가,  
유지 보수하기 편하게 개발했는가 등등의 질문을 스스로 던져볼 수 있는 시야를 가지게 될 수 있었다.  

##### 4. 어려운 것은 그때그때 진행 상황에 따라 다르다
처음엔 이 언어는 어떻게 공부할지?, 프로젝트를 어떻게 시작할지, 의미가 담긴 코드를 작성할 수 있을지 감이 안 잡혀서 어려웠고,  
개발이 조금 진행된 후엔 앞에 작성한 코드와 어떻게 잘 연결하고, 예외 처리는 어떻게 할지가 어려웠다.  
개발 막바지엔 어떤 로직으로 코드를 작성하면 서버나 db에 덜 부담스러운 코드를 작성할 수 있을지, 사용자 친화적인 ux/ui란 뭘까?라는 고민이 생겼고,  
이런 고민들이 이번 프로젝트를 다 만들고 나니 이제는 어느 정도 해결법을 찾아갈 수 있게 된 것 같다.  


### 😃 잘한 것 

##### 1. 서비스를 처음부터 끝까지 만들어 본 것
서비스를 처음부터 끝까지 만들어봐야 내가 작성하는 코드가 어디서 어떻게 사용되고 어떻게 보완해야 더 좋을지에 대해서 알 수 있을 거라고 판단했다.  
동일한 언어를 사용할 수 있는 환경을 만들기 위해 node.js를 선택했고 이를 통해 언어 공부에 시간을 절약할 수 있었으며 언어의 다양한 사용법을 알 수 있었다.  
클라우드 컴퓨터를 사용해 보고 싶어서 AWS를 선택해서 EC2, ROUTE53, ACM, ELB, target group 등 다양한 기능을 사용해 보거나 개념을 익힐 수 있었고,  
개발의 편의성을 위해 jQuery, ejs 템플릿을 써볼 수 있었다.  
서비스를 처음부터 끝까지 만듦으로써 어떤 이슈가 발생했을 때 어디서 발생한 이슈인지 판단할 수 있었고 어떻게 처리하는 게 가장 좋을지에 대해서 고민해 볼 수 있었다.  
서비스를 완성함으로써 공부를 위한 개발이 아니라 개발을 위한 공부를 할 수 있었고 보다 넓은 시야를 조금이나마 가질 수 있었다고 생각한다.  

##### 2. 나를 객관화할 수 있는 서비스를 만든 것
느낀 점 3번에서 이어지는 얘기인데 첫 프로젝트라서 마케팅을 생각하지 못하고 개발하기 시작했다.  
사용자의 유입을 기다리는 것보다 나 자신이 쓰기 위한 서비스를 만들자고 생각했고,  
사용자로서 내 프로젝트를 접했기 때문에 다양한 불편함을 마주했고 수정/배포할 수 있었다.  

##### 3. 혼자 해결할 수 있는 루틴을 만든 것
처음에는 이슈가 발생하면 원인을 알 수가 없어서 답답하고 힘들었다.  
하지만 해결하기 위해 코드를 뜯어본다던가, 공책 하나 펴놓고 생각나는 대로 적어서 리스트 업 한 뒤 시도해 보고 틀린 방법이면 지워나감으로써 해결을 위한 길을 만들 수 있었다.  
내가 만든 루틴은 다음과 같다.  

- 기능 개발
1. 만들고자 하는 것 추상화하기
2. 필수 기능과 부가기능 나누고 부가기능도 중요도에 따라 순번 매기기
3. 필수 기능을 가장 간단한 수준으로 개발하기
4. 부가기능 순서대로 살붙이기

- 이슈 발생
1. 문제 인식
2. 문제의 원인 파악
3. 해결 방법 고민하는 시간 가지고 리스트 업하기
4. 하나씩 시도해 보고 틀린 방법이면 지워나가기를 통해 다음부터 확인 안 해도 되도록 표시하기

##### 루틴을 통해 얻은 장점은 다음과 같다 
- 심적으로 이슈에 접근하기 쉬워졌다
- 어떤 문제든 해결 방법은 있다는 자신감도 생겼다
- 개발하기 위해 필요한 검색어가 명확해졌고 공부하는데 시간도 단축할 수 있었다





### 🥲 아쉬운 것

- 웹 개발이 처음이라 처음 작성한 코드와 마지막에 작성한 코드의 퀄리티가 차이 난다.
- 이슈 발생으로 인해 코드 수정 시 다른 코드에 문제가 생기지 않을지 체크하기 어려웠다.
- 사용자를 단기간에 모을 수 없어서 내가 쓸 프로그램을 만들었지만 어떻게 홍보할지 감이 안 잡혀서 아쉽다


### 🤔 아쉬운점 보완

- 기획 단계에서 마케팅도 고려하기  
(도메인 선점, 시장조사 및 경쟁사 조사, 로직 구상 등 미리 구상해 보기)
- 코드 작성
  - 의미 있고 좀 더 자세한 변수명 사용하기
  - 흐름을 생각하고 코드 작성하기
  - 함수 하나에 하나의 기능만 하도록
  - 비슷한 기능의 코드는 함수화하고 매개변수로 컨트롤하기
  - css도 비슷한 코드는 묶어서 관리하고 개별적인 디자인은 각각 적용
  - 컬러 변수, 언어 변수 등 변수를 통해 유지 보수하기 좋도록 작성하기


#### 👏 첫 프로젝트라서 무작정 시작했지만 다음부터는 단점을 보완해서 더 좋은 서비스를 만들도록 노력해야겠다 👏


## 


</div>
</details>

---


### ![tomato(0)](https://user-images.githubusercontent.com/81023768/149079377-6413424b-919b-4dba-bf49-fabf0843150c.png) What is POMOTODO ? (ENG) 
<details>
<summary> click  </summary>

# ![tomato(1)](https://user-images.githubusercontent.com/81023768/147905737-86695e69-1b87-4676-a723-8c2fd58ee7a4.png)	What is POMOTODO ?
<b>POMOTODO</b> is a web application that combines various functions specialized in schedule management.

<b>The function of POMOTODO.</b>
 1. Google search.
 2. Pomodoro timer.
 3. TO-DO-list.
 4. Not-to-do-list.
 5. Visualize past records.
 6. Living noise that helps you concentrate.
 7. Chrome expansion program.

</br>

### 1. Google search.
<img width="502" alt="스크린샷 2021-12-31 오후 5 13 18" src="https://user-images.githubusercontent.com/81023768/147815216-09a64e39-d038-4d93-a346-b60eca0e2b07.png">

- You can google search it without having to go to another page.
- You can go to the browser address bar through <b>shift+tab</b>```shortening key``` while focused on the search box. 
- If you click outside the search box, the search box closes.  
  You can open the search box at any time through <b>'shift + center'</b> ```shortening key```


</br>

### 2. Pomodoro timer.
<img width="400" alt="스크린샷 2021-12-31 오후 5 12 23" src="https://user-images.githubusercontent.com/81023768/147815637-0de043d3-ce88-4093-ba38-1644739c0b53.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 55 59" src="https://user-images.githubusercontent.com/81023768/147815665-f45d31b7-578d-40a2-839c-c1bb6bcb5e08.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 59 05" src="https://user-images.githubusercontent.com/81023768/147815660-ee4b9644-5859-42de-8506-518c95559a07.png">

- When the Pomodoro timer is played, it alternately shows the working time/rest time.
- When the timer ends, the ```time``` and ```Text input space``` are automatically generated.  
  - You can write simple text through the ```Text input space```

</br> 
 
### 3. TO-DO-list.  
- Enter TO-DO-list.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 33 02" src="https://user-images.githubusercontent.com/81023768/147815859-98a9d889-516c-4bfa-9528-e766ade97c4c.png">   

- Color change.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 33 34" src="https://user-images.githubusercontent.com/81023768/147815856-89b52b38-0af9-40b8-9537-df9cb641a22c.png">  


- Change the location to drag & drop.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 33 53" src="https://user-images.githubusercontent.com/81023768/147815853-d1a5398b-f68d-4402-84bf-2742d63eec05.png">  


- Completed mark/aligned.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 34 19" src="https://user-images.githubusercontent.com/81023768/147815849-a05b3533-f6f4-4fc3-997a-b0b9a367f9b7.png">  

- Delete.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 34 41" src="https://user-images.githubusercontent.com/81023768/147815844-01e9c35c-9ea2-43af-80ca-c5f66830f820.png">  

- This is a list where you can write down what You have to do today.
  - You can move through the ```drag button```    
  - You can change the color by clicking ```list```  
  - You can delete the list through the ```delete button```  

</br> 
 
### 4. NOT-To-Do-list.
<img width="400" alt="스크린샷 2021-12-31 오후 5 36 06" src="https://user-images.githubusercontent.com/81023768/147816158-4cd7d5d1-9798-4e52-97be-bcc128dbe7c2.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 36 18" src="https://user-images.githubusercontent.com/81023768/147816156-df9d04cc-82b5-42e4-b0a3-ae6fee4575ad.png">

- This is a list where you can write what you shouldn't do today.    
  - It functions like TO-DO-list.  


</br> 
 
### 5. Visualize past records.
<img width="600" alt="스크린샷 2021-12-31 오후 5 37 37" src="https://user-images.githubusercontent.com/81023768/147816202-80b5ecd4-182a-47e3-bb1b-60406ceac159.png">

- Check the completed Pomodoro timer and mark it with color and text on the calendar.
- It shows the TO-DO-list and NOT-TO-DO-list of the date.
- look up DB and show you past records.

</br> 
 
### 6. Living noise that helps you concentrate.  

- Playing audio files and pausing.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 32 28" src="https://user-images.githubusercontent.com/81023768/147816227-0380a92b-f577-4591-b9eb-89c697b5e068.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 32 48" src="https://user-images.githubusercontent.com/81023768/147816222-71f2c3be-57db-4dcf-a3f6-e6227bca2900.png">  

- Audio file list.  
<img width="400" alt="스크린샷 2021-12-31 오후 5 32 41" src="https://user-images.githubusercontent.com/81023768/147816224-3ced3d96-1fbd-4b52-a6e5-448a731c9733.png">


- You can play audio that living noise that helps you concentrate. 
  - You can select one of the 7 audio files and play it.

</br> 
 
### 7. Chrome expansion program.

https://chrome.google.com/webstore/detail/pomotodo/eiejppffpppelndcmldkpjleiojibopg?hl=ko. 

</details>

---


# ![tomato(1)](https://user-images.githubusercontent.com/81023768/147905737-86695e69-1b87-4676-a723-8c2fd58ee7a4.png)	What is POMOTODO ? 
#### POMOTODO는 일정 관리에 특화된 여러기능을 한데 묶은 웹애플리케이션입니다

#### POMOTODO의 기능
 ###### 1. 구글 검색
 ###### 2. 포모도로 타이머
 ###### 3. 투두 리스트
 ###### 4. 낫투두 리스트
 ###### 5. 과거 기록 시각화
 ###### 6. 집중에 도움이 되는 생활 소음
 ###### 7. 크롬 확장 프로그램

</br>

### 1.구글 검색창
<img width="502" alt="스크린샷 2021-12-31 오후 5 13 18" src="https://user-images.githubusercontent.com/81023768/147815216-09a64e39-d038-4d93-a346-b60eca0e2b07.png">

- 다른 페이지로 이동할 필요 없이 구글 검색을 할 수 있습니다  
- 검색창 외부를 클릭하면 검색창은 닫히고,  
  <b>`shift + enter`</b> ```단축키```를 통해 언제든 검색창을 열 수 있습니다  
- 검색창에 포커스 된 상태로 <b>shift+tab</b>```단축키```를 통해 주소 검색창으로 이동할 수 있습니다  

</br>

### 2. 포모도로 타이머
<img width="400" alt="스크린샷 2021-12-31 오후 5 12 23" src="https://user-images.githubusercontent.com/81023768/147815637-0de043d3-ce88-4093-ba38-1644739c0b53.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 55 59" src="https://user-images.githubusercontent.com/81023768/147815665-f45d31b7-578d-40a2-839c-c1bb6bcb5e08.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 59 05" src="https://user-images.githubusercontent.com/81023768/147815660-ee4b9644-5859-42de-8506-518c95559a07.png">

- 시간을 설정해서 <b>작업 시간 / 휴식 시간</b> 교차로 진행되는 포모도로 타이머입니다  
- 타이머가 종료되면 ```시간```과 ```입력창```이 자동으로 생성됩니다  
  - ```입력창```을 통해 간단한 텍스트를 작성할 수 있습니다  

</br> 
 
### 3. 투두리스트  
- 투두리스트 입력  
<img width="400" alt="스크린샷 2021-12-31 오후 5 33 02" src="https://user-images.githubusercontent.com/81023768/147815859-98a9d889-516c-4bfa-9528-e766ade97c4c.png">   

- 색상변경  
<img width="400" alt="스크린샷 2021-12-31 오후 5 33 34" src="https://user-images.githubusercontent.com/81023768/147815856-89b52b38-0af9-40b8-9537-df9cb641a22c.png">  


- 위치변경  
<img width="400" alt="스크린샷 2021-12-31 오후 5 33 53" src="https://user-images.githubusercontent.com/81023768/147815853-d1a5398b-f68d-4402-84bf-2742d63eec05.png">  


- 완료표시/정렬   
<img width="400" alt="스크린샷 2021-12-31 오후 5 34 19" src="https://user-images.githubusercontent.com/81023768/147815849-a05b3533-f6f4-4fc3-997a-b0b9a367f9b7.png">  

- 삭제  
<img width="400" alt="스크린샷 2021-12-31 오후 5 34 41" src="https://user-images.githubusercontent.com/81023768/147815844-01e9c35c-9ea2-43af-80ca-c5f66830f820.png">  

- 오늘 해야 할 일을 작성할 수 있는 투두리스트 입니다  
  - ```드래그버튼```을 통해 이동이 가능합니다  
  - ```리스트```를 클릭해서 색상을 변경할 수 있습니다  
  - ```삭제버튼```을 통해 리스트를 삭제할 수 있습니다  


</br> 
 
### 4. 낫투두리스트  
<img width="400" alt="스크린샷 2021-12-31 오후 5 36 06" src="https://user-images.githubusercontent.com/81023768/147816158-4cd7d5d1-9798-4e52-97be-bcc128dbe7c2.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 36 18" src="https://user-images.githubusercontent.com/81023768/147816156-df9d04cc-82b5-42e4-b0a3-ae6fee4575ad.png">

- 오늘 하지 말아야 할 일을 작성할 수 있는 낫투두리스트입니다.  
  - 투두리스트와 같은 기능을 합니다


</br> 
 
### 5. 과거 기록 시각화
<img width="600" alt="스크린샷 2021-12-31 오후 5 37 37" src="https://user-images.githubusercontent.com/81023768/147816202-80b5ecd4-182a-47e3-bb1b-60406ceac159.png">

  - 완료한 포모도로 타이머를 체크해서 달력에 색깔로 표시합니다
  - DB를 조회해서 과거의 기록을 보여줍니다

</br> 
 
### 6. 집중에 도움이 되는 생활 소음

- 오디오 파일 재생 및 일시정지  
<img width="400" alt="스크린샷 2021-12-31 오후 5 32 28" src="https://user-images.githubusercontent.com/81023768/147816227-0380a92b-f577-4591-b9eb-89c697b5e068.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 32 48" src="https://user-images.githubusercontent.com/81023768/147816222-71f2c3be-57db-4dcf-a3f6-e6227bca2900.png">  

- 오디오파일 리스트   
<img width="400" alt="스크린샷 2021-12-31 오후 5 32 41" src="https://user-images.githubusercontent.com/81023768/147816224-3ced3d96-1fbd-4b52-a6e5-448a731c9733.png">


- 집중에 도움이 되는 생활소음을 재생할 수 있습니다 
  - 총 7개의 오디오파일중 하나를 선택해서 재생 할 수 있습니다

</br> 
 
### 7. 크롬 확장 프로그램

https://chrome.google.com/webstore/detail/pomotodo/eiejppffpppelndcmldkpjleiojibopg?hl=ko

