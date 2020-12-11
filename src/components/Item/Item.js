import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const Item = ({ value, isDone, onClickDone }) => (
    <span className={
    classnames({
    [styles.item]: true,
    [styles.done]: isDone
  })
  }>
    <Checkbox
    className={styles.checkboxes}
    checked={isDone}
    onClick={() => onClickDone(isDone)}
    color="default"
    inputProps={{ 'aria-label': 'checkbox with default color' }}
    />
    {value}
    <IconButton aria-label="delete" className={styles.icon}>
      <DeleteIcon fontSize="small" />
    </IconButton>
  </span>
);

export default Item;