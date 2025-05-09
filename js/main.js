
//jquery
// 메인 메뉴 호버했을 떄 서브메뉴 나오는 코드
$(function(){
    $('.search').click(function(){
        $('.searchf').slideToggle()
    })
    $('.hbot > ul > li').mouseenter(function(){
        $('header').stop().animate({
            height: '484px'
        },400)
    })
    $('.hbot > ul > li').mouseleave(function(){
        $('header').stop().animate({
            height: '168px'
        },400)
    })
    
})
// javascript
   //처음 팝업 버튼 이벤트 제어 코드
    let yes=document.querySelector(".yes")
    let no=document.querySelector(".no")
    let pbg=document.querySelector(".popup_bg")
    
        yes.addEventListener("click",function(){
            pbg.style.display="none";
        })
    
        no.addEventListener("click",function(){
            alert('만 19세 미만은 사이트 이용이 불가능 합니다.')
        })

    
    //  팝업 버튼 이벤트 코드임 객체버전 주석 풀면 겹쳐서 안되니 이렇게 
    //할 수 있다 정도
    // let c_yes=()=>{
    //     yes.addEventListener("click",function(){
    //         pbg.style.display="none";
    //     })
    // }
    
    // let c_no=()=>{
    //     no.addEventListener("click",function(){
    //         alert('만 19세 미만은 사이트 이용이 불가능 합니다.')
    //     })
    // }
