function conditionallyAddPlayer(elem) {
	if (elem.id.split(" ")[1].split("user")[1] == $(".username").attr("id")) {
		$("body").append($("script#rdio_player").text())

		swfobject.embedSWF('http://www.rdio.com/api/swf/', 'apiswf', 1, 1, '9.0.0', 'expressInstall.swf', flashvars, params, attributes);
	}
}

function evaluatePlayer() {
	if (!playingSongId && $(".selection")[0]) {
		apiswf.rdio_play(selections[position - 1].rdio_id)
		playingSongId = selections[position - 1].id
	}
	else if (globalPlayState == 2) {
		if (playingSongId == selections[position - 1].id) {
			changeTunes()
		}
		else if (playingSongId != selections[position - 1].id) {
			apiswf.rdio_play(selections[position - 1].rdio_id)
			playingSongId = selections[position - 1].id
		}
	}
}


function changeTunes() {
	putAgendaPosition()
}

function putAgendaPosition() {
	var agenda_id = $("h3").attr("id").split(" ")[0]
	var position = parseInt($(".list").attr("id"))
	options = {
		url: "/agendas/" + agenda_id,
		data: {position: position + 1},
		method: "PUT",
		dataType: "json",
		success: putAgendaPositionSuccess
	}
	$.ajax(options)
}

function putAgendaPositionSuccess(feed) {
	var id = $("h3").attr("id")
	getSelections(id)
}


// var apiswf = null

// var playingSongId = null

// var globalPlayState = null

// var playback_token = "GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=";
// var domain = "localhost";

// var flashvars = {
//   'playbackToken': playback_token,
//   'domain': domain,
//   'listener': 'callback_object'
//   };
// var params = {
//   'allowScriptAccess': 'always'
// };
// var attributes = {};

var callback_object = {};

callback_object.ready = function ready(user) {

  apiswf = $('#apiswf').get(0);




	callback_object.playStateChanged = function playStateChanged(playState) {
	  // The playback state has changed.
	  // The state can be: 0 - paused, 1 - playing, 2 - stopped, 3 - buffering or 4 - paused.
	  globalPlayState = playState

	}

callback_object.freeRemainingChanged = function freeRemainingChanged(remaining) {
  console.log(remaining);
}


// callback_object.playingTrackChanged = function playingTrackChanged(playingTrack, sourcePosition) {
//   // The currently playing track has changed.
//   // Track metadata is provided as playingTrack and the position within the playing source as sourcePosition.
//   if (playingTrack != null) {
//     $('#track').text(playingTrack['name']);
//     $('#album').text(playingTrack['album']);
//     $('#artist').text(playingTrack['artist']);
//     $('#art').attr('src', playingTrack['icon']);
//   }
// }

// callback_object.playingSourceChanged = function playingSourceChanged(playingSource) {
//   // The currently playing source changed.
//   // The source metadata, including a track listing is inside playingSource.
// }

// callback_object.volumeChanged = function volumeChanged(volume) {
//   // The volume changed to volume, a number between 0 and 1.
// }

// callback_object.muteChanged = function muteChanged(mute) {
//   // Mute was changed. mute will either be true (for muting enabled) or false (for muting disabled).
// }

// callback_object.positionChanged = function positionChanged(position) {
//   //The position within the track changed to position seconds.
//   // This happens both in response to a seek and during playback.
//   console.log(position)
// }

// callback_object.queueChanged = function queueChanged(newQueue) {
//   // The queue has changed to newQueue.
// }

// callback_object.shuffleChanged = function shuffleChanged(shuffle) {
//   // The shuffle mode has changed.
//   // shuffle is a boolean, true for shuffle, false for normal playback order.
// }

// callback_object.repeatChanged = function repeatChanged(repeatMode) {
//   // The repeat mode change.
//   // repeatMode will be one of: 0: no-repeat, 1: track-repeat or 2: whole-source-repeat.
// }

// callback_object.playingSomewhereElse = function playingSomewhereElse() {
//   // An Rdio user can only play from one location at a time.
//   // If playback begins somewhere else then playback will stop and this callback will be called.
// }

// callback_object.updateFrequencyData = function updateFrequencyData(arrayAsString) {
//   // Called with frequency information after apiswf.rdio_startFrequencyAnalyzer(options) is called.
//   // arrayAsString is a list of comma separated floats.

//   var arr = arrayAsString.split(',');

//   $('#freq div').each(function(i) {
//     $(this).width(parseInt(parseFloat(arr[i])*500));
//   })
}
