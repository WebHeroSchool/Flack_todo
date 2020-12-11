import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({count}) => (
<div>
  <p className={styles.text}>Еще осталось сделать: {count} дел(а)</p>
<ButtonGroup className={styles.buttons} variant="text" color="default" aria-label="text primary button group">
  <Button variant="outlined">Все</Button>
  <Button>Активные</Button>
  <Button>Выполненные</Button>
  <Button>Удалить выполненные дела</Button>
</ButtonGroup>
</div>
);

export default Footer;