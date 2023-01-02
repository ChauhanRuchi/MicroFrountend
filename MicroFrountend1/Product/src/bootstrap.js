import faker from "faker";

// document.querySelector("#div-product").innerHTML = product;

const mount = (el) => {
  let product = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    product += `<div>${name}</div>`;
  }
  el.innerHTML = product;
};
if (process.env.NODE_ENV === "development") {
  const elment = document.querySelector("#div-product");
  if (elment) {
    mount(elment);
  }
}

export { mount };
