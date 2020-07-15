class ErrorView {
	constructor() {
		throw new Error("Essa classe não pode ser instanciada");
	}

	static errorDisplay(error) {
		return `
		<div id="user">
			<img
				src="./assets/github-seeklogo-black.svg"
				alt=""
				id="user-pic"
			/>
			<div id="user-info">
				<h2 id="user-name">${error.status}</h2>
                <p id="user-bio">${error.message}</p>
			</div>
		</div>
        `;
	}
}
