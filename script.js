window.addEventListener("load", getProducts);

function getProducts() {
  fetch("ap.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((product) => {
        const wrapper = document.querySelector(".wrapper");
        const div = document.createElement("div");
        const div1 = document.createElement("div");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const price = document.createElement("p");
        const text = document.createElement("p");

        img.className = "img";
        img.src = product.img;
        div.appendChild(img);

        h3.className = "title1";
        h3.innerText = product.title;
        div1.appendChild(h3);

        price.className = "price";
        price.innerText = product.price + "сом";
        div1.appendChild(price);

        div1.className = "wrapper-1";
        div.appendChild(div1);

        text.className = "text";
        text.innerText = product.desc;
        div.appendChild(text);

        div.className = "box";

        wrapper.appendChild(div);
      });
    });
}
