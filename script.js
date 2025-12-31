function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };
  emailjs
    .send("service_1p75gzl", "template_9r97h7r", templateParams)
    .then(() => alert("Email sent !!").catch(() => alert("Email not sent !!")));
}
