import React, {useState, useEffect} from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { getGameByUrlApi } from '../api/game';
import useCart from '../hooks/useCart';
import SummaryCart from '../components/Cart/SummaryCart';
import AddressShipping from '../components/Cart/AddressShipping';
import Payment from '../components/Cart/Payment';

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
  const [address, setAddress] = useState(false);

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
      <AddressShipping setAddress={setAddress}/>
      {address && <Payment products={productsData} address={address}/>}
    </BasicLayout>
  )
}