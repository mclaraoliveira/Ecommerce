import React, { useContext } from 'react';
import './CSS/CategoriaLoja.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'

export const CategoriaLoja = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Mostrando 1-12</span> de 36 produtos
        </p>
        <div className="shopcategory-sort">
          Ordenar por <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                className="foto"
              />
            );
          }
          return null;
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore Mais
      </div>
    </div>
  );
}

export default CategoriaLoja;
