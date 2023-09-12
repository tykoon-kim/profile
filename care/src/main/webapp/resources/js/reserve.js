 var calendar = null;
        var initialLocaleCode = 'ko';
        var localeSelectorEl = document.getElementById('locale-selector');
 
            $(document).ready(function (){
 
                    var calendarEl = document.getElementById('calendar');
                    calendar = new FullCalendar.Calendar(calendarEl, {
                      //  initialDate: '2022-08-11',
                        initialView: 'dayGridMonth',
                        headerToolbar: {
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridDay,listWeek'
                        },
                        locale: 'ko',
                        navLinks: true,
                        editable: true,
                        dayCellContent: function(info) {
            var number = document.createElement("a");
            number.classList.add("fc-daygrid-day-number");
            number.innerHTML = info.dayNumberText.replace("일",'');
            
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
            return{domNodes:[]};   
            },
                        selectable: true,
                        droppable: true, // this allows things to be dropped onto the calendar
 
                        eventAdd: function () { // 이벤트가 추가되면 발생하는 이벤트
                            console.log()
                        },
 
                        // eventChange: function (obj) { // 이벤트가 수정되면 발생하는 이벤트
                        //     allEvent = calendar.getEvents();
                        //     console.log(allEvent);
                        // },
                        // eventRemove: function (obj) { // 이벤트가 삭제되면 발생하는 이벤트
                        //     console.log(obj);
                        // },
                        /**
                         * 드래그로 이벤트 추가하기
                         */
                        select: function (arg) {
    if (arg.view.type === 'dayGridMonth') {
        calendar.changeView('timeGridDay', arg.start);
    }

    if (arg.view.type === 'timeGridDay') {
        var title = prompt('일정을 등록해주세요.');
        if (title) {
            calendar.addEvent({
            	memcode : memcode,
                title: title,
                startDate: arg.start,
                endDate: arg.end,
            });
        }
                        
                            var allEvent = calendar.getEvents(); // .getEvents() 함수로 모든 이벤트를 Array 형식으로 가져온다. (FullCalendar 기능 참조)
 
                            var events = new Array(); // Json 데이터를 받기 위한 배열 선언
                            for (var i = 0; i < allEvent.length; i++) {
                                var obj = new Object();     // Json 을 담기 위해 Object 선언
                                // alert(allEvent[i]._def.title); // 이벤트 명칭 알람
                                obj.title = allEvent[i]._def.title; // 이벤트 명칭  ConsoleLog 로 확인 가능.
                                obj.startDate = allEvent[i]._instance.range.start; // 시작
                                obj.endDate = allEvent[i]._instance.range.end; // 끝
                                obj.c_code = allEvent[i]._def.memcode; //멤머코드
 
                                events.push(obj);
                            }
                            var jsondata = JSON.stringify(events);
                            console.log(jsondata);
                            // saveData(jsondata);
 
                            $(function saveData(jsondata) {
                                $.ajax({
                                    url: "/full-calendar/calendar-admin-update",
                                    method: "POST",
                                    dataType: "json",
                                    data: JSON.stringify(events),
                                    contentType: 'application/json',
                                })
                                    .done(function (result) {
                                        // alert(result);
                                    })
                                    .fail(function (request, status, error) {
                                         alert("에러 발생" + error);
                                    });
                                calendar.unselect()
                            });
                            }
                        },
 
                        // drop: function (arg) {
                        //     // is the "remove after drop" checkbox checked?
                        //     if (document.getElementById('drop-remove').checked) {
                        //         // if so, remove the element from the "Draggable Events" list
                        //         arg.draggedEl.parentNode.removeChild(arg.draggedEl);
                        //     }
                        // }
                    });
                    calendar.render();
        });