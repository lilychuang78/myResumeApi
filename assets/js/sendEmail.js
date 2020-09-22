function sendMail(contactForm) {
    // Just for test
    console.log(contactForm.emailaddress.value);
    console.log(contactForm.projectsummary.value);
    // 
    emailjs.send("service_mb8k0vn", "template_8mr44vr", {
        "from_name": contactForm.name.value, //name is given in contact.html
        "from_email": contactForm.emailaddress.value, //emailaddress is given in contact.html
        "project_request": contactForm.projectsummary.value //projectsummary is given in contact.html
    }, "user_SymNMEJn92ZzIBFoCXRIY")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}