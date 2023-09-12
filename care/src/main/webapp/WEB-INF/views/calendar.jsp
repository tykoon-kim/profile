<%-- <%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*" %>
<%@ page import="java.util.ArrayList" %>

<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link href='resources/css/main.css' rel='stylesheet' />
    <script src='resources/js/main.js'></script>
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script>
    document.addEventListener('DOMContentLoaded', function() {
        var calendarEl = document.getElementById('calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
             headerToolbar: {
                 left: 'prev,next today,dayGridMonth',
                 center: 'title',
                 right: 'listWeek'
             },
            locale: 'ko',
            
              dayCellContent: function(info) {
                   var number = document.createElement("a");
                   number.classList.add("fc-daygrid-day-number");
                   number.innerHTML = info.dayNumberText.replace("일",'');
                   
                // 클릭 이벤트 핸들러 함수 작성
                   function cellClickHandler(event) {
                       // 여기에 일정 수정을 위한 로직 작성
                       // 예: 특정 날짜의 일정을 수정하기 위한 팝업 창을 띄워주는 등의 동작
                       console.log("날짜 셀 클릭됨:", info.date);
                   }

                   // HTML 엘리먼트에 클릭 이벤트 핸들러 추가
                   number.addEventListener("click", cellClickHandler);
                   
                   // 시간을 함께 표시하도록 추가
               var time = document.createElement("div");
               time.classList.add("fc-daygrid-event-time");
               time.textContent = "시간을 표시하고 싶은 내용"; // 원하는 시간 형식을 여기에 추가

               var container = document.createElement("div");
               container.appendChild(number);
               container.appendChild(time);
                   
                   if(info.view.type === "dayGridMonth")
                      {
                      return{html: number.outerHTML};
                      }
                   return{domNodes:[number]};   
                   },
                   selectable: true,
                   droppable: true,
                   
                   eventAdd: function () { // 이벤트가 추가되면 발생하는 이벤트
                       console.log()
                   },
                   eventAdd: function(info) {
                       // info.event.title, info.event.start, info.event.end 등의 정보를 활용하여 서버로 데이터 전송
                       // 서버에서 데이터를 처리한 후, 성공적으로 처리되면 아래와 같이 FullCalendar를 업데이트할 수 있습니다.
                       calendar.refetchEvents();
                   },
                   
            // Your calendar configuration options
            events: [
                // Iterate over eventList and generate event objects here
                
            ],
                       
        });
        
        calendar.render();
    });
</script>
  </head>
  <body>
    <div id='calendar'></div>
  </body>
</html>

<script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.7.2/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fullcalendar@5.7.2/locales-all.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns"
            crossorigin="anonymous"></script>

</html> --%>