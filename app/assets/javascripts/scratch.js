function blink(position) {
	var tag = ".position" + position
	process = false
	var el = $(tag).parent()
	el.addClass("blink")
	highLight()
	setTimeout(unHighLight, 50)
	setTimeout(highLight, 100)
	setTimeout(unHighLight, 150)
	setTimeout(highLight, 350)
	setTimeout(unHighLight, 400)
	setTimeout(highLight, 450)
	setTimeout(unHighLight, 500)
	setTimeout(unBlink, 501)
	process = true

}

function highLight() {
	$(".blink").addClass("highlighted")
}

function unHighLight() {
	$(".blink").removeClass("highlighted")
}

function unBlink() {
	$(".blink").removeClass("blink")
}

function switchPositions(topPosInt) {
	var temp = _.template($("script#selection_div").text())
	var topSelection = _.find(selections, function(selection) {return selection.position == topPosInt})
	var bottomSelection = _.find(selections, function(selection) {return selection.position == topPosInt + 1})
	bottomSelection.position -= 1
	topSelection.position += 1
	selections = _.sortBy(selections, function(selection) {return selection.position})
	var newTopEl = $(temp(topSelection))
	var newBottomEl = $(temp(bottomSelection))
	var oldTopEl = $("#" + topSelection.id + ".selection")
	var oldBottomEl = $("#" + bottomSelection.id + ".selection")
	oldTopEl.fadeTo(500, 0, function() {oldTopEl.replaceWith(newBottomEl)})
	oldBottomEl.fadeTo(500, 0, function() {oldBottomEl.replaceWith(newTopEl)})
	setTimeout(function(){getSelectionsSuccess(selections)}, 550)
}

function fullReplace(position) {
	process = false
	blink(position)
	setTimeout(function() {switchPositions(position)}, 750)
	setTimeout(function() {process = true}, 1500)
}
