import { SelectedOptionsType } from 'src/types';
import { getCameras, getDefaultInputOutput, getMultimachineSyncing } from '.';

export const getMultimachineSyncingData = () =>
  getMultimachineSyncing()
    .then((data) => {
      const value = data[0]['Message']['Value'] as string;
      return value;
    })
    .catch(() => {
      console.log('Error in getting MultimachineSyncing data');
      return null;
    });

export const getDefaultInputOutputData = () =>
  getDefaultInputOutput()
    .then((data) => {
      const value = data[0]['Message']['Value'] as string;
      return value;
    })
    .catch(() => {
      console.log('Error in getting DefaultInputOutputData data');
      return null;
    });

export const getCamerasData = () =>
  getCameras()
    .then((data) => {
      const value = data[0]['Message']['Value'];
      const cameras = Object.keys(value).map((id) => value[id]['Name']) as string[];
      return cameras;
    })
    .catch(() => {
      console.log('Error in getting Cameras data');
      return null;
    });

export const getSelectedOptions = async () => {
  const options: SelectedOptionsType = {};

  const multimachineSyncing = await getMultimachineSyncingData();
  const defaultInputOutput = await getDefaultInputOutputData();
  const cameras = await getCamerasData();

  if (multimachineSyncing) {
    options['Multi-machine syncing'] = multimachineSyncing;
  }

  if (defaultInputOutput) {
    options['Default “Input/Output”'] = defaultInputOutput;
  }

  if (cameras) {
    options['Camera names'] = cameras;
  }

  return options;
};
