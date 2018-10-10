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

     if(document.myForm.name.value == "") {
        error.innerHTML = "Name must be filled";
        return false;
    }

    if(document.myForm.city.value == "") {
        error.innerHTML = "City must be filled";
        return false;
    }

     if(document.myForm.adress.value == "") {
        error.innerHTML = "Adress must be filled";
        return false;
    }
    

    return true;
}