function conditionallyPostSelection(feed) {
	if (feed.keyCode == 27) {
		$("#input_field").val("").blur()
		$(".suggestions").detach()
	}

	else if (feed.keyCode == 13) {
		$("body").append("<div class='suggestions'>")
		$(".suggestions").append("<div class='searching'>")
		$(".searching").text("SEARCHING")
		rdioSearch(this.value)
	}

}

function rdioSearch(term) {
	var query = term.split(" ").join("+")
	var options = {
		data: {query: query},
		url: "/suggestions",
		dataType: "json",
		success: rdioSearchSuccess
	}
	$.ajax(options)
}

function rdioSearchSuccess (feed) {
	$(".searching").detach()
	feed.forEach(function(song){
		var text = $("script#selections_suggestions").text()
		var temp = _.template(text)
		$(".suggestions").append(temp(song))
	})
	$(".suggestion").bind({click: postSelection, mouseover: highlightSuggestion, mouseout: unHighlightSuggestion})
	$("body").bind({click: evalClick})
}


function highlightSuggestion(feed) {
	$(this).addClass("highlighted")
}

function unHighlightSuggestion(feed) {
	$(this).removeClass("highlighted")
}

function evalClick(feed){
	if ($(".highlighted").length == 0) {
		$(".suggestions").detach()
		$("#input_field").blur().val("")
	}
	$("body").unbind({click: evalClick})
}