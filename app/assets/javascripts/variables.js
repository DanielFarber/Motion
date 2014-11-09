//From script.js
var screenAnswer = ""

var selections = []

//I don't think I use this variable at all
// var shunt = []

var process = false
var votes = []
var lastVoteGetTime
var attendees = []
var position = 0

function resetVariables() {
	process = false
	votes = []
	lastVoteGetTime = ""
	attendees = []
	position = 0
	selections = []
}


// This variable is in script.js
// var interval = setInterval(runUpdateProcesses, 5000)

//From player_scripts.js
var apiswf = null

var playingSongId = null

var globalPlayState = null

var playback_token = ""




var domain = document.domain
if (domain == "127.0.0.1") {
	playback_token = "GAlUXUiw_____2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbjEyNy4wLjAuMdigCiGVPuLLXVwOzZnC1yA="
}
else {
	playback_token = "GCBUXTCW_____2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbmluZmluaXRlLWNyYWctNTU3NS5oZXJva3VhcHAuY29tq0oegVszpS8atgjvzfV4bw=="
}

var flashvars = {
  'playbackToken': playback_token,
  'domain': domain,
  'listener': 'callback_object'
  };
var params = {
  'allowScriptAccess': 'always'
};
var attributes = {};

//This variable is in player_scripts.js
// var callback_object = {};

//newer variables


//and new functions relating to the above variables

function getToken() {
	var options = {
		url: "/token",
		success: getTokenSuccess,
		dataType: "json"
	}
	$.ajax(options)
}

function getTokenSuccess(feed) {

}

