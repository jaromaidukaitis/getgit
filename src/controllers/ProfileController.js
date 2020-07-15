let $ = document.querySelector.bind(document);

let searchButton = $("#button");
let username;
let urlPattern = "https://api.github.com/users/";
let userCard = $("#user-card");

searchButton.addEventListener("click", function () {
	username = $("#git-username").value;
	url = `${urlPattern}${username}`;

	let reqUser = new XMLHttpRequest();
	reqUser.open("GET", url);

	reqUser.addEventListener("load", () => {
		if (reqUser.status == 200) {
			let userObject = JSON.parse(reqUser.responseText);

			let userResults = new User(
				userObject.avatar_url,
				userObject.name,
				userObject.bio,
				userObject.html_url,
				userObject.login
			);

			userCard.innerHTML = ProfileView.profileDisplay(userResults.getUser());
		} else {
			let errorObject = JSON.parse(reqUser.responseText);

			let errorResults = new Error(reqUser.status, errorObject.message);
			console.log(errorObject);
			console.log(errorResults);

			userCard.innerHTML = ErrorView.errorDisplay(errorResults.getError());
		}
	});

	reqUser.send();
});
