import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { CustomTooltip } from './CustomTooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import { OptionKeys } from 'src/types';

export const MaterialSelect: React.FC<{
  title: OptionKeys;
  options: string[];
  selected?: string | string[];
  onChange: (id: OptionKeys, newValue: string) => void;
}> = ({ title, options, selected, onChange }) => {
  const availableOptions = options.length === 0 ? ['No data'] : options;
  const selectedOption = Array.isArray(selected) ? selected[0] : selected;

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <FormControlLabel
        control={
          <CustomTooltip title={title}>
            <Select
              value={selectedOption ?? availableOptions[0]}
              disabled={options.length === 0}
              onChange={(e) => onChange(title, e.target.value)}
              sx={{
                height: 50,
                width: '100%',
                ml: 2,
                backgroundColor: 'white',
              }}
            >
              {availableOptions.map((op) => (
                <MenuItem key={op} value={op}>
                  {op}
                </MenuItem>
              ))}
            </Select>
          </CustomTooltip>
        }
        label={title}
        labelPlacement="start"
        sx={{
          'color': 'white',
          'width': '100%',
          '.MuiFormControlLabel-label': { width: '170px' },
        }}
      />
    </FormControl>
  );
};
