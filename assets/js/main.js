/* Documentação: comportamento e interações da página. */

document.getElementById("anoAtual").textContent = new Date().getFullYear();
// Gancho simples para analytics futuro; configurar GTM/GA4 apenas com os IDs oficiais.
document.querySelectorAll("[data-track]").forEach(function (element) {
  element.addEventListener("click", function () {
    if (typeof window.dataLayer !== "undefined") {
      window.dataLayer.push({
        event: "landing_cta_click",
        cta_name: element.getAttribute("data-track"),
      });
    }
  });
});
