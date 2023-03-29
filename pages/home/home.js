function unlockBtSearch() {
    const inputSearch = document.querySelector("input");
    const btSearch = document.querySelector("button");

    inputSearch.addEventListener("keyup", (event) => {
        inputSearch.classList.remove("error")
        if (event.target.value == "") {
            btSearch.classList.remove("active");
        } else {
            btSearch.classList.add("active");
        }
    });
}

function searchGithubUser() {
    const formSearch = document.querySelector("form");
    const inputSearch = document.querySelector("input");
    const btSearch = document.querySelector("button");
    const errorSpan = document.querySelector("span");

    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();
        if (btSearch.classList.contains("active")) {

            buttonSearchLoading();

            const user = inputSearch.value;

            errorSpan.classList.add("hidden");
            inputSearch.value = "";
            requestUser(user);
        }
    });
}

function informError() {
    const inputSearch = document.querySelector("input");
    const errorSpan = document.querySelector("span");
    inputSearch.classList.add("error");
    errorSpan.classList.remove("hidden");
}

function buttonSearchLoading() {
    const btSearch = document.getElementById("bt-search-user");

    if (btSearch.classList.contains("spinner-on")) {
        btSearch.innerHTML = "";
        btSearch.innerText = "Ver perfil do github";
        btSearch.classList.remove("spinner-on");
    } else {
        const img = document.createElement("img");

        btSearch.innerHTML = "";
        btSearch.classList.remove("active");
        btSearch.classList.add("spinner-on");

        img.src = "../../assets/spinner.svg";
        img.alt = "spinner loading";
        img.classList.add("loadings");

        btSearch.appendChild(img);
    }
}

unlockBtSearch();
searchGithubUser()
renderRecentSearchsList();










