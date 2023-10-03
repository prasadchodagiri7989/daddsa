let msgContainer = document.getElementById("msgContainer");

function sendInput(){
    let paraEle = document.createElement("p");
    let inputValue = document.getElementById("inputValue");
    paraEle.textContent = inputValue.value;
    msgContainer.appendChild(paraEle);
    inputValue.value = "";
}