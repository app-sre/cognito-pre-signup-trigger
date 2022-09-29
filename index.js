exports.handler = (event, context, callback) => {
	// Bail if not a user self sign-up
	if (event.triggerSource != "PreSignUp_SignUp") {
		callback(null, event);
	}

	// Always disable auto-confirm of accounts
	event.response.autoConfirmUser = false;
	event.response.autoVerifyPhone = false;
	event.response.autoVerifyEmail = false;

	// Let user through and verify their email account
	callback(null, event);
};
