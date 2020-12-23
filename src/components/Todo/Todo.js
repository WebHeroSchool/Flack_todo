import React, { useState, useEffect } from 'react';
import styles from './Todo.module.css';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const App = () => {
  const initialState = {
        items: [
          {
            value: 'Написать новое приложение',
            isDone: false,
            id: 0
          },
          {
            value: 'прописать props',
            isDone: false,
            id: 1
          },
          {
            value: 'изучить тему',
            isDone: false,
            id: 2
          },
        ],
        count: 3
      };
const [items, setTodoItem] = useState(initialState.items);
const [count, setCount] = useState(initialState.count);

useEffect(() => {
  console.log('update');
});

useEffect(() => {
  console.log('mount');
}, []);

      const onClickDone = id => {
        const newItemList = items.map(item => {
          const newItem = {...item};
          if(item.id === id){
            newItem.isDone = !item.isDone;
          }

          return newItem;
        });

        setTodoItem(newItemList)
      };

      const onClickDelete = id => {
        const newItemList = items.filter(item => item.id !== id);
        setTodoItem(newItemList);
        setCount(count => count - 1);
      };

      const onClickAdd = value => {
        const newItems = [
          ...items,
          {
            value,
            isDone: false,
            id: count + 1
          }
        ];
        setTodoItem(newItems);
        setCount(count => count + 1);
      }

        return (
          <>
          <h1 className={styles.title}>Задачи</h1>
          <InputItem onClickAdd={onClickAdd} />
          <ItemList
          items={items} 
          onClickDone={onClickDone} 
          onClickDelete={onClickDelete} 
          />
          <Footer count={count} />
          </>
        );
};

export default App;