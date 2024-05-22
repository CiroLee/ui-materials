import { useState } from 'react';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Slider from '@ui/Slider';
import Switch from '@ui/Switch';
import CodeView from '@site/components/CodeView';
import Description from '@site/components/Description';
import baseContent from './docs/base.md?raw';
import sizeContent from './docs/size.md?raw';
import colorsContent from './docs/colors.md?raw';
import directionContent from './docs/direction.md?raw';
import multipleContent from './docs/multiple.md?raw';
import stepContent from './docs/step.md?raw';
import disabledContent from './docs/disabled.md?raw';
import invertedContent from './docs/inverted.md?raw';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
export default function SliderPage() {
  const [inverted, setInverted] = useState(false);
  return (
    <>
      <NavTitle title="Slider" sourceName="Slider" />
      <Description>A component allows for a range of selection</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Slider defaultValue={[10]} className="w-[76%]" />
        <CodeView content={baseContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="space-y-3 w-[76%]">
          <Slider size="tiny" defaultValue={[10]} />
          <Slider size="small" defaultValue={[10]} />
          <Slider size="medium" defaultValue={[10]} />
          <Slider size="large" defaultValue={[10]} />
        </div>
        <CodeView content={sizeContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          colors
        </Heading>
        <div className="space-y-3 w-[76%]">
          <Slider colors="primary" defaultValue={[10]} />
          <Slider colors="info" defaultValue={[10]} />
          <Slider colors="success" defaultValue={[10]} />
          <Slider colors="warn" defaultValue={[10]} />
          <Slider colors="danger" defaultValue={[10]} />
        </div>
        <CodeView content={colorsContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          direction
        </Heading>
        <div className="h-[300px] flex gap-x-8">
          <Slider size="tiny" direction="vertical" defaultValue={[30]} />
          <Slider size="small" direction="vertical" defaultValue={[30]} />
          <Slider direction="vertical" defaultValue={[30]} />
          <Slider size="large" direction="vertical" defaultValue={[30]} />
        </div>
        <CodeView content={directionContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          multiple thumbs
        </Heading>
        <Slider
          className="w-[76%]"
          defaultValue={[10, 30, 80]}
          min={1}
          max={100}
          onValueChange={(value) => {
            console.log('value range is: ', value);
          }}
        />
        <CodeView content={multipleContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          step
        </Heading>
        <Slider className="w-[76%]" defaultValue={[10]} step={10} min={0} max={100} />
        <CodeView content={stepContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <Slider className="w-[76%]" disabled defaultValue={[10]} step={10} min={0} max={100} />
        <CodeView content={disabledContent} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          inverted
        </Heading>
        <div className="flex items-center mb-2">
          <span className="mr-2">inverted:</span>
          <Switch size="small" checked={inverted} onCheckedChange={setInverted} />
        </div>
        <Slider className="w-[76%]" inverted={inverted} defaultValue={[10]} min={0} max={100} />
        <CodeView content={invertedContent} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
