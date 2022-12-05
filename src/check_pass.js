function CheckPassword(inputtxt) 
{ 
    var x=document.getElementById("wrngpass")
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(inputtxt.value.match(passw)) 
    { 
        alert('Correct, try another...')
        return true;
    }
    else
    { 
        alert('Wrong Password...!')
        x.style.display = "block";
        return false;
    }
}
