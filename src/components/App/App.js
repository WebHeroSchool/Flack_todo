import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import styles from './App.module.css';
import Todo from '../Todo/Todo';
import About from '../About/About';
import WebIcon from './img/WHS.png'

const App = () => (
  <div>
  <div><img className={styles.school} src={WebIcon}></img></div>
    <Router>
      <div className={styles.wrap}>
            <MenuList className={styles.menulist}>
              <Link to='/' className={styles.link}><MenuItem>Обо мне</MenuItem></Link>
              <Link to='/todo' className={styles.link}><MenuItem>Задачи</MenuItem></Link>
            </MenuList>
            <div className={styles.content}>
              <Route path='/' exact component={About} />
              <Route path='/todo' component={Todo} />
            </div>
      </div>
    </Router>
  </div>
);

export default App;