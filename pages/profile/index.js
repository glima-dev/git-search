function switchUser() {
    const btSwitch = document.querySelector(".change-user");
    
    btSwitch.addEventListener("click", () => {
        changeCurrentPage();
        setTimeout(() => {
            profilePageCleaner()
        }, 30);
    })
}

function profilePageCleaner() {
    const imgAvatar = document.querySelector(".user-profile");
    const userName = document.getElementById("user-name");
    const userBio = document.getElementById("user-bio");
    const userMail = document.getElementById("user-mail");
    const ulReference = document.querySelector(".user-repository-list");
    
    imgAvatar.src = "";
    userName.innerText = "";
    userBio.innerText = "";
    userMail.href = "";
    ulReference.innerHTML = "";
}

renderUser();
switchUser();