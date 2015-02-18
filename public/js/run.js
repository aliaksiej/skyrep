    $(function() {         
		$.get("channelpage.html", function(res, req) {
			$("#channel").html(res, req);
		});
        $.get("homepage.html", function(res, req) {
			$("#home").html(res, req);
		});
    });