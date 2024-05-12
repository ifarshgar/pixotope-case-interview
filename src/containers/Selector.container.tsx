import Stack from '@mui/material/Stack';
import { getSelectedOptions } from 'Api/helper';
import { setDefaultInputOutput, setMultimachineSyncing } from 'Api/index';
import { MaterialSelect } from 'Views/MaterialSelect';
import { useEffect, useRef, useState } from 'react';
import { Options } from 'src/constants';
import { OptionKeys, OptionObject, SelectedOptionsType } from 'src/types';

export const SelectorContainer = () => {
  const options = useRef<OptionObject>(Options);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOptionsType>({});

  const update = () => {
    getSelectedOptions().then((data) => {
      console.log(data);
      options.current = {
        ...Options,
        'Camera names': { id: 'State.Cameras', values: (data['Camera names'] as string[]) ?? [] },
      };

      setSelectedOptions({
        'Multi-machine syncing': data['Multi-machine syncing'],
        'Default “Input/Output”': data['Default “Input/Output”'],
      });
    });
  };

  useEffect(() => {
    update();

    const handleFocus = () => {
      update();
    };

    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
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
      {Object.entries(options.current).map(([key, option]) => (
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
