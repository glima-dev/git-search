function renderUser() {
    const profilesList = getLastedProfiles();
    const index = getIndexUserToRender();
    let foundUser = profilesList[index];

    const { avatar_url, name, bio, email, repos_url } = foundUser;

    setUserHeader(avatar_url, name, bio, email);
    reposRender(repos_url);
}

function setUserHeader(avatarUrl, name, bio, email) {
    const imgAvatar = document.querySelector(".user-profile");
    const userName = document.getElementById("user-name");
    const userBio = document.getElementById("user-bio");
    const userMail = document.getElementById("user-mail");

    if (bio === null) {
        bio = "Profissional de TI";
    }
    if (email === null) {
        email = "emailNaoFornecido";
    }

    imgAvatar.src = avatarUrl;
    userName.innerText = name;
    userBio.innerText = bio;
    userMail.href = `mailto:${email}`;
}

async function reposRender(reposUrl) {
    const reposList = await reposRequest(reposUrl)
    const ulReference = document.querySelector(".user-repository-list");
    ulReference.innerHTML = "";

    if (reposList.length === 0) {
        const divContainer = document.createElement("div");
        const tagNoRepository = document.createElement("p");

        divContainer.classList = "flex items-center justify-center width-100";
        tagNoRepository.classList = "title-4 line-height-1 color-grey-7-60";

        tagNoRepository.innerText = "Usuário não possui repositórios...";

        divContainer.appendChild(tagNoRepository);
        ulReference.appendChild(divContainer);
    } else {

        reposList.forEach(repository => {
            let { html_url, name, description } = repository;

            if (description === null) {
                description = "Descrição não fornecida pelo usuário.";
            }

            ulReference.insertAdjacentHTML("beforeend", `
                <li class="user-repository flex flex-col gap-22 background-grey-2">
                    <h2 class="title-3 color-grey-7 overflow-title">${name}</h2>
                    <p class="text-3 overflow-text color-grey-7-60">${description}</p>
                    <div class="user-bt-div flex width-max">
                        <a
                        class="width-max text-2 color-grey-7 background-grey-2"
                        href="${html_url}"
                        target="_blank"
                        >Repositório</a>
                        <a
                        class="width-max text-2 color-grey-7 background-grey-2"
                        href="/pages/profile/demo"
                        target="_blank"
                        >Demo</a>
                    </div>
                </li>       
        `)
        });
    }
}

function renderRecentSearchsList() {
    const ulRecentSearchs = document.querySelector(".recent-searchs");
    let lastProfilesList = getLastedProfiles();
    ulRecentSearchs.innerHTML = "";

    if (lastProfilesList.length > 0) {
        lastProfilesList.forEach((user, index) => {
            let { avatar_url } = user;

            ulRecentSearchs.insertAdjacentHTML("beforeend", `            
                <li class="flex flex-col width-max">
                    <img id=""
                    class="recent-profile"
                    src="${avatar_url}"
                    alt="Foto perfil do usuário"/>
                    <p id="${index}" class="bt-recent-profile hidden">Acessar este perfil</p>
                </li>       
            `)
            const currentBtRecentUser = document.getElementById(`${index}`);
            currentBtRecentUser.addEventListener("click", () => {
                setIndexUserToRender(index);
                changeCurrentPage();
            })
        });
    }
}







