const form = document.querySelector("#projekt-urlap");
const redirect = document.createElement("input");
redirect.type = "hidden";
redirect.name = "_next";
redirect.value = new URL("/koszonjuk.html", window.location.origin).href;
form.append(redirect);

const service = form.elements.namedItem("service");
document.querySelectorAll("a[data-service]").forEach((link) => {
  link.addEventListener("click", () => {
    service.value = link.dataset.service;
  });
});
