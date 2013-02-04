$(function(){
	jQuery.validator.addMethod("postalcode", function(postalcode, element) 
	{
		return this.optional(element) || postalcode.match(/^[0-9][0-9](-| )?[0-9][0-9][0-9]$/);
	}, "");
	jQuery.validator.messages.required = "";
	$("#form").validate({
		invalidHandler: function(e, validator) {
			var errors = validator.numberOfInvalids();
			if (errors) {
				var message = errors == 1 //You can provide Your own message for main "error message"
					? 'You missed 1 field. It has been highlighted below'
					: 'You missed ' + errors + ' fields.  They have been highlighted below';
				$("div.error span").html(message);
				$("div.error").show();
			} else {
				$("div.error").hide();
			}
		},
		//setting for elements (required, etc.)
		rules: {
			subject: {
				required: true
			},
			country: {
				required: true
			},
			name: {
				required: true
			},
			surname: {
				required: true
			},
			telephone: {
				number: true
			},
			fax: {
				number: true
			},
			agree: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			postalcode: {
				postalcode: true
			},
		},
		//You can provide Your own message for each elements
		messages: {
			telephone: '',
			message: {
				required: ''
			},
			fax: '',
			message: {
				required: ''
			},
			email: '',
			message: {
				required: ''
			}
		},
		//responsible for changing the name (label)
		errorElement: "span",
			errorPlacement: function(error, element) {
				error.insertBefore(element.parent().children("input"));
			},
			highlight: function(element) {
				$(element).parent().addClass("error");
			},
			unhighlight: function(element) {
				$(element).parent().removeClass("error");
			}
	});
});