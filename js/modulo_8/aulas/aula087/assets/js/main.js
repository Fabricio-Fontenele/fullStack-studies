const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject({
          code: xhr.status,
          msg: xhr.statusText,
        });
      }
    });
  });
};

document.addEventListener("click", (e) => {
  const element = e.target;
  const tag = element.tagName.toLowerCase();

  if (tag === "a") {
    e.preventDefault();
    carregaPagina(element);
  }
});

async function carregaPagina(element) {
  const href = element.getAttribute("href");
  try {
    response = await request({
      method: "GET",
      url: href,
    });
    loadResult(response);
  } catch (e) {
    console.log("error:", e);
  }
}

function loadResult(response) {
  const result = document.querySelector(".resultado");
  result.innerHTML = response;
}
