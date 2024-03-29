import React from 'react';
import Title from './styles/Title';
import ItemStyles from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import {Link} from 'react-router-dom';
import AddToCart from './AddToCart';

const Item = (props) => {


    const { item } = props;
    return (
        <ItemStyles>
          {item.img && <img src={item.img} alt={item.title} />}
          
          <Title>
            <Link
                to={{
                  pathname: `/item/${item.id}`
                }}
            >
              {item.title}
            </Link>
          </Title>
          <PriceTag>{formatMoney(item.price)}</PriceTag>
          <p>Sold by {item.store.name}</p>
          <p>{item.description}</p>
          
          <div className="buttonList">
            {/*<Link*/}
            {/*    to={{*/}
            {/*      pathname: 'update',*/}
            {/*      query: { id: item.id },*/}
            {/*    }}*/}
            {/*>*/}
            {/*  Edit<span role="img" aria-label="pen"> ✏️</span>*/}
            {/*</Link>*/}
            <AddToCart id={item.id} />
            {/*<button>Delete </button>*/}
          </div>
        </ItemStyles>
    );
  
}

export  default Item;
