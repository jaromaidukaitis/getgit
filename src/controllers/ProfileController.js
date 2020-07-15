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
		console.log(reqUser.status);
		if (reqUser.status == 200) {
			let userObject = JSON.parse(reqUser.responseText);
			console.log(userObject);

			let userResults = new User(
				userObject.avatar_url,
				userObject.name,
				userObject.bio,
				userObject.html_url,
				userObject.login
			);

			console.log(userResults);

			userCard.innerHTML = ProfileView.profileDisplay(userResults.getUser());
		}
	});

	reqUser.send();
});
