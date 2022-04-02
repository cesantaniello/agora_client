import { toast } from 'react-toastify';
import { size, includes, remove } from 'lodash';
import { BASE_PATH, CART } from "../utils/constants";

export function getProductsCart(){
  const cart = localStorage.getItem(CART);

  if (cart){
    const products = cart.split(",");
    return products;
  } else {
    return null;
  }
}

export function addProductCart(product){
  const cart = getProductsCart();

  if (!cart){
    localStorage.setItem(CART, product);
    toast.success("Producto agregado al carrito de compras");
  } else {
    const productFound = includes(cart, product);
    if(productFound){
      toast.warning("El producto ya se encuentra en el carrito de compras");
    } else {
      cart.push(product);
      localStorage.setItem(CART, cart);
      toast.success("Producto agregado al carrito de compras");
    }
  }
}