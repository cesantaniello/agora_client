import React, { useState, useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { useRouter } from 'next/router';
import { searchGamesApi } from '../api/game';
import { sampleSize, size } from 'lodash';

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
      <h1>Búsqueda...</h1>
    </BasicLayout>
  )
}
