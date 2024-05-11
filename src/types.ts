export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;
export type SetStateTypeArray<T> = React.Dispatch<React.SetStateAction<T[]>>;

export type MaterialButtonColor =
  | 'inherit'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'error'
  | 'info'
  | 'warning';

export type OptionKeys = 'Multi-machine syncing' | 'Default “Input/Output”' | 'Camera names';

export type OptionObject = {
  [key in OptionKeys]: {
    id: string;
    values: string[];
  };
};

export type SelectedOptionsType = { [key in OptionKeys]?: string | string[] };
