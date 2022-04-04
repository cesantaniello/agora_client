import React, {useState, useEffect} from 'react';
import { Table, Image, Icon } from 'semantic-ui-react';
import { forEach, map } from 'lodash';
import useCart from '../../../hooks/useCart';

export default function SummaryCart(props) {
  const { products } = props;
  return (
    <div className='summary-cart'>
      <div className='title'>Resumen del carrito</div>
      <div className='data'>
        <Table celled structured>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Producto</Table.HeaderCell>
              <Table.HeaderCell>Plataforma</Table.HeaderCell>
              <Table.HeaderCell>Entrega</Table.HeaderCell>
              <Table.HeaderCell>Precio</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {map(products, (product) => (
              <Table.Row key={product.id} className="summary-cart__product">
                <Table.Cell>
                  <Icon 
                    name='close' 
                    link 
                    onClick={
                      () => console.log("Borrado de producto")
                    } />
                  <Image src={product.poster.url} alt={product.title}/>
                  {product.title}
                </Table.Cell>
                <Table.Cell>{product.platform.title}</Table.Cell>
                <Table.Cell>24/48 Horas</Table.Cell>
                <Table.Cell>{product.price} €</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  )
}
