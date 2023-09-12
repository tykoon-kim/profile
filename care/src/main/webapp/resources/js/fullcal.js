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
                 {
                	title: '2023 고졸성공 취업·창업 페스타',
                	start: '2023-09-07',
                	end: '2023-09-07',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '2023 디스플레이산업 채용박람회',
                	start: '2023-08-16',
                	end: '2023-08-18',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '2023 방위산업 일자리박람회',
                	start: '2023-06-28',
                	end: '2023-06-30',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '2023 글로벌 일자리 대전',
                	start: '2023-08-21',
                	end: '2023-08-22',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '청년GrowingUP바른채용역량면접코칭클리닉',
                	start: '2023-08-21',
                	end: '2023-12-31',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '2023 Global Talent Fair',
                	start: '2023-08-21',
                	end: '2023-08-22',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '2023 관광산업 일자리박람회',
                	start: '2023-09-18',
                	end: '2023-09-19',
                	color: '#B4A3DE',
                }, 
                 {
                	title: '서울 팝 컬처 컨벤션',
                	start: '2023-08-25',
                	end: '2023-08-27',
                	color: '#bd2561',
                }, 
                 {
                	title: '세계 제약ㆍ바이오ㆍ건강기능 산업 전시회',
                	start: '2023-08-30',
                	end: '2023-09-01',
                	color: '#a8b8d0',
                }, 
                 {
                	title: '2023 한복상점',
                	start: '2023-08-10',
                	end: '2023-08-13',
                	color: '#a8b8d0',
                }, 
                 {
                	title: '베지노믹스 K-비건페어 인 서울 2023',
                	start: '2023-08-10',
                	end: '2023-08-12',
                	color: '#a8b8d0',
                }, 
                 {
                	title: '제1회 농식품 테크 스타트업 창업박람회',
                	start: '2023-07-26',
                	end: '2023-07-28',
                	color: '#a8b8d0',
                }, 
                 {
                	title: '제70회 프랜차이즈 창업박람회 2023',
                	start: '2023-08-10',
                	end: '2023-08-12',
                	color: '#a8b8d0',
                }, 
                 {
                	title: '스마트디바이스 x 소형가전쇼',
                	start: '2023-08-17',
                	end: '2023-08-19',
                	color: '#a8b8d0',
                }, 
                 {
                	title: '서울 바 앤 스피릿 쇼',
                	start: '2023-07-28',
                	end: '2023-07-30',
                	color: '#a8b8d0',
                }, 
                /*<c:forEach var="event" items="${eventList}">
                {
                	title: '<c:out value="${event.fairname}"/>',
                   start: '<c:out value="${event.fairstart}"/>',
                   end: '<c:out value="${event.fairend}"/>',
                   color : '<c:out value="${event.color}"/>', 
                   cate : '<c:out value="${fair.faircate}"/>',
                },
                </c:forEach>*/
            ],
                                   
        });
        
        calendar.render();
    });
