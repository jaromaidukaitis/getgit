class Error {
	constructor(status, message) {
		this._status = status;
		this._message = message;
	}

	getError() {
		return {
			status: this._status,
			message: this._message,
		};
	}
}
