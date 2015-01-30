$(function(){
	$("body").on('DOMNodeInserted', ".i_tester", function(e) {
			if ($("#toggle_link").length > 0 ) { return; }
			$(".r_groups").after("<div style='text-align: center; margin-top: 1px; margin-bottom: 3px;'><a id='toggle_link'>SHOW TESTERS</a></div>");
			$(".r_testers").toggle();
			$("#toggle_link").click(function() {
				$(".r_testers").toggle();
				$("#toggle_link").text($(".r_testers").is(":visible") ? 'HIDE TESTERS' : 'SHOW TESTERS');
			});
	});
});