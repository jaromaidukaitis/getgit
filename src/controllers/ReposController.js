let reposList = $("#repos-list");

searchButton.addEventListener("click", () => {
	let reqUserRepos = new XMLHttpRequest();

	reqUserRepos.open("GET", `${url}/repos`);

	reqUserRepos.addEventListener("load", () => {
		reposList.innerHTML = "";

		if (reqUserRepos.status == 200) {
			let reqUserReposObject = JSON.parse(reqUserRepos.responseText);
			console.log(reqUserReposObject);
			let repos;
			for (let i = 0; i < reqUserReposObject.length; i++) {
				repos = new Repos(
					reqUserReposObject[i].name,
					reqUserReposObject[i].html_url
				);
				console.log(repos);
				reposList.innerHTML += ReposView.reposDisplay(repos.getRepos());
			}
		}
	});

	reqUserRepos.send();
});
