import React, {useState, useEffect} from 'react';
import {size} from 'lodash';
import BasicLayout from "../layouts/BasicLayout";
import { getLastGamesApi } from '../api/game';

export default function Home() {
  const [games, setGames] = useState(null);
  console.log(games);

  useEffect(() => {
    (async() => {
      const response = await getLastGamesApi(50);
      if(size(response) > 0) setGames(response);
      else setGames([]);
    })();
  }, []);

  return (
      <BasicLayout className="home">
        <h1>Estamos en Next</h1>
      </BasicLayout>
  );
}

//ToDo: Revisa carga de juegos en console.log(games) linea 8