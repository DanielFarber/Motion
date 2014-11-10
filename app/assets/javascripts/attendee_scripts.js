function generateAttendee(feed)  {
	var user_id = $(".username").attr("id")
	var agenda_id = feed.target.id.split(" ")[0]
	var options = {
		url: "/attendees",
		type: "POST",
		data: {user_id: user_id, agenda_id: agenda_id},
		success: generateAttendeeSuccess
	}
	$.ajax(options)
}

function destroyAttendee(feed) {
	var user_id = $(".username").attr("id")
	var options = {
		url: "/users/" + user_id + "/attendees",
		type: "DELETE",
		success: destroyAttendeeSuccess
	}
	$.ajax(options)
}

function getAttendees() {
	var agenda_id = $("h3").attr("id").split(" ")[0]
	options = {
		url: "agendas/" + agenda_id + "/attendees",
		dataType: "json",
		success: getAttendeeSuccess
	}
	$.ajax(options)
}

function getAttendeeSuccess(feed) {
	attendees = []
	_.each(feed, function(attendee) {
		attendees.push(attendee)
	})
	attendees = _.sortBy(attendees, function(attendee) { return attendee.id })
	displayAttendees()
}

function displayAttendees() {
	$(".attendees_display").children().detach()
	attendees.forEach(function(attendee) {
		var template = _.template($("script#attendee_template").text())
		$(".attendees_display").append($(template(attendee)))
	})
	getVotes()
}

function generateAttendeeSuccess(){}

function destroyAttendeeSuccess(feed) {
	resetVariables()
}

function getAttendeeUsername(user_id) {
	var user = _.find(attendees, function(attendee){
		return attendee.user_id == user_id
	})

	return user.username
}
