import React, { useState, useEffect } from 'react';
import styles from './Todo.module.css';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const initialState = {
    items: JSON.parse(localStorage.getItem('items')) || [],
    count: JSON.parse(localStorage.getItem('count')) || 0,
    all: JSON.parse(localStorage.getItem('all')) || 0,
    filter: 'all'
  };

const [items, setTodoItem] = useState(initialState.items);
const [count, setCount] = useState(initialState.count);
const [filter, setFilter] = useState(initialState.filter);
const [all, setAll] = useState(initialState.all);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
  localStorage.setItem('count', JSON.stringify(count));
  localStorage.setItem('all', JSON.stringify(all));
	}, [items, count, all]);

const onClickDone = id => {
  const newItemList = items.map(item => {
    const newItem = {...item};
    if(item.id === id){
      newItem.isDone = !item.isDone;
    }

    return newItem;
  });
  const newCount = newItemList.filter(newItem => newItem.isDone !== true).length;
  setCount(newCount);
  setTodoItem(newItemList);
};

const onClickDelete = id => {
  const newItemList = items.filter(item => item.id !== id);
  setTodoItem(newItemList);
  setCount(count - 1);
};

const onClickAdd = value => {
  const newItems = [
    ...items,
    {
      value,
      isDone: false,
      id: all + 1
    }
  ];
  setTodoItem(newItems);
  setCount(count => count + 1);
  setAll(all => all + 1);
}

const filterItems = () => {
  if (filter === 'all') {
    return items;
  } else if (filter === 'active') {
    return items.filter((item) => !item.isDone);
  } else if (filter === 'done') {
    return items.filter((item) => item.isDone);
  }
};
const onClickFilter = filter => {
  setFilter(filter);
}

  return (
    <>
    <h1 className={styles.title}>Задачи</h1>
    <InputItem onClickAdd={onClickAdd} 
    items={items} />
    <ItemList
    items={items} 
    filterItems={filterItems}
    onClickDone={onClickDone} 
    onClickDelete={onClickDelete} 
    />
    <Footer count={count}
    filter={filter}
    onClickFilter={onClickFilter} />
    </>
  );
};

export default App;