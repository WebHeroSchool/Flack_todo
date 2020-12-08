import React from 'react';

const ItemList = () => (
  <ul>
    <li>Проснуться</li>
    <li>Умыться</li>
    <li>Почистить зубы</li>
    <li>Позавтракать</li>
  </ul>
);

const App = () => (
<div>
  <h1>Список дел:</h1>
  <ItemList />
</div>
);

export default App;