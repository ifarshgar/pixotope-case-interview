import { OptionObject } from './types';

export enum TextFieldType {
  plainText = 'plain-text',
  encryptedText = 'encrypted-text',
}

export const Options: OptionObject = {
  'Multi-machine syncing': {
    id: 'State.General.MultimachineSyncing',
    values: ['Timecode', 'Off'],
  },
  'Default “Input/Output”': {
    id: 'State.Defaults.Type',
    values: ['AJA', 'BMD', 'NDI', 'SRT', 'File'],
  },
  'Camera names': {
    id: 'State.Cameras',
    values: [],
  },
};
