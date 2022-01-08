<img width="1440" alt="스크린샷 2021-12-31 오후 6 31 10" src="https://user-images.githubusercontent.com/81023768/147815368-b5ed5144-d747-480b-bb5c-88b7b5c7d4ff.png">

---

<details>
<summary> 개발정보 🔥 </summary>  
 
### ⚙ 기술스택

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

---

</br>


 ### 💡 내가 필요로 하는 웹애플리케이션을 만들자 💡 
 
 </br>
 
 ##### 🤔 내가 만들고자 하는 프로그램은? 
 - 공부를 좀 더 효율적으로 하기 위해 매시간 체크하는 <b>pomodoro타이머</b>
  - 명확한 목표를 설정하기 위한 <b>TodoList</b>
  - 나의 안좋은 습관을 체크하고 고치기 위한 <b>Not TodoList</b>
  - 집중하는데 도움이 되는 <b>생활 소음</b>
  - '나'를 객관적으로 판단하기 위해 체크할 <b>과거 기록</b>  
 
</br>

##### 😪 시장에 있는 기존 프로그램들을 사용해보고 불편했던 점 
- 맘에들지 않는 디자인
  - 디자인과 기능 및 사용성을 모두 동시에 만족시키는 애플리케이션이 없었음  

##### 🧐 개선했으면 하는 점
- 포모도로시간을 자동으로 기입해서 그 시간에 어떤걸 했는지 한눈에 보고싶었음,  
- 투두리스트 / 낫투두리스트의 `작성`, `수정`, `삭제` 기능이 직관적이었으면 좋겟음,  
- 마우스와 키보드의 멀티태스킹이 너무 잦아서 불편했음  

##### 😱 지원하지 않는 기능으로 인해 발생하는 문제점
- 여러개의 창을 띄우고 공부해야하는 상황에서 사소한 문제들로 인해 집중이 흐트러지는 경험을 했음  
- 포모도로 타이머와 메모를 동시에 지원하지 않아서 기능마다 각기 다른 프로그램을 사용해야했음 
- 투두리스트 / 낫투두리스트의 리스트를 범주에 따라 그룹화 / 시각화할 수 있는 기능이 부족했음  
- 생활소음을 듣기위해 유튜브를 사용하면 광고시청 또는 영상 길이 문제 등 공부의 흐름을 방해하는 요소가 많음

</br>

#### 🌟 POMOTODO를 이용한 일정 관리 방법들을 실물로 사용하는 것보다 확연히 좋은점이 있어야한다 🌟  
  
  </br>
  
##### 🔸 공책보다 웹애플리케이션이 좋은이유  
- 작성, 수정, 삭제가 자유롭다
- 자동화를 통해서 시간이 절약되며 집중하기 좋은 여건을 만들어줌  

##### 🔹 휴대폰 어플리케이션보다 웹어플리케이션이 좋은 이유
- 휴대폰으로 공부하는사람보다 노트북이나 데스크탑으로 공부하는 사람이 월등히 많다   
  디바이스를 통일해서 공부에 필요한 준비를 줄일 수 있음 

</br>
    
 ### 🔥 이것들을 한데 묶어 관리 및 사용할 수 있는 웹애플리케이션을 만들자 ! 🔥 

 매일 직접 사용하고 있는 프로그램들이기에 내 결과물을 사용자의 시선에서 좀 더 객관적으로 평가할 수 있고,  
 내가 만든 서비스를 통해 내역을 남긴다면 앞으로 공부를 지속하는데 많은 도움이 될것이라고 생각함

</br>

---

### 왜 이렇게 개발을 했나?

   
#### 💡 기능 💡 
🔹 <b>포모도로 타이머</b>  
  - 포모도로 타이머를 깜빡하고 시작하지않거나, 시간기록을 하지 않으면 흐름이 끊어지기 쉽고, 의욕저하의 원인이 된다 
    > 위와 같은 실수를 방지하기 위해 자동화 (시간자동입력 + 텍스트 입력창 생성) 했다    

🔸 <b>투두리스트 / 낫투두리스트</b>

 - 투두리스트 / 낫투두리스트는 시각화, 그룹화, 수정이 굉장히 빈번하게 발생하는 프로그램이다  
   >자유롭게 리스트를 추가, 삭제, 드래그&드롭, 색상 변경 할 수 있게 하여 그룹화 / 시각화 기능을 구현함으로써  
   >노트보다 사용성이 훨씬 좋은 웹애플리케이션을 만들고자했다. 

🔹 <b>과거 기록</b>
- 과거기록을 통해 '나'를 객관적으로 볼 수 있다.  
  > 기록 확인을 통해 객관적으로 '나'를 판단 할 수 있고, 뿌듯함, 자신감,  
  > 지속할 수 있는 에너지 같은 작은 보상들을 얻을 수 있다

🔸 <b>오디오 프로그램</b>

- 외부프로그램을 사용하지 않고 하나로 통일해서 준비시간을 줄일 수 있다   
- 7가지 생활소음을 제공하여 선택의 폭을 넓혔다

🔹 <b>확장프로그램</b>
- POMOTODO를 기본화면으로 설정한다  
  > 왜? 일정관리프로그램은 자주 볼 수록 경각심을 불러일으키기 때문에.

</br>

##### ✋ 확장프로그램을 사용함으로 인해 발생하는 문제점을 해결하기위해 어떻게 했나? 🤚 
  
  </br>

- ___사용자들이 새 탭 버튼을 사용하는 이유___  

  - <b>검색</b>을 하기 위해서    

- ___그런데 새 탭 버튼을 통해 POMOTODO가 뜬다면 ?___  

  - 검색을 위해 address bar를 직접 클릭하거나 즐겨찾기를 눌러서 페이지를 옮기는 등  
    <u>사소하지만 굉장히 귀찮은 작업</u>을 해야하고 이로인해 사용자의 의도를 방해하는 <b>불편함</b>을 주게된다  
    
    >사용자의 입장에서 키보드에있던 오른손을 마우스로 옮겼다가 타이핑을 하기위해  
    >다시 키보드로 가져오는일은 아주아주아주 귀찮은 일이다 
  
- ___그래서 어떻게 해결?___  
  - <b>구글검색창</b>을 구현
    - <b>shift + tab</b> ```단축키```를 통해 구글검색창 -> adress bar로 포커스를 이동  
    - 검색창이 POMOTODO를 사용하는데는 방해가 되므로 검색창 외부를 클릭하면 사라지도록 했다.    
    - <b>shift+enter</b> ```단축키```로 POMOTODO 어디서든 검색을 위해 마우스를 사용할 필요가 없게 했다   

</br>

#### 💡 디자인 💡  
🔹 <b>통일성 있는 디자인 (레이아웃, 폰트, 아이콘, 컬러 등등)</b>  

- <b>레이아웃</b>  
  - 전체 레이아웃은 부드러운 느낌의 뉴모피즘 디자인을 적용해서 눈이 편하도록 했으며,  
    모달창이나 생성되는 리스트들은 글래스모피즘 디자인을 적용해서 시각적으로 차별화 했다 
  - 비슷한 톤의 컬러를 사용해서 각 디자인 기법들이 조화롭도록 디자인 했다

- <b>폰트</b>  
   - 곡선과 직선이 균형잡힌 `IBM Plex Sans KR폰트`를 기본으로 사용하고,  
     영문은 개성을 주기위해 `ubuntu폰트`를 사용했다  
   - 각 폰트의 역할마다 두께를 달리했다  
 
 
- <b>아이콘</b>  
  - [폰트어썸](https://fontawesome.com/)의 웹폰트아이콘을 기본으로 사용해서 전체적인 통일감을 줬고,  
    [플래티콘](flaticon.com/)의 아이콘은 포인트를 줄 때 사용했다
 
- <b>컬러</b>  
  - 디자인에서 사용된 베이스컬러와 어울리도록 채도가 톤다운된 색상들을 사용했다


#### 💡 UX/UI 💡

🔸 <b>디자인에 맞게 버튼 구분</b>  
  - <b>뉴모피즘 버튼</b>  
      - 입체적인 뉴모피즘 디자인의 장점을 부각시키기 위해 그림자를 통해 눌리는 느낌 표현했다  
    
  - <b>일반 버튼</b>  
      - 모든 버튼에 뉴모피즘 디자인을 적용하면 오히려 촌스럽고 사용성이 안좋기 때문에  
      일반 버튼은 레이아웃 없이 텍스트나 아이콘으로만 만들었고,  
      hover, active등의 이벤트가 발생할 때 버튼의 색상을 변화시켜 버튼임을 알 수 있도록 했다  
       
  
🔹 <b> 버튼 위치</b>
  - <b>홈버튼</b>  
    - UX를 위한 홈버튼(좌측상단) & UI를 위한 홈버튼(네비게이션 바)  
      - 같은 버튼이라도 사용자의 경험, 디자인에 따라 다른 위치에 버튼이 필요한 경우가 있다  
     홈으로 가려면 웹애플리케이션의 이름을 클릭하는게 대부분이기 때문에 좌측상단에 홈버튼이 있어야 하고,  
     홈과 기록을 왔다 갔다 하기 위해서 네비게이션 바를 사용하기 때문에 중앙상단에도 홈버튼이 존재해야한다.
   - <b>로그인버튼</b>  
     - 우측상단
       - 다른 웹 서비스들을 이용했을 때 <b>내가 익숙했던 위치</b>를 생각해본 뒤 로그인을 위한 버튼을 배치했다. 
 
🔸 <b>효과음</b>  
  - 타이머 시작과 종료시 서로 상반되는 효과음을 출력한다   

🔹 <b>사용자의 불편을 미리 예상해서 해결책 구현</b>
  - <b>검색창</b>
    - 접속시 자동생성 & 포커스
    - 주소창으로 가기 편하게 하기위한 구조화 [단축키설명 & 주소창을 좀더 명시적으로 ??]
    - 외부 클릭시 숨기기
    - 숨김상태에서 마우스없이 검색할 수 있도록 단축키(shift+enter)
  - <b>모달창</b>
    -  외부를 클릭하면 모달창이 닫히도록 


</br>

#### 💡 배포 💡 

- 단순 웹사이트 뿐 아니라 크롬확장프로그램을 통해 제공해서 리뷰를 쓸 수 있고, 더욱 편하게 사용할 수 있도록 했다

</br>

---

### ✍️ 개발하면서 공부한 것 

##### 클라이언트? 서버? http? ip? 도메인? DNS?(ROUTE53) ACM? ELB?

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

---

### 😱 발생한 이슈 😱

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
211211 db에서 자료를 불러올 때 자료형이 달라서 생긴 문제

조건에 따른 데이터 저장/수정/초기화 





 클라이언트? 서버? http? ip? 도메인? DNS?(ROUTE53) ACM? ELB? 발생한 문제 및 어떻게 해결했는지 ? 

또 뭐가 있을지 생각해보기 

---

## 개발기간
2021.08.28 ~ 2021.12.31

---

## 👏 회고 👏
어려웠던점
즐거웠던점 & 가장 뿌듯한것?
기획과 많이 달라진것의 장/단점

느낀점



## 


</div>
</details>

---



# ![tomato(1)](https://user-images.githubusercontent.com/81023768/147905737-86695e69-1b87-4676-a723-8c2fd58ee7a4.png)	What is POMOTODO ? ![tomato(1)](https://user-images.githubusercontent.com/81023768/147905737-86695e69-1b87-4676-a723-8c2fd58ee7a4.png)
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

- 다른페이지로 이동할 필요없이 구글검색을 할 수 있습니다   
- 검색창 외부를 클릭하면 검색창은 닫히고,  
<b>`shift + enter`</b> ```단축키```를 통해 언제든 검색창을 열 수 있습니다
- 검색창에 포커스된 상태로 <b>shift+tab</b>```단축키```를 통해 주소검색창으로 이동할 수 있습니다

</br>

### 2. 포모도로 타이머
<img width="400" alt="스크린샷 2021-12-31 오후 5 12 23" src="https://user-images.githubusercontent.com/81023768/147815637-0de043d3-ce88-4093-ba38-1644739c0b53.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 55 59" src="https://user-images.githubusercontent.com/81023768/147815665-f45d31b7-578d-40a2-839c-c1bb6bcb5e08.png"><img width="400" alt="스크린샷 2021-12-31 오후 5 59 05" src="https://user-images.githubusercontent.com/81023768/147815660-ee4b9644-5859-42de-8506-518c95559a07.png">

- 시간을 설정해서 <b>작업시간 / 휴식시간</b> 교차로 진행되는 포모도로 타이머입니다  
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
- ```드래그버튼```을 통해 이동이 가능하고,  
  ```리스트```를 클릭해서 색상을 변경할 수 있으며,  
  ```삭제버튼```을 통해 리스트를 삭제할 수 있습니다  


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
--- 아이콘 사진 & 크롬스토어사진 및 링크,  ---  

###### 크롬에서 새탭버튼을 누르면 POMOTODO를 열어주는 확장프로그램입니다
