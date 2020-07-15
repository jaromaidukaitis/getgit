class Repos {
	constructor(reposName, reposLink) {
		this._reposName = reposName;
		this._reposLink = reposLink;
	}

	getRepos() {
		return {
			reposName: this._reposName,
			reposLink: this._reposLink,
		};
	}
}
