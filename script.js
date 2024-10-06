function sendMail(){
    let data={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

     // Check if any field is empty
     if (!data.name) {
        alert("Name field is empty");
        return; // Stop the function execution if this field is empty
    }
    if (!data.email) {
        alert("Email field is empty");
        return; // Stop the function execution if this field is empty
    }
    if (!data.subject) {
        alert("Subject field is empty");
        return; // Stop the function execution if this field is empty
    }
    if (!data.message) {
        alert("Message field is empty");
        return; // Stop the function execution if this field is empty
    }
    emailjs.send("service_oqq2179","template_moso2hz",data).then(alert("Email sent!"))


    
}


