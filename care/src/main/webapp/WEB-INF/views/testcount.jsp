<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Toggle Click Counter</title>
    <script type="text/javascript">
    $(".hh").each(function(index, element) {
   $(this).on("click",function() {
      if ($(this).hasClass("heart")) {
         $(this).removeClass("heart");
         var likecnt = $(this).siblings("#likecntd").val();
         var llike = Number(likecnt)+1;
         $(this).siblings("#likecntd").attr("value",llike);
         $(this).addClass("hearted");
         var board_no = $(this).find("#board_nod").val();
         var userId = $(this).find("#iddd").val();
         $.ajax({
            url : 'like.do',
            data : {
               "board_no" : board_no,
               "id" : userId
            },
            type : "POST",
            success : function(data) {
      //         alert("board_no:"+board_no+"userId:"+userId+"likecnt:"+likecnt+"llike:"+llike);
            },
            error : function(request,status,error) {
               alert(board_no);
               alert("code:"+ request.status+ "\n"+ "message:"+ request.responseText+ "\n"+ "error:"+ error);
            }
         });
      } else {
         $(this).removeClass("hearted");
         var likecnt = $(this).siblings("#likecntd").val();
         var llike = Number(likecnt)-1;
         $(this).siblings("#likecntd").attr("value",llike);
         $(this).addClass("heart");
         var board_no = $(this).find("#board_nod").val();
         var userId = $(this).find("#iddd").val();
            $.ajax({
               type : "POST",
               url : 'unlike.do',
               data : {
                  "board_no" : board_no,
                  "id" : userId
               },
               success : function(data) {
      //            alert("board_no:"+board_no+"userId:"+userId+"likecnt:"+likecnt+"llike:"+llike);
               },
               error : function(request,status,error) {
                  alert(board_no);
                  alert("code:"+ request.status+ "\n"+ "message:"+ request.responseText+ "\n"   + "error:"+ error);
               }
            });
      }
   });
});
    </script>
</head>
<body>
	
	<div class="media-feed-control d-flex justify-content-end align-items-center" style="height: 1rem">

                                       <c:if test="${community.likechk < 1}">
                                          <div  class="icon_links d-flex me-2 heart hh">
                                             <input type="hidden" id="iddd" name="id" value="${userId}" />
                                             <input type="hidden" name="board_no" id="board_nod" value="${community.board_no}" />
                                          </div>    
                                       </c:if>
                                       <c:if test="${community.likechk > 0}">
                                          <div  class="icon_links d-flex me-2 hearted hh">
                                             <input type="hidden" id="iddd" name="id" value="${userId}" />
                                             <input type="hidden" name="board_no" id="board_nod" value="${community.board_no}" />
                                          </div>    
                                       </c:if>
                                       <input type="text" class="likecntd" name="likecnt" id="likecntd"  disabled value="${community.likecnt}" />

    <h1>Toggle Click Counter</h1>
    <p>
        <span id="clickCount_GOOD">0</span> - GOOD
        <button id="toggleButton_GOOD">heartButton.textContent = '\u2661';</button>
    </p>
    <!-- <p>
        <span id="clickCount_FIGHTING">0</span> - FIGHTING
        <button id="toggleButton_FIGHTING">Toggle</button>
    </p>
    <p>
        <span id="clickCount_FEEL">0</span> - FEEL
        <button id="toggleButton_FEEL">Toggle</button>
    </p>
    <p>
        <span id="clickCount_INTEREST">0</span> - INTEREST
        <button id="toggleButton_INTEREST">Toggle</button>
    </p> -->



</body>
<%-- 화면에 업데이트를 하려면 버튼을 눌러야하기 때문에 아래쪽에 위치 --%>
     <script>
        // 초기 클릭 카운트 값 설정
        /* var clickCounts = {
            "GOOD": 0,
            "FIGHTING": 0,
            "FEEL": 0,
            "INTEREST": 0
        };

        // 토글 버튼들의 클릭 이벤트 등록
        document.getElementById("toggleButton_GOOD").addEventListener("click", function() {
            toggleClick("GOOD");
        });
        document.getElementById("toggleButton_FIGHTING").addEventListener("click", function() {
            toggleClick("FIGHTING");
        });
        document.getElementById("toggleButton_FEEL").addEventListener("click", function() {
            toggleClick("FEEL");
        });
        document.getElementById("toggleButton_INTEREST").addEventListener("click", function() {
            toggleClick("INTEREST");
        });

        // 토글 버튼 클릭 이벤트 핸들러 함수
        function toggleClick(buttonName) {
            // 클릭 카운트 토글 및 다른 버튼 카운트 초기화
            for (var btn in clickCounts) {
                if (btn === buttonName) {
                    clickCounts[btn] = (clickCounts[btn] === 0) ? 1 : 0;
                } else {
                    clickCounts[btn] = 0;
                }
                // 화면에 클릭 카운트 업데이트
                document.getElementById("clickCount_" + btn).textContent = clickCounts[btn];
            }
        } */
        //빈하트 풀하트
        let clickCount_GOOD = 0;
        const heartButton = document.getElementById('toggleButton_GOOD');
        const clickCountElement = document.getElementById('clickCount_GOOD');

        heartButton.addEventListener('click', function() {
            if (clickCount_GOOD === 0) {
                heartButton.textContent = '\u2665'; // Filled heart
                clickCount_GOOD = 1;
            } else {
                heartButton.textContent = '\u2661'; // Empty heart
                clickCount_GOOD = 0;
            }
            clickCountElement.textContent = clickCount_GOOD;
        });
    </script>
</html>
