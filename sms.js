// Set default country to Deutschland if no user setting is available
var settings = new Store("settings", {
	"country": "Deutschland",
});

// Special settings for the German iframe. Without random URL it does not show the SMS form.
var country = settings.get('country');
var n = Math.floor(Math.random()*11);

if(country == 'Deutschland') {
	document.write("<div id='deutschland'><iframe src='http://sms.dynamicdrive.de/sms1.php?" +  n + "308307246028BA119A119A119A46A101A117A114A111A112A97A102A105A110A97A110A122A46A100A101'></iframe></div>")
} else if(country == 'Polska') {
	document.write("<div id='polska'><iframe src='http://smsportal.org/sms/'></iframe></div>")
}