$(document).ready(function() {
    $("#add-address").click(function() {
        //Add new input fields for additional addresses
        $("#new-addresses").append(  '<div class="new-address">' +
                                        '<div class="form-group">' +
                                            '<label for="new-street">Street</label>' +
                                            '<input type="text" class="form-control new-street">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-city">City</label>' +
                                            '<input type="text" class="form-control new-city">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-state">State</label>' +
                                            '<input type="text" class="form-control new-state">' +
                                        '</div>' +
                                    '</div>');

    });

    $("form#new-contact").submit(function(event) {
        event.preventDefault();
        //Get values from form and use as variables
        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();

        //Create new contact object (similar to php constructor)
        var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

        $(".new-address").each(function() {
            var inputtedStreet = $(this).find("input.new-street").val();
            var inputtedCity = $(this).find("input.new-city").val();
            var inputtedState = $(this).find("input.new-state").val();

            var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState };
            //Pushes address objects to addresses array in newContact object
            newContact.addresses.push(newAddress);
        });

        //Add to list of contacts below form
        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

        //Click on contact in list to view properties on right
        $(".contact").last().click(function() {
            $("#show-contact").show();

            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);

            $("ul#addresses").text("");
            newContact.addresses.forEach(function(address) {
                $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
            });
        });

        //Clear all form values
        $("input#new-first-name").val("");
        $("input#new-last-name").val("");
        $("input.new-street").val("");
        $("input.new-city").val("");
        $("input.new-state").val("");

    });
});
