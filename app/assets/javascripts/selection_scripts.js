function getSelections(id){
	var options = {
		url: "/agendas/" + id + "/selections",
		dataType: "json",
		success: getSelectionsSuccess
	}
	$.ajax(options)
}

function getSelectionsSuccess(feed){
	position = feed.position
	$(".selection").detach()
	selections = []
	if (feed.results[0]) {
		feed.results.forEach(function(selection) {
			if (selection.position >= feed.position) {
				createSelectionEl(selection)
			}
			selections.push(selection)
		})
		// $("#" + selections[0].id + ".selection").addClass("un_uppable").addClass("un_downable")
		$(".list").children()[0].classList.add("un_uppable", "un_downable")
		if ($(".list").children()[1]) {
			$(".list").children()[1].classList.add("un_uppable")
			// $("#" + selections[1].id + ".selection").addClass("un_uppable")
		}
		setCorrectVoteListeners()
		$(".list").attr("id", feed.position)
		if (apiswf) {
			evaluatePlayer()
		}
	}
	getAttendees()
}

function createSelectionEl(selection) {
	var text = $("#selection_div").text()
	var selection_template = _.template(text)
	var selection_div = $(selection_template(selection))
	$(".list").append(selection_div)

}

function postSelection(feed) {
	var title = this.textContent.split("by")[0].slice(0, -1)
	var artist = this.textContent.split("by")[1].slice(1)
	var options = {
		type: "POST",
		url: "/selections",
		data: {
			title: title,
			artist: artist,
			agenda_id: $("h3").attr("id")[0],
			rdio_id: this.id
		},
		dataType: "json",
		success: postSelectionSuccess
	}
	$.ajax(options)

}


function postSelectionSuccess(feed) {
	createSelectionEl(feed)
	$(".suggestions").detach()
	$("#input_field").blur().val("")
}

function moveToPrioritize(feed) {
	var our_id = feed.parentElement.parentElement.id
	var our_position = feed.parentElement.parentElement.children[0].textContent
	var their_position = (parseInt(our_position) -1).toString()
	var their_id = document.querySelector(".position" + their_position).parentElement.id
	postMovement(our_id, our_position, their_id, their_position)
	postVote(true, our_id)

}

function moveToTable(feed) {
	if (feed.parentElement.parentElement.id == selections.slice(-1)[0].id) {
		destroySelection(feed.parentElement.parentElement.id)
	}
	else {
		var our_id = feed.parentElement.parentElement.id
		var our_position = feed.parentElement.parentElement.children[0].textContent
		var their_position = (parseInt(our_position) + 1).toString()
		var their_id = document.querySelector(".position" + their_position).parentElement.id
		postMovement(our_id, our_position, their_id, their_position)
	}
	postVote(false, feed.parentElement.parentElement.id)
}

function postMovement(our_id, our_position, their_id, their_position) {
	var objects = {one: {id: our_id, position: their_position}, two: {id: their_id, position: our_position}}
	var options = {
		url: "/agendas/" + $("h3").attr("id")[0] + "/selections",
		data: objects,
		dataType: "json",
		type: "PUT",
		success: postMovementSuccess
	}
	$.ajax(options)
}

function destroySelection(id) {
	var options = {
		url: "/selections/" + id,
		type: "DELETE",
		success: postMovementSuccess
	}
	$.ajax(options)
}

function setCorrectVoteListeners() {
	$(".selection").children().children().bind({click: postQuiztion})
	$(".un_uppable .vote_up").unbind({click: postQuiztion})
	$(".un_downable .vote_down").unbind({click: postQuiztion})

}

function postMovementSuccess(feed) {
	$(".selection").detach()
	getSelections($("h3").attr("id").split(" ")[0])
}

function getSelectionInfo(id) {
	var selected = _.find(selections, function(selection) {
		return selection.id == id
	})
	return selected.info
}


