import React from 'react';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (
  <div>
    <TextField
      label="Добавить задание"
      id="outlined-margin-normal"
      margin="dense"
      fullWidth
      variant="outlined"
    />
  </div>
);

export default InputItem;