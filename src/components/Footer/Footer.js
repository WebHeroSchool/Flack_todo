import React from 'react';
import PropTypes from 'prop-types';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Footer = ({count, onClickFilter}) => (
<div>
  <p className={styles.text}>Еще осталось сделать: {count} дел(а)</p>
  <ButtonGroup className={styles.buttons} variant="text" color="default" aria-label="text primary button group">
    <Button className={styles.button} onClick={() => onClickFilter('all')}>Все</Button>
    <Button className={styles.button} onClick={() => onClickFilter('active')}>Активные</Button>
    <Button className={styles.button} onClick={() => onClickFilter('done')}>Выполненные</Button>
  </ButtonGroup>
</div>
);

Footer.defaultProps = {
  count: 0
};

Footer.propTypes = {
  count: PropTypes.number
};

export default Footer;