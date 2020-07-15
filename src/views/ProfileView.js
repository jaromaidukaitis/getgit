class ProfileView {
	constructor() {
		throw new Error("Essa classe não pode ser instanciada");
	}

	static profileDisplay(user) {
		return `
			<img
				src="${user.picture}"
				alt=""
				id="user-pic"
			/>
			<div id="user-info">
				<h2 id="user-name">${user.name}</h2>
                <p id="user-bio">${user.bio}</p>
                <a href="${user.profile}" target="blank" id="profile-url">github/${user.id}</a>
			</div>
        `;
	}
}
