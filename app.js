//to input text dynamically
$(".ad-container-header").html("Find more savings here");

//validate the form using the jQuery validate plugin
$("form").validate({
	rules: {
		name: "required",
		phone: {
			required: true,
			digits: true,
			minlength: 10,
			maxlength: 10
		},
		email: {
			required: true,
			email: true
		},
		messages: {
			name: "This field is required",
			phone: {
				required: "Please enter a valid phone number",
				digits: "Please enter a valid phone number",
				minlength: "Please enter a valid phone number",
				maxlength: "Please enter a valid phone number"
			},
			email: {
                required: "Please enter a valide email",
                email: "Please enter a valid email"
            }
		}
	},
	//if validation is successful, add the class of "valid"
	success: function(element) {
        element.addClass("valid");
    },
    submitHandler: function(form) {
    	if((this).valid()) {
			console.log("valid form");

			$.ajax({
				url: "https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar",
				method: "POST"
			}).done(function(response) {
				console.log("ajax response: ", response);
			});
			$("#modal").css("display", "flex");
		}
	return false;
    }
});