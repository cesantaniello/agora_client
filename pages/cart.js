import React, {useState, useEffect} from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { getGameByUrlApi } from '../api/game';
import useCart from '../hooks/useCart';
import SummaryCart from '../components/Cart/SummaryCart';

export default function Cart() {
  const {getProductsCart} = useCart();
  const products = getProductsCart();

  return products ? <FullCart products={products}/> : <EmptyCart />;
}

function EmptyCart(){
  return (
    <BasicLayout className="empty-cart">
      <h2>El carrito está vacío</h2>
    </BasicLayout>
  )
}

function FullCart(props){
  const {products} = props;
  const [productsData, setProductsData] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);

  useEffect(() => {
    (async() => {
      const productsTemp = [];
      for await (const product of products){
        const data = await getGameByUrlApi(product);
        productsTemp.push(data);
      }
      setProductsData(productsTemp);
    })();
    setReloadCart(false);
  }, [reloadCart]);

  return (
    <BasicLayout className="empty-cart">
      <SummaryCart 
        products={productsData}
        reloadCart={setReloadCart}
        setReloadCart={setReloadCart}
      />
    </BasicLayout>
  )
}