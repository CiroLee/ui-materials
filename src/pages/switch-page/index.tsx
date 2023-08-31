import { useState } from 'react';
import ShowBox from '@/components/ShowBox';
import Switch from '@/packages/components/Switch';
import { CheckIcon, Cross2Icon } from '@radix-ui/react-icons';

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <h2 className="mb-4">Switch</h2>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <p className="mb-1">switch: {checked ? 'on' : 'off'}</p>
        <Switch checked={checked} onCheckedChange={setChecked} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">size</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Switch size="small" />
          <Switch size="medium" />
          <Switch size="large" />
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">disabled</h4>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Switch disabled />
          <Switch checked disabled />
        </div>
      </ShowBox>
      <ShowBox>
        <h4 className="mb-2">custom thumb inner</h4>
        <Switch
          checkedThumb={
            <div className="w-full h-full flex justify-center items-center">
              <CheckIcon />
            </div>
          }
          unCheckedThumb={
            <div className="w-full h-full flex justify-center items-center">
              <Cross2Icon width="12px" height="12px" />
            </div>
          }
        />
      </ShowBox>
    </div>
  );
}
