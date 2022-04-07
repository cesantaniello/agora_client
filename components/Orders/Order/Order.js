import React, {useState} from 'react';
import { Image, Icon } from 'semantic-ui-react';
import { Link } from 'next/link';
import moment from 'moment';
import "moment/locale/es";
import BasicModal from '../../Modal/BasicModal';

export default function Order(props) {
  const { order } = props;
  const { game, totalPayment, createdAt, addressShipping} = order;
  const { title, poster, url } = game;

  return (
    <>
      <div className="order">
        <div className="order__info">
          <div className="order__info-data">
            <Link href={`/${url}`}>
              <a>
                <Image src={poster.url} alt={title}/>
              </a>
            </Link>
            <div>
              <h2>{title}</h2>
              <p>{totalPayment} €</p>
            </div>
          </div>
          <div className='order__other'>
            <p className='order__other-date'>
              {moment(createdAt).format("L")} - {moment(createdAt).format("LT")}
            </p>
            <Icon 
              name='eye' 
              circular 
              link 
              onClick={
                () => console.log("Ver información")
              } 
            />
          </div>
        </div>
      </div>
    </>
  )
}
