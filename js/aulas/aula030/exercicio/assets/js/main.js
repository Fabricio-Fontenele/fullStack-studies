data = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};
const formatedData = data.toLocaleDateString("pt-br", options);

h1 = document.querySelector(".container h1");
h1.innerHTML = formatedData;
