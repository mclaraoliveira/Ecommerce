import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NOVAS COLEÇÕES</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
            className="foto"
          />
        ))}
      </div>
    </div>
  );
}

export default NewCollections;
