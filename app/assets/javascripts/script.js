$(function(){

initialize()


})


//These variables have been moved to variables.js
// var screenAnswer = ""

// var selections = []
// var shunt = []

// var process = false

var interval = setInterval(runUpdateProcesses, 5000)
//THIS VARIABLE HAS BEEN COMMENTED OUT FOR A WHILE
// var initializeAgain = false

function initialize(){

	$("div.agenda").click(viewAgenda)
	$("#form_action").bind({click: postAgenda})
	$("#input_field").bind({keyup: conditionallyPostAgenda})
	$(".logout a").click(logoutProcesses)
	$(".motion a").click(reInitialize)
}

function runUpdateProcesses(feed) {
	if (process) {
		var arg = $("h3").attr("id").split(" ")[0]
		getSelections(arg)
	}
}

function logoutProcesses() {
	document.logout.submit()
}

function detachItem(feed) {
	$(this).detach()
}



function reInitialize() {
	$("body").unbind()
	process = false
	setTimeout(initialize, 500)
	apiswf = null
	playingSongId = null
}


function capitalizeSentence(str) {
	var items = str.split(" ")
	var capped = []
	items.forEach(function(word) {
		var uppered = ""
		uppered += word[0].toUpperCase()
		uppered += word.slice(1)
		capped.push(uppered)
	})
	return capped.join(" ")
}