// Fix problem with delay of the window that does not execute load() correctly. Using ready() instead of load()
$(window).unload (
  function save() {
	  var textarea = document.querySelector("#contacts");
	  localStorage["contacts"] = textarea.value;
  }
);
$(window).ready(
  function restore() {
	var textarea = document.querySelector("#contacts");
	var content = localStorage["contacts"];
	textarea.value = content;
});