// Makes sure the DOM is fully loaded.
$(document).ready(function() {
    
    $(".input-form").on("submit", function(event) {
        //prevents default for submit events
        event.preventDefault();

        var newBurger = $(this).children("#user-input").val();
        console.log(newBurger);

        // Sends PUT request to add a new burger
        $.ajax("/api/burgers/" + newBurger, {
            method: "PUT"
        }).then(
            function() {
                console.log("Created a new burger.");
                // Reloads the page to update it
                location.reload();
            }
        );
    });

    $(".change-status").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newStatus = {
            devoured: newDevoured
        };

        // Sends the PUT request
        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(
            function() {
                console.log("Changed status to ", newDevoured);
                // Reloads page for updated lists
                location.reload();
            }
        )

    })

})