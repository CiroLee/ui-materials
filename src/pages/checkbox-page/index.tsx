import Checkbox, { CheckboxGroup, type CheckboxProps } from '@/packages/components/Checkbox';
import ShowBox from '@/components/ShowBox';
import CodeView from '@/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as groupHtml } from './docs/group.md';
export default function CheckboxPage() {
  const checkboxGroup: CheckboxProps[] = [
    {
      value: 'apple',
      className: '[&_button]:self-baseline [&_button]:mt-[6px]',
      children: (
        <div>
          <p>apple</p>
          <p>🍎</p>
        </div>
      ),
    },
    {
      value: 'banana',
      className: '[&_button]:self-baseline [&_button]:mt-[6px]',
      children: (
        <div>
          <p>banana</p>
          <p>🍌</p>
        </div>
      ),
    },
    {
      value: 'orange',
      className: '[&_button]:self-baseline [&_button]:mt-[6px]',
      children: (
        <div>
          <p>orange</p>
          <p>🍊</p>
        </div>
      ),
      disabled: true,
    },
  ];
  return (
    <>
      <div className="mb-4">
        <h2>Checkbox</h2>
      </div>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <Checkbox checked value="apple" onCheckedChange={(checked, value) => console.log(checked, value)}>
          apple
        </Checkbox>
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">disabled</h4>
        <div className="flex items-center [&>*]:mr-2">
          <Checkbox disabled>disabled</Checkbox>
          <Checkbox checked disabled>
            disabled
          </Checkbox>
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox>
        <h4 className="mb-2">checkbox group</h4>
        <CheckboxGroup
          value="orange"
          className="flex [&>label]:mr-2"
          options={checkboxGroup}
          onCheckedChange={(list) => console.log('what you choose:', list)}
        />
        <CodeView content={groupHtml} />
      </ShowBox>
    </>
  );
}
