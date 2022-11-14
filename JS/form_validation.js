function name_validate(value){
    return /^[a-zA-Z]+$/.test(value);
}

function email_validate(value){
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
}

function password_validate(value){
    return /^[a-zA-Z0-9!@#$%^&*()_+]{6,16}$/.test(value);
}

function pincode_validate(value){
    return /^[0-9]{6}$/.test(value);
}



function validate(e){
    e.preventDefault();
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var password = document.getElementById("password").value;
    // var confirm_password = document.getElementById("confirm_password").value;
    // var pin_code = document.getElementById("pincode").value;

    var myform = document.getElementById("myform");
    var name = myform.elements["name"].value;
    // var email = myform.elements["email"].value;
    // var password = myform.elements["password"].value;
    // var confirm_password = myform.elements["confirm_password"].value;
    // var pin_code = myform.elements["pincode"].value;

    // var validation_status = true;

    // if(name == ""){
    //     // alert("Name is required");
    //     document.getElementById("error_name").innerHTML = "Name is required";
    //     validation_status = false;
    // }

    // if(!name_validate(name)){
    //     // alert("Name is not valid");
    //     document.getElementById("error_name").innerHTML = document.getElementById("error_name").innerHTML+"<br>Name is not valid";
    //     validation_status = false;
    // }

    // if(email == ""){
    //     // alert("Email is required");
    //     validation_status = false;
    // }
    // if(password == ""){
    //     // alert("Password is required");
    //     validation_status = false;
    // }
    // if(confirm_password == ""){
    //     // alert("Confirm Password is required");
    //     validation_status = false;
    // }
    // if(pin_code == ""){
    //     // alert("Pin Code is required");
    //     validation_status = false;
    // }

    // // if(name == "" || email == "" || password == "" || confirm_password == "" || pin_code == ""){
    // //     alert("All fields are required");
    // //     return false;
    // // }
    // if(validation_status){
    //     return true;
    // }
    // return false;
    if(name_validate(name)){
        myform.submit();
    }
}


/*

AJAX - Asynchronous JavaScript and XML
-------------------------------------



*/