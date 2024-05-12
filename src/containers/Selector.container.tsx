import Stack from '@mui/material/Stack';
import { getSelectedOptions } from 'Api/helper';
import { setDefaultInputOutput, setMultimachineSyncing } from 'Api/index';
import { MaterialSelect } from 'Views/MaterialSelect';
import { useEffect, useState } from 'react';
import { Options } from 'src/constants';
import { OptionKeys, OptionObject, SelectedOptionsType } from 'src/types';

export const SelectorContainer = () => {
  const options: OptionObject = JSON.parse(JSON.stringify(Options));

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({});

  useEffect(() => {
    getSelectedOptions().then((data) => {
      console.log('final', data);
      options['Camera names'].values = (data['Camera names'] as string[]) ?? [];
    });
  }, []);

  const handler = (key: OptionKeys, newValue: string) => {
    console.log(key, newValue);
    setSelectedOptions({ ...selectedOptions, [key]: newValue });

    switch (key) {
      case 'Multi-machine syncing':
        setMultimachineSyncing(newValue);
        break;

      case 'Default “Input/Output”':
        setDefaultInputOutput(newValue);
        break;
    }
  };

  return (
    <Stack mt={5} ml={-2} gap={2}>
      {Object.entries(options).map(([key, option]) => (
        <MaterialSelect
          key={key}
          title={key as OptionKeys}
          options={option.values}
          selected={selectedOptions[key as OptionKeys]}
          onChange={handler}
        />
      ))}
    </Stack>
  );
};
