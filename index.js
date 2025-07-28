exports.handler = async (event, context) => {
	// Bail if not a user self sign-up
	if (event.triggerSource != "PreSignUp_SignUp") {
		return event;
	}

	// Always disable auto-confirm of accounts
	event.response.autoConfirmUser = false;
	event.response.autoVerifyPhone = false;
	event.response.autoVerifyEmail = false;

	// Let user through and verify their email account
	return event;
};
