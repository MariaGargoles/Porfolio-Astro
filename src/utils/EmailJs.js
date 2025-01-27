import emailjs from "emailjs-com";

export const EmailJs = () => {
  emailjs.init("7lhPT7Jxo_6nNdPd1");

  console.log("EmailJS inicializado");

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        emailjs
          .sendForm("service_56t55ps", "template_3wemxsj", form)
          .then((response) => {
            console.log(
              "Correo enviado con éxito!",
              response.status,
              response.text
            );
          })
          .catch((error) => {
            console.error("Error al enviar el correo:", error);
          });
      });
    } else {
      console.error("El formulario no fue encontrado en el DOM.");
    }
  });
};
