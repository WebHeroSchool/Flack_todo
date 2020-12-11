import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Grid from '@material-ui/core/Grid';

const ItemList = ({ items, onClickDone }) => (
  <ul className={styles.list}>
    {items.map(item => <li key={item.value}>
      <Grid
    container
    direction="column"
    justify="center"
    alignItems="flex-start"
    >
    <Item value={item.value} isDone={item.isDone} onClickDone={onClickDone} /></Grid></li>)}
    
  </ul>
);

export default ItemList;