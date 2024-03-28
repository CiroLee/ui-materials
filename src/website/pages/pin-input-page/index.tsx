import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import PinInput from '@ui/PinInput';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as quantityHtml } from './docs/quantity.md';
import { html as passwordHtml } from './docs/password.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as sizeHtml } from './docs/size.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function PinInputPage() {
  return (
    <>
      <NavTitle title="PinInput" sourceName="PinInput" />
      <Description>A component allows verification codes with auto-focus transfer</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <PinInput
          quantity={4}
          onComplete={(val) => {
            console.log('complete callback', val);
          }}
        />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          quantity
        </Heading>
        <div className="flex flex-col">
          <PinInput
            quantity={6}
            onComplete={(val) => {
              console.log('complete callback', val);
            }}
          />
        </div>
        <CodeView content={quantityHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          password
        </Heading>
        <PinInput type="password" quantity={4} />
        <CodeView content={passwordHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <PinInput quantity={4} disabled />
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex flex-col gap-3">
          <p>tiny</p>
          <PinInput quantity={4} size="tiny" />
          <p>small</p>
          <PinInput quantity={4} size="small" />
          <p>medium</p>
          <PinInput quantity={4} size="medium" />
          <p>large</p>
          <PinInput quantity={4} size="large" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
