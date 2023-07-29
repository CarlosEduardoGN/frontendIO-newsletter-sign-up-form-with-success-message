
window.onload = insereEmail()
function insereEmail(){
    document.getElementById("strong").innerHTML = localStorage.getItem('email');;
}

function voltar(){
    location.href="index.html";
}


