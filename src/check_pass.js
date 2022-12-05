function CheckPassword(inputtxt,username) 
{ 
    
    var x=document.getElementById("wrngpass")
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(inputtxt.value.match(passw)) 
    { 
        if(username=="admin@gmail.com" && pass=="Admin123"){
            alert('Good Job! move forward......')
        }
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
