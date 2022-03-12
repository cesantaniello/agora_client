import React from 'react';
import {useRouter} from 'next/router';
import BasicLayout from '../../layouts/BasicLayout';

export default function Platform() {
  const {query} = useRouter();

  return (
    <BasicLayout className="platform">
      <h1>Estamos en la plataforma {query.platform} </h1>
    </BasicLayout>
  )
}
