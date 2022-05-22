const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#year").textContent = new Date().getFullYear();
    let lastModified = new Date(document.lastModified);
    document.querySelector("#last-update").textContent = `${lastModified.getMonth()}/${lastModified.getDate()}/${lastModified.getFullYear()} ${lastModified.getHours()}:${lastModified.getMinutes()}:${lastModified.getSeconds()}`


    let day = new Date().getDay();
    if(day == 1 || day == 2) {
        document.querySelector(".banner").style.display = "block";
    }
});