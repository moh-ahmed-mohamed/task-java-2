function formvalidate (){
    var first = document.getElementById('first').value ;
    var surname = document.getElementById('surname').value ;
    var email = document.getElementById('email').value ;
    var password = document.getElementById('password').value ;
    var error = document.getElementById('error');
    var text ='';

    if(first.length < 3){
        text = 'what is name';
        error.innerHTML = text ;
        return false;

       }else if(surname.length <3){
        text = 'what is surname';
        error.innerHTML = text ;
        return false;

       }else if(email.indexOf ('@')== -1 && email.length <16 ){
        text = 'what is email';
        error.innerHTML = text ;
        return false;

       }else if(password.length <8){
        text = 'enter a combination of at least eight numbers';
        error.innerHTML = text ;
        return false;
       }
    }
    
    function formbvalidate (){
        var myemail = document.getElementById('myemail').value;
        var mypassword = document.getElementById('mypassword').value;
        var error = document.getElementById('error');
        var about ='';

    if(myemail.indexOf ('@')== -1 && myemail.length<15){
        about ='pealse enter a email' ;
        error.innerHTML = about ;
        return false ;

    }else if(mypassword.length<8){
        about = 'enter a combination of at least eight numbers';
        error.innerHTML = about ;
        return false;

    }
    }  
 