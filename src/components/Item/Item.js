import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(() => console.log('componentDidMount'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { value, isDone, onClickDone, onClickDelete, id } = this.props;

    return (
    <span className={
        classnames({
        [styles.item]: true,
        [styles.done]: isDone
      })
      }>
        <Checkbox
          className={styles.checkboxes}
          checked={isDone}
          onClick={() => onClickDone(id)}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        {value}
        <IconButton 
          onClick={() => onClickDelete(id)} 
          aria-label="delete" 
          className={styles.icon}>
          <DeleteIcon fontSize="small" />
        </IconButton>
      </span>
    )
  }
}

export default Item;