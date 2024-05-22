import { useState } from 'react';
import Heading from '@ui/Heading';
import ApiTable from '@site/components/ApiTable';
import { switchRows } from './api';
import ShowBox from '@site/components/ShowBox';
import Switch from '@ui/Switch';
import { RiCheckLine, RiCloseLine } from '@remixicon/react';
import CodeView from '@site/components/CodeView';
import baseHtml from './docs/base.md?raw';
import sizeHtml from './docs/size.md?raw';
import disabledHtml from './docs/disabled.md?raw';
import customHtml from './docs/custom.md?raw';
import NavTitle from '@site/components/NavTitle';
import Description from '@site/components/Description';

export default function SwitchPage() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <NavTitle title="Switch" sourceName="Switch" />
      <Description>A component allows to toggle status</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <p className="mb-1">switch: {checked ? 'on' : 'off'}</p>
        <Switch checked={checked} onCheckedChange={setChecked} />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Switch size="tiny" />
          <Switch size="small" />
          <Switch size="medium" />
          <Switch size="large" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <div className="[&_button:not(:first-child)]:ml-2">
          <Switch disabled />
          <Switch checked disabled />
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom thumb inner
        </Heading>
        <Switch
          checkedThumb={
            <div className="w-full h-full flex justify-center items-center">
              <RiCheckLine size={12} />
            </div>
          }
          unCheckedThumb={
            <div className="w-full h-full flex justify-center items-center">
              <RiCloseLine size={12} />
            </div>
          }
        />
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <ApiTable rows={switchRows} />
    </div>
  );
}
