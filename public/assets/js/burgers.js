// Makes sure the DOM is fully loaded.
$(document).ready(function() {
    
    $(".new-burg").on("submit", function(event) {
        //prevents default for submit events
        event.preventDefault();

        var newBurger = $(this).children("#user-input").val();
        console.log(newBurger);

        // Sends PUT request to add a new burger
        $.ajax({
            method: "POST",
            url: "/burgers/" + newBurger 
        }).then(function(data) {
                console.log("Created a new burger.");
                // Reloads the page to update it
                location.reload();
            }
        );
    });

})