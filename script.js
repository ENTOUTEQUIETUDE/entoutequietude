function sendMail(){
    let parms = {
        nom : document.getElementById('naom').value,
        email : document.getElementById("email").value,
        sujet : document.getElementById('sujet').value,
        message : document.getElementById("message").value,
        numero : document.getElementById("numero").value,
    } 
    emailjs.send("service_uro0v3i","template_kou6wdl",parms).then(alert("Message envoyé !"))
}
