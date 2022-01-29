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

### 💬 콜백함수
```jQuery
    $(document).ready(function(){  //콜백함수
        var $gigu = $("#gigu");  //gigu 이미지를 찾아 var gigu에 넣어준다.
        $("#btnStart").click(function(){  //이벤트 등록, 버튼 등록 시 콜백함수가 실행
            $gigu.animate({
                left : "470px"
            }, 5000);
        })
    })
```

### 💬 난수 발생시키기
- 0부터 19까지의 난수 발생 (실수로 발생)
```jQuery
  //해당 난수는 실수로 발생한다.
  var rnd = Math.random() *20;
  //때문에 다음과 같이 floor 함수를 이용해 넘버타입으로 리턴시킨다.
  var rnd = Math.floor(Math.random() *20);
```

### 💬 그룹에는 on 메서드를 사용할 수 있다.
- 단독 이벤트    
```
    <script>
        $(document).ready(function(){
            //버튼에 단독 이벤트 등록
            $("#btn").click(function(){
                alert("안녕하세요");
            });
        });
    </script>
 ```

- 그룹 이벤트 (1) (on())
```
    <script>
        $(document).ready(function(){
            //버튼에 그룹 이벤트 등록(on()를 이용한다.)
            $("#btn").on("mouseover focus", function(){
                alert("안녕하세요");
            });
        });
    </script>
```

- 그룹 이벤트 (2)
```
            $("#btn").on({
                "mouseover focus" : function(){
                    console.log("이벤트 발생")
                }
            })
```

### 💬 $(document).ready(function(){ ... } 
 - `$(document).ready(function(){});`는 `$(function( ){});` 와 같다.


### 💬 ready() / load() 차이점
 - **ready()**    
  클라이언트가 사이트를 방문할 때 요청한 HTML 문서 객체의 로딩이 끝나면 이벤트를 실행한다.
 - **load()**    
  외부에 연동된 소스 (ex: iframe, img, video 등)의 로딩이 끝나면 이벤트를 실행한다.
        
    
