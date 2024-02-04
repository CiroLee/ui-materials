import { useState } from 'react';
import { User, Search } from 'lucide-react';
import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import Input from '@ui/Input';
import Checkbox from '@ui/Checkbox';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as prefixAndSuffixHtml } from './docs/prefix-suffix.md';
import { html as disabledHtml } from './docs/disabled.md';
import { html as statusHtml } from './docs/status.md';
import { html as allowClearHtml } from './docs/clear.md';
import { html as countHtml } from './docs/count.md';
import { html as passwordHtml } from './docs/password.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
export default function InputPage() {
  const [disabled, setDisabled] = useState(true);
  return (
    <>
      <NavTitle title="Input" sourceName="Input" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Input
          className="w-[400px]"
          placeholder="input sth..."
          value="some texts"
          onInput={(e) => {
            console.log('input', (e.target as HTMLInputElement).value);
          }}
          onChange={(e) => {
            console.log('change', (e.target as HTMLInputElement).value);
          }}
          onBlur={(e) => {
            console.log('blur', (e.target as HTMLInputElement).value);
          }}
          onFocus={(e) => {
            console.log('focus', (e.target as HTMLInputElement).value);
          }}
        />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="w-[400px] space-y-3">
          <Input size="tiny" placeholder="tiny size" />
          <Input size="small" placeholder="small size" />
          <Input size="medium" placeholder="medium size" />
          <Input size="large" placeholder="large size" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          prefix and suffix
        </Heading>
        <div className="w-[400px] space-y-3">
          <Input placeholder="icon prefix..." prefix={<User size={18} />} />
          <Input placeholder="text prefix..." prefix={<span>+86</span>} />
          <Input placeholder="icon suffix..." suffix={<Search size={18} />} />
        </div>
        <CodeView content={prefixAndSuffixHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <div className="space-y-2 w-[400px]">
          <Checkbox checked={disabled} onCheckedChange={setDisabled}>
            <span>disabled: {`${disabled}`}</span>
          </Checkbox>
          <Input disabled={!!disabled} placeholder="input sth..." prefix={<span>$</span>} />
        </div>
        <CodeView content={disabledHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          status
        </Heading>
        <div className="w-[400px] space-y-3">
          <Input status="error" placeholder="error" prefix={<User size={18} />} />
          <Input status="warn" placeholder="warn" prefix={<User size={18} />} />
          <Input status="readonly" placeholder="readonly" value="readonly..." />
        </div>
        <CodeView content={statusHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          allow clear
        </Heading>
        <Input className="w-[400px]" allowClear />
        <CodeView content={allowClearHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          showCount
        </Heading>
        <div className="w-[400px] space-y-3">
          <Input placeholder="without maxLength" showCount />
          <Input placeholder="with maxLength" showCount maxLength={10} />
        </div>
        <CodeView content={countHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          password
        </Heading>
        <Input type="password" className="w-[400px]" placeholder="password" />
        <CodeView content={passwordHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
