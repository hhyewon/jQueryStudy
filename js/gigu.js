$(document).ready(function(){
    //지구 이미지 웹 요소(노드) 찾아서 저장
    var $gigu = $("#gigu");
    //버튼에 이벤트 등록 
    //(5초만에 left값을 470px로 설정하는 것이 곧 움직이는 애니메이션 형태가 된다.)
    $("#btnStart").click(function(){
        $gigu.animate({
            left : "470px"
        }, 5000);
    })
})