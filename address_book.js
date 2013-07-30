// Fix problem with delay of the window that does not execute load() correctly. Using ready() instead of load()    
$(window).ready(
    function restore() {
        var textarea = document.querySelector("#contacts");
        // Old method of retrieving data locally
        // var content = localStorage["contacts"];
        chrome.storage.sync.get('contacts', function(r) {
            console.log("Contacts retrieved");
            var content = r["contacts"];
            textarea.value = content;
        });
});

$("#save-button").click(function() {
        var textarea = document.querySelector("#contacts").value;
        // Old method of storing data locally
        //localStorage["contacts"] = textarea.value;
        var save = {};
        save["contacts"] = textarea;
        // Save data using the Chrome extension storage API.
        chrome.storage.sync.set(save, function() {
            console.log("Contacts saved");
        });
        $("#confirm").text("Kontakte gespeichert.").show().fadeOut(5000);
});

// Toggle address book to open and close when clicking on the icon
$("img").click(function () {
    $("#addressbook").toggle();
});
$("h1").click(function () {
    $("#addressbook").toggle();
});