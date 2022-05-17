const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector(".list");

button.addEventListener('click', function() {
    if(input.value == '') {
        return;
    }

    const chapter = input.value;
    input.value = '';

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listButton = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = chapter;
    listItem.appendChild(listButton);
    listButton.textContent = "❌";
    list.appendChild(listItem);

    listButton.addEventListener("click", function () {
        list.removeChild(listItem);
    });

    input.focus();
});