import TextField from '@mui/material/TextField';
import React from 'react';
import { CustomTooltip } from './CustomTooltip';

export const MaterialTextField: React.FC<{
  value: string;
  label: string;
}> = ({ value, label }) => {
  return (
    <CustomTooltip title={label} placement="right">
      <TextField
        placeholder={label}
        variant="outlined"
        InputProps={{ style: { backgroundColor: 'white' } }}
        sx={{ '& fieldset': { borderColor: 'white' } }}
        value={value}
      />
    </CustomTooltip>
  );
};
