# 📌 MyjQueryStudy
> jQuery 기본 다지기
>> 기간: 2022.01.24 ~    
>> [참고 링크]()

<br />

## 📌 jQuery
> jQuery를 사용하는 이유
 - 페이지 제작을 쉽게 만들어주는 `자바스크립트 라이브러리` 이다.
 - 이벤트 처리, 애니메이션, Ajax 등을 훨씬 더 간단하게 만들어준다.
 - 함수에 별도의 이름을 붙이면 같은 기능이 필요할 때마다 해당 함수를 실행할 수 있다.
 
<br />

## 📝 Note   
### 💬 jQuery를 사용하는 두 가지 방법
 - **CDN 방식**     
 인터넷이 연결되는 곳에서만 적용. 
 ```HTML
 <HEAD>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
 </HEAD>
 ```
 - **다운로드 방식**    
[jQuery download](https://jquery.com/download/) > Download the compressed, production jQuery 3.6.0 > libs폴더에 다른이름으로 저장
```HTML
<HEAD>
  <script src="libs/jquery-3.6.0.min.js"></script>
</HEAD>
```
### 💬 html에서 js와 css분리하는 방법
 - HTML 헤더에 링크걸기
```HTML
    <!-- css -->
    <link rel="stylesheet" href="../css/gigu.css">
    <!-- js -->
    <script src="../js/gigu.js"></script>
```
