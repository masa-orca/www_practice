document.addEventListener("DOMContentLoaded", function () {
  const faqButtons = document.querySelectorAll(".faq-item");

  faqButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");
      const answer = document.getElementById(targetId);
      const isOpen = answer.classList.contains("open");

      document.querySelectorAll(".faq-answer").forEach((item) => {
        item.classList.remove("open");
      });
      document.querySelectorAll(".faq-icon").forEach((icon) => {
        icon.textContent = "+";
      });

      if (!isOpen) {
        answer.classList.add("open");
        button.querySelector(".faq-icon").textContent = "−";
      }
    });
  });
});
