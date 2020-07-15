class ProfileView {
	constructor() {
		throw new Error("Essa classe não pode ser instanciada");
	}

	static profileDisplay(user) {
		return `
		<div id="user">
			<img
				src="${user.picture}"
				alt=""
				id="user-pic"
			/>
			<div id="user-info">
				<h2 id="user-name">${user.name}</h2>
                <p id="user-bio">${user.bio}</p>
                <span id="git-figure"></span><a href="${user.profile}" target="blank" id="profile-url">github/${user.id}</a>
			</div>
		</div>
        `;
	}
}
