function giveAQuiztion(question, answer, category) {
	var div = $($("#quiztion_display").text())
	document.body.appendChild(div[0])
	$("#category").text("Category: " + capitalizeSentence(category))
	$("#question").text(question)
	screenAnswer = answer
	$(div).fadeIn()
	$("#answer_input").focus().bind({focusout: checkAnswer, keyup: checkAnswer})
}

function postQuiztion(feed) {
	process = false
	this.id = "challenged"
	options = {
		url: "/quiztions",
		dataType: "json",
		type: "POST",
		data: {user_id: $("span.username").attr("id")},
		success: postQuiztionSuccess
	}
	$.ajax(options)
}

function postQuiztionSuccess(feed) {
	giveAQuiztion(feed.quiztion.question, feed.answer, feed.category.title)
}

function checkAnswer(feed) {
	var challenged = $("#challenged")
	if (feed.type == "focusout" || feed.keyCode == 13) {
		var correct = (this.value.toLowerCase() == screenAnswer.toLowerCase())
		var secret = (this.value == "ishkebibble")
		$("#quiztion").delay(500).fadeOut({done: detachItem})
		process = true
		if (correct || secret) {
			$("#outcome").text("CORRECT!")
			if (challenged.attr("class") == "vote_up") {moveToPrioritize(challenged[0])}
			if (challenged.attr("class") == "vote_down") {moveToTable(challenged[0])}
		}
		else {
			$("#outcome").text("INCORRECT!")
		}
	}
}
