const img = document.querySelector(".cat-img");
const btn = document.querySelector(".btn");
const url = "https://api.thecatapi.com/v1/images/search";

async function getCat() {
  try {
    const reply = await fetch(url);
    const data = await reply.json();
    img.setAttribute("src", data[0].url);
  } catch (error) {
    console.log(error);
  }
}

getCat();

document.addEventListener("DOMContentLoaded", function () {
  getCat();
});

btn.addEventListener("click", function () {
  if (img.complete) {
    getCat();
  }
});
