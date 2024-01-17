import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import ApiTable from '@site/components/ApiTable';
import { radioGroupRows, radioOptionRows } from './api';
import RadioGroup, { type RadioOption } from '@ui/RadioGroup';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as orientationHtml } from './docs/direction.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as customHtml } from './docs/custom.md';
import NavTitle from '@site/components/NavTitle';
const options1: RadioOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
  {
    value: 'banana',
    label: 'banana',
  },
];
const disabledOptions: RadioOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
  {
    value: 'banana',
    label: 'banana',
  },
  {
    value: 'orange',
    label: 'orange',
    disabled: true,
  },
];
const customOptions: RadioOption[] = [
  {
    value: 'apple',
    label: (
      <div>
        <p>apple</p>
        <p>🍎</p>
      </div>
    ),
  },
  {
    value: 'banana',
    label: (
      <div>
        <p>banana</p>
        <p>🍌</p>
      </div>
    ),
  },

  {
    value: 'orange',
    label: (
      <div>
        <p>orange</p>
        <p>🍊</p>
      </div>
    ),
  },
];
export default function RadioPage() {
  return (
    <>
      <NavTitle title="RadioGroup" sourceName="RadioGroup" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <RadioGroup options={options1} onValueChange={(v) => console.log('you choose: ', v)} />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          direction
        </Heading>
        <RadioGroup
          options={options1}
          className="pb-3 mb-3 border-b"
          direction="horizontal"
          onValueChange={(v) => console.log('you choose: ', v)}
        />
        <RadioGroup options={options1} direction="vertical" onValueChange={(v) => console.log('you choose: ', v)} />
        <CodeView content={orientationHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <RadioGroup options={disabledOptions} onValueChange={(v) => console.log('you choose: ', v)} />
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom
        </Heading>
        <RadioGroup
          className="[&>label_button]:self-baseline [&_button]:mt-[6px]"
          options={customOptions}
          onValueChange={(v) => console.log('you choose: ', v)}
        />
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-2">
        API
      </Heading>
      <Heading as="h4" className="mb-2">
        RadioGroup
      </Heading>
      <ApiTable rows={radioGroupRows} />
      <Heading as="h4" className="my-2">
        RadioOption
      </Heading>
      <ApiTable rows={radioOptionRows} />
    </>
  );
}
