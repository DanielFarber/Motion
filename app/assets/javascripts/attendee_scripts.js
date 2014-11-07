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
		success: "generateAttendeeSuccess"
	}
}

function generateAttendeeSuccess(feed) {
	attendees = []
	_.each(feed, function(attendee) {
		attendees.push(attendee)
	})
}

function destroyAttendeeSuccess(feed) {
	attendees = []
}

function getAttendeeUsername(user_id) {
	var user = _.find(attendees, function(attendee){
		return attendee.user_id == user_id
	})

	return user.username
}
