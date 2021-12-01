
    function validate()
       {
           
           var name=document.getElementById("name");
           var email= document.getElementById("email");
           var phone=document.getElementById("phone");
           var subject=document.getElementById("subject");
           var regx = /[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
           if(name.value.trim()=="" || email.value.trim()=="" || phone.value.trim()=="")
        {
            alert("All Fields Should be Filled");
            return false;
        }
       else if(subject.value.trim()==""){
           alert("Enter your Query in the subject form")
     return false;
       }
       else if(phone.value.length!=10)
       {
     alert("Enter 10 Digit Correct Mobile Number");
     phone.style.border="4px solid red";
     return false;
       }
       else if(regx.test(phone.value)==false)
       {
   alert("Enter Correct Mobile Number Alphabets are not allowded in Phone Number");
   phone.style.border="4px solid red";
   return false;
       }
       else{
           alert("Thanks " +name.value+" we will Contact you Shortly");
           return true;
       }
       }
   