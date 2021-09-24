function sleep(ms) {
    new Promise((r) => setTimeout(r, 2000));
}

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
        .then((response) => response.json())
        .then((data) => console.log(data));
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
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
}

export function getCdList(callback) {
    getList("/api/cds", callback);
}
export function getMarketsList(callback) {
    getList("/api/markets", callback);
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
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
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
            console.log(data);
        });
}
