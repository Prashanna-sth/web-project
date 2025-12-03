document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Your message has been sent! Thank you for contacting us.");
      form.reset();
    });
  }
});

