import { mount as productmout} from "products/ProductsIndex";
import {mount as cartmount} from "cart/cartShow";
productmout(document.querySelector("div-product"));
cartmount(document.querySelector("div-cart"));

//  import "app1/app1Show";
// import "app/appShow";
console.log("!container");
