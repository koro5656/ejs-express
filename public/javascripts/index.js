var button_onclick = function(event) {
    window.alert('Hello World!');
}

var document_initialize = function(event) {
    $('#bt').on('click', button_onclick);
}

$(document).ready(document_initialize);