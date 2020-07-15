class User {
	constructor(picture, name, bio, profile, id) {
		this._picture = picture;
		this._name = name || id;
		this._bio = bio || "Que pena, usuário sem bio :/";
		this._profile = profile;
		this._id = id;
	}

	getUser() {
		return {
			picture: this._picture,
			name: this._name,
			bio: this._bio,
			profile: this._profile,
			id: this._id,
		};
	}
}
