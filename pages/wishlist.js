import React from 'react';
import BasicLayout from "../layouts/BasicLayout";

export default function wishlist() {
  return (
    <BasicLayout className="wishlist">
      <div className='wishlist__block'>
        <div className='title'>Lista de favoritos</div>
        <div className='data'>
          <p>Lista de juegos</p>
        </div>
      </div>
    </BasicLayout>
  )
}
