import { ChangeEvent } from 'react';
import { options } from '../constants/options';

type SelectType = {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value?: number;
};

function InputSelect({ onChange, name }: SelectType) {
  return (
    <select
      className="border border-gray-400 rounded-sm pr-5"
      name={name}
      defaultValue={1}
      onChange={onChange}
    >
      {options.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default InputSelect;
