const baseUrl = `https://api.github.com/users/`;
const contentHeaders = {
    'Content-Type': 'application/json'
}

async function requestUser(user) {
    try {
        const response = await fetch(`${baseUrl}${user}`, {
            method: 'GET',
            headers: contentHeaders
        })

        if (response.ok) {
            let userResponse = await response.json();
            setLocalStorage(userResponse);
            setIndexUserToRender();
            buttonSearchLoading();
            changeCurrentPage();
        } else {
            informError();
            buttonSearchLoading();
        }
    } catch (error) {
        throw new Error(error)
        console.log(error);
    }
}

async function reposRequest(reposUrl) {
    try {
        const response = await fetch(reposUrl, {
            method: 'GET',
            headers: contentHeaders
        })
        const reposResponse = await response.json();
        return reposResponse;
    } catch (error) {
        console.log(error);
    }
}



















