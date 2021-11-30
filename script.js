const button = document.getElementById("send_message");
let messageList = document.getElementById("messageList");
//botão de executar a frase
function myFunction() {
    console.log(arguments);
    let message = document.querySelector(".message").value;
    let repeat = document.getElementById("repeat").value;
    let messages = document.querySelector(".messages");
    i = 1;
    while (i <= repeat && messageList.childElementCount <= 10) {
        let node = document.createElement("LI");
        node.textContent = message;
        messageList.appendChild(node);
        i++;
    }
}
//botão de deletar a frase
function deleteCount() {
    messageList = document.getElementById("messageList");
    let count = document.querySelector(".counts");
    messageList.children[0].remove();
    let number = parseInt(count.textContent) || 0;
    count.innerText = number + 1;

}

button.onclick = myFunction;
document.querySelector(".delete").onclick = deleteCount;