function sendMail(){
    let parms = {
        name : document.getElementById('name').value,
        email : document.getElementById("mail").value,
        message : document.getElementById("message").value,
        numero : document.getElementById("num").value,
    } 
    emailjs.send("service_uro0v3i","template_kou6wdl",parms).then(alert("Message envoyé !"))
}