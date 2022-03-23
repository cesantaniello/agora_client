import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import {useRouter} from 'next/router';
import { size } from 'lodash';
import BasicLayout from '../../layouts/BasicLayout';
import { getGamesPlatformApi, getTotalGamesPlatformApi } from '../../api/game';
import ListGames from '../../components/ListGames';

const limitPerPage = 5;

export default function Platform() {
  const {query} = useRouter();
  const [games, setGames] = useState(null);
  const [totalGames, setTotalGames] = useState(null);

  
  const getStartItem = () => {
    const currentPages = parseInt(query.page);
    if (!query.page || currentPages === 1){
      return 0;
    } else {
      return (currentPages - 1) * limitPerPage;
    }
  }

  console.log(getStartItem());
  
  useEffect(() => {
    (async() => {
      if (query.platform) {
        const response = await getGamesPlatformApi(query.platform, limitPerPage, 0);
        setGames(response);    
      }
    })();
  }, [query]);

  useEffect(() => {
    (async() => {
      const response = await getTotalGamesPlatformApi(query.platform);
      setTotalGames(response);
    })();
  }, [query]);

  return (
    <BasicLayout className="platform">
      {!games && <Loader active>Cargando juegos</Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No hay juegos para esta plataforma</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  )
}
