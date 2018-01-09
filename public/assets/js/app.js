$(document).on("click", ".delBtn", function(e) {
    $.ajax({
        url: `api/devour/${$(this).attr("data-id")}`,
        method: "PUT"
    });
});