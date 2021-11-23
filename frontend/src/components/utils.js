/**
 *  declares functions to communicate with the backend and fetch data
 */

export function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                    cookie.substring(name.length + 1)
                );
                break;
            }
        }
    }
    return cookieValue;
}

export function register(username, email, password) {
    fetch("/api/users/", {
        method: "POST",
        mode: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
        }),
    })
        
    
}

export function createRecord(name, amount) {
    var csrftoken = getCookie("csrftoken");
    fetch("api/cds/", {
        credentials: "include",
        method: "POST",
        mode: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ name: name, amount: amount }),
    })
}

export function getFoodsList(callback) {
    getList("/api/foods/", callback);
}

export function getCdList(callback) {
    getList("/api/cds/", callback);
}
export function getMarketsList(callback) {
    getList("/api/markets/", callback);
}

export function getFavoritesList(callback) {
    getList("/api/favorites/1/", callback);
}

export function retrieveFavorites(callback) {
    retrieve("/api/favorites-self/", callback);
}

function getList(search, callback) {
    fetch(search)
        .then((response) => response.json())
        .then((data) => {
            // sort the data and return it with the callback
            callback(
                data.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            );
        })
        .catch((err) => {
            callback([]);
        });
}

export function retrieveFood(uuid, callback) {
    return retrieve(`/api/foods/${uuid}`, callback);
}

export function retrieveMarket(uuid, callback) {
    return retrieve(`/api/markets/${uuid}`, callback);
}

function retrieve(url, callback) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            callback(data);
        })
        .catch((err) => callback(""));
}

export function deleteCd(id) {
    fetch(`api/cds/${id}`, {
        credentials: "include",
        method: "DELETE",
        mode: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({ id: id }),
    })
        
}

export function update(id, name, amount) {
    let search = `api/cds/${id}/`;
    let csrftoken = getCookie("csrftoken");

    fetch(search, {
        credentials: "include",
        method: "PUT",
        mode: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ name: name, amount: amount }),
    })
        .then((response) => response.json())
        .then((data) => {
        });
}

export function addMarketFavorite(uuid) {
    addFavorite(`markets/${uuid}`);
}

export function addFoodFavorite(uuid) {
    addFavorite(`foods/${uuid}`);
}

function addFavorite(uuid) {
    let csrftoken = getCookie("csrftoken");
    fetch(`/api/add-favorite/${uuid}`, {
        credentials: "include",
        method: "PUT",
        mode: "same-origin",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRFToken": csrftoken,
        },
    });
}
