function SubmitByID()
{
    var txtFname = document.getElementById("fname");
    var txtLname = document.getElementById("lname");
    var payment = document.getElementById("payment");
    var err_msg = "";
    var areacode = document.getElementById("acode");
    var phone_number = document.getElementById("phone");
    var city = document.getElementById("city");
    var province = document.getElementById("province");
    var zip = document.getElementById("zip");
    var country = document.getElementById("country");
    var txtEmail = document.getElementById("email_id");
    var v_email = document.getElementById("v_email");
    var street = document.getElementById("street_address");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(txtFname.value == ""){
        err_msg += "Enter your first name\n";
        txtFname.style.borderColor = "red";
        txtFname.style.borderWidth = "thick";
    }
    if(txtLname.value == ""){
        err_msg += "Enter your last name\n";      
        txtLname.style.borderColor = "red"; 
        txtLname.style.borderWidth = "thick";             
    }
    if(payment.value == ""){
        err_msg += "Enter your payment selection\n";      
        payment.style.borderColor = "red";    
        payment.style.borderWidth = "thick";             
    }
    if(areacode.value == ""){
        err_msg += "Enter your area code\n";      
        areacode.style.borderColor = "red";    
        areacode.style.borderWidth = "thick";             
    } 
    if(phone_number.value == ""){
        err_msg += "Enter your phone number\n";      
        phone_number.style.borderColor = "red";    
        phone_number.style.borderWidth = "thick";             
    }
    if (!(txtEmail.value.match(validRegex))) {
        err_msg += "Enter a valid email id \n";
        txtEmail.style.borderColor = "red";    
        txtEmail.style.borderWidth = "thick";             
    }
    if(city.value == ""){
        err_msg += "Enter your city\n";      
        city.style.borderColor = "red";    
        city.style.borderWidth = "thick";             
    }
    if(province.value == ""){
        err_msg += "Enter your province\n";      
        province.style.borderColor = "red";    
        province.style.borderWidth = "thick";             
    }
    if(zip.value == ""){
        err_msg += "Enter your zip code\n";      
        zip.style.borderColor = "red";    
        zip.style.borderWidth = "thick";             
    }
    if(country.value == ""){
        err_msg += "Enter your country\n";      
        country.style.borderColor = "red";    
        country.style.borderWidth = "thick";             
    }
    if(street.value == ""){
        err_msg += "Enter your street address\n";      
        street.style.borderColor = "red";    
        street.style.borderWidth = "thick";             
    }
    if(err_msg != ""){
        alert(err_msg);                    
        return false;
    }
}     