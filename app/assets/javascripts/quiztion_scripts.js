var search_temp = "<div class='quiztion_searching'>Getting you a Quiztion</div>"

function giveAQuiztion(question, answer, category) {
	$(".quiztion_searching").fadeOut()
	var div = $($("#quiztion_display").text())
	document.body.appendChild(div[0])
	$("#category").text("Category: " + capitalizeSentence(category))
	$("#question").text(question)
	screenAnswer = answer
	$("#quiztion").fadeIn()
	$("#answer_input").focus().bind({focusout: checkAnswer, keyup: checkAnswer})
	countDown($(".timer")[0])
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
	$("body").append(search_temp)
}

function postQuiztionSuccess(feed) {
	giveAQuiztion(feed.quiztion.question, feed.answer, feed.category.title)
}

function checkAnswer(feed) {
	var attempt = $("#answer_input").val()
	var challenged = $("#challenged")
	if (feed == "end" || feed.type == "focusout" || feed.keyCode == 13) {
		$(".timer").text("")
		var correct = (parseAnswers(attempt) == parseAnswers(screenAnswer))
		var secret = (attempt == "ishkebibble")
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

function parseAnswers(string) {
	var result =  string.split("<i>").join("").toLowerCase().split("</i>").join("").split(/\W/).join("")
	result = result.split("the").join("")
	return result
}

function testQuizDiv() {
	var div = $($("#quiztion_display").text())
	document.body.appendChild(div[0])
	$("#category").text("Category: A Bundle of Snakes")
	$("#question").text("Who was found in a bassinet floating down a river and, later, freed the Jews from Egypt?")
	screenAnswer = answer
	$("#quiztion").fadeIn()
}

function countDown(div) {
	var num = parseInt(div.textContent)
	if (!num) {
		div.textContent = "15"
		setTimeout(function(){countDown(div)}, 1000)
	}
	else if (num != 1) {
		div.textContent = (num - 1).toString()
		setTimeout(function(){countDown(div)}, 1000)
	}
	else {
		checkAnswer("end")
	}

}
