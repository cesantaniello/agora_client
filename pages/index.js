import React, {useState, useEffect} from 'react';
import { Loader } from 'semantic-ui-react';
import {size} from 'lodash';
import BasicLayout from "../layouts/BasicLayout";
import { getLastGamesApi } from '../api/game';
import ListGames from '../components/ListGames';

export default function Home() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async() => {
      const response = await getLastGamesApi(20);
      if(size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, []);

  return (
      <BasicLayout className="home">
        {!games && <Loader active >Cargando juegos...</Loader>}
        {games && size(games) === 0 && (
          <div><h3>
            No hay juegos disponibles
          </h3></div>
        )}
        {size(games) > 0 && <ListGames games={games} />}
      </BasicLayout>
  );
}