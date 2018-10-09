function validateEmail(email)
{
    var regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(String(email).toLowerCase());
}

function validate()
{
    var error = document.getElementById("error-msg");
    
    if(!validateEmail(document.myForm.email.value)) {
        error.innerHTML = "Email is not valid";
        return false;
    }
    if(document.myForm.password.value.length <= 3) {
        error.innerHTML = "Password must be longer than 3 characters";
        return false;
    }
    

    return true;
}