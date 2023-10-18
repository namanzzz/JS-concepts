function validate(){
    let username = document.getElementById("uname");
    let password = document.getElementById("Pass");

    if(username.value.trim() == "" || password.value.trim() == ""){
            alert('Fields can not be empty');
            return false;
    }
    else{
             return true;
    }
}

