const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };
    const webAppURL = "https://script.google.com/macros/s/AKfycbxVycVBd-MC4le9jEulx7NQg_CjN6Oup6t6vNM3NErS0RqpREvaU1srmggMEylRkM4r/exec";
    fetch(webAppURL, {
        method: "POST",
        body: new URLSearchParams(data)
    })
    .then(response => response.text())
    .then(result => {
        alert(result); 
        form.reset();  
    })
    .catch(error => {
        alert("Error: " + error);
    });
});
