import React from 'react';
import BasicLayout from '../layouts/BasicLayout';

export default function Orders() {
  return (
    <BasicLayout className="orders">
      <div className="orders__block">
        <div className="title">Mis pedidos</div>
        <div className="data">
          <p>Lista de pedidos</p>
        </div>
      </div>
    </BasicLayout>
  )
}
