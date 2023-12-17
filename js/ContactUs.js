function emailSend(){

    var Firstname  = document.getElementById('fname').value;
    var Lastname = document.getElementById('lname').value;
    var email = document.getElementById('email').value; 
  
    var messagebody = "Good Day! " + Lastname + ", " + Firstname 
        + " Please wait for 1 to 3 working days. Thank you for reaching us";
      
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "roofinginc.division7@gmail.com",
        Password : "46EDF7FCB0B5B5A86CC918356E5D12EC4815",
        To : email,
        From : "roofinginc.division7@gmail.com",
        Subject : "Contact Form",
        Body : messagebody
    }).then(
      message => alert('Message sent successfully!  Please check your email or in your spam')    
      );
  }