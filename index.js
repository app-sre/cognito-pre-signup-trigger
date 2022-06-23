exports.handler = (event, context, callback) => {
	// Bail if not a user self sign-up
	if (event.triggerSource != "PreSignUp_SignUp") {
		callback(null, event);
	}

	// Always disable auto-confirm of accounts
	event.response.autoConfirmUser = false;
	event.response.autoVerifyPhone = false;
	event.response.autoVerifyEmail = false;

	// Verify that email is from the US government or Red Hat
	var domain = event.request.userAttributes.email.split("@")[1];
	if (/.*\.(gov|mil)$/.test(domain) || domain == "redhat.com") {
		// Let user through and verify their email account
		callback(null, event);
	}

	// Return error to Amazon Cognito
	var error = new Error("Sign-up not allowed");
	callback(error, event);
};
