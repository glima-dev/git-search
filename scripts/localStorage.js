function getLastedProfiles() {
    return JSON.parse(localStorage.getItem("@GitSearch:lastedProfiles")) || [];
}

function setLocalStorage(userResponse) {
    const LastedProfilesLength = getLastedProfiles().length;
    let lastProfilesList = getLastedProfiles();

    if (LastedProfilesLength >= 3) {
        lastProfilesList.pop();
        lastProfilesList.unshift(userResponse);
    } else {
        lastProfilesList.unshift(userResponse);
    }
    localStorage.setItem("@GitSearch:lastedProfiles", JSON.stringify(lastProfilesList));
}

function getIndexUserToRender() {
    return JSON.parse(localStorage.getItem("@GitSearch:indexToBeRender")) || 0;
}

function setIndexUserToRender(index = 0) {
    localStorage.setItem("@GitSearch:indexToBeRender", JSON.stringify(index));
}