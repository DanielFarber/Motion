function viewAgenda(feed) {
	var agenda_id = $(this).attr("id").split(" ")[0]
	$(".agenda").detach()
	var heading = document.createElement("h3")
	heading.id = agenda_id
	heading.textContent = this.innerText
	$(heading).insertBefore($(".list"))
	$("#new_agenda").attr("id", "new_selection")
	$("#input_text").text("Add a song to the playlist!")
	$("#form_action").unbind().toggle()
	// $("#input_field").unbind().bind({keyup: conditionallyPostSelection, focus: scrollSelectionsSuggestions})
	$("#input_field").unbind().bind({keyup: conditionallyPostSelection})
	getSelections(agenda_id)
	process = true
	conditionallyAddPlayer(this)
	generateAttendee(feed)
	window.onunload = destroyAttendee
	$("a").click(destroyAttendee)
	getVotes(true)
}

function postAgenda() {
	var agenda_name = $("#new_agenda input").val()
	var options = {
		type: "POST",
		url: "/agendas",
		data: {
			user_id: $(".username").attr("id"),
			name: agenda_name
		},
		dataType: "json",
		success: postAgendaSuccess
	}
	$.ajax(options)
	$("#new_agenda input").val("")
}

function conditionallyPostAgenda(feed) {
	if (feed.keyCode == 13) {
		postAgenda()
	}
}

function postAgendaSuccess(feed) {
	console.log(this)
	console.log(feed)
	var clone =$($(".agenda")[0]).clone(true)
	clone.attr("id", feed.id)
	clone.text("\n\t" + feed.name + "\n")
	clone.appendTo($(".list"))
}