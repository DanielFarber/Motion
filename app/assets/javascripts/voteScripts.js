function postVote(like, id) {
	var data = {}
	data.up = like
	data.down = !like
	data.create = false
	data.selection_id = id
	data.user_id = $(".username").attr("id")
	var options = {
		url: "/votes",
		type: "post",
		dataType: "json",
		success: postVoteSuccess,
		data: data
	}
	$.ajax(options)

}

function postVoteSuccess(feed) {

}

function getVotes(initial) {
	console.log("getting")
	var id = $("h3").attr("id").split(" ")[0]
	var success = getVoteSuccess
	var url = "/agendas/" + id + "/votes"
	if (initial) {success = initialVoteGet}
	else {url += ("/" + lastVoteGetTime)}
	var options = {
		url: url,
		dataType: "json",
		success: success
	}
	$.ajax(options)
}

function getVoteSuccess(feed) {
	lastVoteGetTime = Date()

}

function displayVotes(agenda_id) {
	$("<div class='votes_display'>").insertAfter($("h3"))
	var template = _.template($("script#vote_template").text())
	votes.forEach(function(vote) {
		var hash = parseVote(vote)
		var text = template(hash)
		$(".votes_display").append($(text))
	})
}

function initialVoteGet(feed) {
	lastVoteGetTime = Date()
	feed.forEach(function(vote) {
		votes.push(vote)
	})
	displayVotes()
}

function parseVote(vote) {
	var objeto = {}
	objeto.first = getAttendeeUsername(vote.user_id)
	objeto.second = "voted to"
	if (vote.up) {
		objeto.second += " prioritize:"
		objeto.down = ""
	}
	if (vote.down) {
		objeto.second += " table:"
		objeto.down = " down"
	}
	objeto.third = getSelectionInfo(vote.selection_id)
	return objeto
}

function displayVote(vote) {

}










