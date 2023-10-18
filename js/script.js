let msgContainer = document.getElementById("msgContainer");

function sendInput(){
    let msgBlock = document.createElement("div");
    msgBlock.classList.add("msg-from-student")
    let paraEle = document.createElement("p");
    let inputValue = document.getElementById("inputValue");
    if(inputValue.value!==""){
        paraEle.textContent = inputValue.value;
        paraEle.style.fontSize = "20px"
        msgBlock.appendChild(paraEle);
        inputValue.value = "";
        msgContainer.appendChild(msgBlock);
        let breakEl = document.createElement("br");
        msgContainer.appendChild(breakEl);
    }
}