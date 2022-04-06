import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_TOKEN } from '../../../utils/constants';

const stripePrimise = loadStripe(STRIPE_TOKEN);

export default function Payment(props) {
  const {products, address} = props;

  return (
    <div className='payment'>
      <div className='title'>Pago</div>
      <div className='data'>
        <Elements stripe={stripePrimise}>
          <p>FORMULARIO DE PAGO</p>
        </Elements>
      </div>
    </div>
  )
}
