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

function getVotes() {
	var id = $("h3").attr("id").split(" ")[0]
	var success = getVoteSuccess
	var url = "/agendas/" + id + "/votes"
	var options = {
		url: url,
		dataType: "json",
		success: getVoteSuccess
	}
	$.ajax(options)
}



function displayVotes() {
	$(".vote").detach()
	var template = _.template($("script#vote_template").text())
	votes.forEach(function(vote) {
		var hash = parseVote(vote)
		var text = template(hash)
		$(".votes_display").append($(text))
	})
}

function getVoteSuccess(feed) {
	votes = []
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










