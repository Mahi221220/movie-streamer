import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    background: '#f7f7f7',
    fontSize: 13,
    color:'gray'
  },

  'input': {
    padding: '10px 16px',
  },

  'fieldset': {
    border: 'none'
  }
});


