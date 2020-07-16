class ReposView {
	constructor() {
		throw new Error("Essa classe não pode ser instanciada");
	}

	static reposDisplay(repos) {
		return `
            <a href="${repos.reposLink}" class="card" target="_blank">
                <li>
                    ${repos.reposName}
                </li>
            </a>
        `;
	}
}
