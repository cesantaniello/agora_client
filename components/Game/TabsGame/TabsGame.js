import React from 'react';
import { Tab } from 'semantic-ui-react';

export default function TabsGame(props) {
  const { game } = props;

  const panes = [
    {
      menuItem: 'Información',
      render: () => (
        <Tab.Pane>
          <h1>Info Game</h1>
        </Tab.Pane>
      ),
    },
    // Comentarios del juego
    // {
    //   menuItem: 'Comentarios',
    //   render: () => (
    //     <Tab.Pane>
    //       <h1>Lista de comentarios</h1>
    //     </Tab.Pane>
    //   ),
    // },
    // ToDo: Comentarios de usuarios que han jugado el juego    
  ];
  
  return <Tab className='tabs-game' panes={panes} />;
}
