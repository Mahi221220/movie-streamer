import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    borderRadius: '20px',
    background: '#e6e6e6',
    fontSize: 13,
    marginRight: 20,
    width: '320px'
  },

  'fieldset': {
    border: 'none'
  }
});


