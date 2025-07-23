document.addEventListener("DOMContentLoaded", function () {
    let params = new URLSearchParams(document.location.search);
    let name = params.get("name");

    if (name) {
        document.getElementById("thankyou").textContent = `Thank you for your message, ${name}!`;
    }
    else {
        document.getElementById("thankyou").textContent = `Thank you for your message!`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (e) {
    const username = document.getElementById("name").value.trim();
    const nextInput = document.getElementById("next-url");

    const encodedName = encodeURIComponent(username);
    nextInput.value = `https://tebasmartinez.github.io/portfolio_website/thankyou.html?name=${encodedName}`;
    });
});