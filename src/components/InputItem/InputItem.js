import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { LensTwoTone } from '@material-ui/icons';

let helper = "Добавить задание";
let text;
class InputItem extends React.Component {
    state = {
      inputValue: ''
    };

    onButtonClick = () => {
      this.setState({
        inputValue: ''
      });
      if (!this.state.inputValue) {
        helper = 'Пустое поле! Добавьте задание.';
        text = '';
      } else {
      
      this.props.onClickAdd(this.state.inputValue.toUpperCase());
      helper = 'Добавить задание';
      text = undefined;
      }
    }

    render() {
      const { onClickAdd } = this.props;

      return (<div>
          <TextField
            error={text === ''}
            label={helper}
            id="outlined-margin-normal"
            margin="dense"
            fullWidth
            variant="outlined"
            value={this.state.inputValue.toUpperCase()}
            onChange={event => this.setState({inputValue: event.target.value})}
          />
          <Button 
            variant="contained"
            fullWidth
            onClick={this.onButtonClick}
          >
            Добавить
          </Button>
        </div>);
  }
}


export default InputItem;