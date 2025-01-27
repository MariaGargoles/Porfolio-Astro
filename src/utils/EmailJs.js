import emailjs from "emailjs-com";
import Swal from "sweetalert2";

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

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Correo enviado con éxito!",
              showConfirmButton: false,
              timer: 1500,
            });

            form.reset();
          })
          .catch((error) => {
            console.error("Error al enviar el correo:", error);

            // Mostrar alerta de error
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: "Error al enviar el correo. Intenta nuevamente.",
              showConfirmButton: false,
              timer: 1500,
            });
          });
      });
    } else {
      console.error("El formulario no fue encontrado en el DOM.");
    }
  });
};
