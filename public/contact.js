const form = document.querySelector("#projekt-urlap");
const redirect = document.createElement("input");
redirect.type = "hidden";
redirect.name = "_next";
redirect.value = new URL("/koszonjuk.html", window.location.origin).href;
form.append(redirect);
