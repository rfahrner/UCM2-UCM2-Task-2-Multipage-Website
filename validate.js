let form = document.getElementById('userForm')

function emailVerify(event) {
    let one = document.getElementById('verifyEmail').value;
    let two = document.getElementById('email').value; 
    if (one === two) {return true;} 
    else {
        alert("Emails entered do not match");
        event.preventDefault();
        return false;
    }
}
form.addEventListener("submit",emailVerify)