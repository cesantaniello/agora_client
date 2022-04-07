import React, { useState, useEffect } from 'react';
import { Loader } from 'semantic-ui-react';
import BasicLayout from '../layouts/BasicLayout';
import { size } from 'lodash';
import { useRouter } from 'next/router';
import { searchGamesApi } from '../api/game';
import ListGames from '../components/ListGames';
import Seo from '../components/Seo';

export default function search() {
  const [games, setGames] = useState(null);
  const {query} = useRouter();

  useEffect(() => {
    document.getElementById("search-game").focus();
  }, []);

  useEffect(() => {
    (async() => {
      if (size(query.q) > 0){
        const response = await searchGamesApi(query.q);
        if (size(response) > 0) setGames(response);
        else setGames([]);
      } else {
        setGames([]);
      } 
    })();
  }, [query]);

  return (
    <BasicLayout className="search">
      <Seo title={`Buscando: ${query.q}`}/>
      {!games && <Loader active> Buscando juegos... </Loader>}
      {games && size(games) === 0 && (
        <div>
          <h3>No se encontraron juegos</h3>
        </div>
      )}
      {size(games) > 0 && <ListGames games={games} />}
    </BasicLayout>
  )
}
