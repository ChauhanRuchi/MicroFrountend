import faker from "faker";

const mount=(el)=>{
const number= `<div>yoy have${faker.random.number()}item in your cart</div>`;
el.innerHTML = number;

}

if (process.env.NODE_ENV === "development") {
  const elment = document.querySelector("#div-cart")
  if (elment) {
    mount(elment);
  }
}

export{mount}