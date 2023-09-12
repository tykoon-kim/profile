$(function(){
		
			$(".submit").on("click", function(){
				if(!$("#id").contentEquals(id)){
					alert("아이디를 입력해주세요.");
					$("#id").focus();
					return false;
				}
				if(!$("#pw").contentEquals(pw)){
					alert("비밀번호가 틀렸습니다.");
					$("#pw").focus();
					return false;
				}
			//		window.close();
					document.userinput.submit();
				
			});
				
	
			
		});