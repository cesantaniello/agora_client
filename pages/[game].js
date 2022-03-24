import React from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../layouts/BasicLayout';

export default function Game() {
  const {query} = useRouter();

  return (
    <div>
      <h1>Estamos en game: {query.game}</h1>
    </div>
  )
}
