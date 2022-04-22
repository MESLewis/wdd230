document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#year").textContent = new Date().getFullYear();
    let lastModified = new Date(document.lastModified);
    document.querySelector("#last-update").textContent = `${lastModified.getMonth()}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`

});