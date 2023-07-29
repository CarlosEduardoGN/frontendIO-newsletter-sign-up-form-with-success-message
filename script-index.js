let emailform = document.getElementById("email-form");
emailform.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let email = document.getElementById("email-input").value;
    if (ValidateEmail(email) == false || email == "") {
        var element1 = document.getElementById("email-input");
        element1.classList.add("unvalid");
        document.getElementById("validemail").style.display = "block";            
    } else {
        localStorage.setItem('email', email);
        location.href="success.html"
    }
});
function ValidateEmail(mail){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}
