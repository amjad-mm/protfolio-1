





function getemail(event){
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault();
  }

  const parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_t5yag4a", "template_yxd1a34", parms)
    .then(function () {
      alert("Email sent successfully!");
    })
    .catch(function (error) {
      alert("Failed to send email");
      console.log(error);
    });

  return false;
}


