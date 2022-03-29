import React, { useEffect, useState } from 'react';
import { size, forEach } from 'lodash';
import BasicLayout from "../layouts/BasicLayout";
import { getFavoriteApi } from '../api/favorite';
import useAuth from '../hooks/useAuth';

export default function wishlist() {
  const [ games, setGames ] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async() => {
      const response = await getFavoriteApi(auth.idUser, logout);
      setGames(response);
    })();
  },[]);

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

//ToDo: revisar error de auth.idUser en línea 13