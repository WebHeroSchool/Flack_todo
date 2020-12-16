import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({count}) => (
<div>
  <p className={styles.text}>Еще осталось сделать: {count} дел(а)</p>
  <ButtonGroup className={styles.buttons} variant="text" color="default" aria-label="text primary button group">
    <Button className={styles.button} variant="outlined">Все</Button>
    <Button className={styles.button}>Активные</Button>
    <Button className={styles.button}>Выполненные</Button>
    <Button className={styles.button}>Удалить выполненные дела</Button>
  </ButtonGroup>
</div>
);

Footer.defaultProps = {
  count: 2
};

Footer.propTypes = {
  count: PropTypes.number
};

export default Footer;