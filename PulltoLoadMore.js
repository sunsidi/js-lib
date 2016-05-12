var page = 1; 
var loaded = false;
var root = "";

/*
PULL UP TO LOAD MORE DATA
*/
$(document).ready(function() {
	var list = $('#list');
    function show() {
        if (!loaded) {
            $("#bottom").html("加载中...");
        }
        setTimeout(function() {
            var top = $("#bottom").offset().top;
            if (!loaded && $(window).scrollTop() + $(window).height() > top) {
            	$.ajax({
					url: //PHP FILE URL,
					dataType: 'json',//DATA TYPE
					data: //PASS THE PARAMETER, EXAMPLE: {option: '1', catid: catid, page: page, pagesize: '10'},
					async: true
				})
				.success(function(json) {
					if(json.code == 200) {
						for (var i = 0; i < json.data.length; i++) {
							//Extract DATA
						}
						page++;
					}else {
						$("#bottom").html("已无更多内容");
                        loaded = true;
					}
				});
            }
        }, 1000);
    }
    $(window).scroll(show);
});