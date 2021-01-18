import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item/Item';
import styles from './ItemList.module.css';

const ItemList = ({ filterItems, onClickDone, onClickDelete }) => (
  <ul className={styles.list}>
    {filterItems().map(item => <li className={styles.items} key={item.id}>
    <Item 
      value={item.value} 
      isDone={item.isDone} 
      id={item.id} 
      onClickDone={onClickDone} 
      onClickDelete={onClickDelete} 
    /></li>)}
    
  </ul>
);

ItemList.defaultProps = {
  items: [
    {
      value: 'Пусто',
      isDone: false,
      id: 0
    }
  ]
};

ItemList.propTypes = {
  items: PropTypes.array,
  value: PropTypes.string,
  isDone: PropTypes.bool,
  id: PropTypes.number
};


export default ItemList;