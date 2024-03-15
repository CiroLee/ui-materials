import { useState } from 'react';
import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Button from '@ui/Button';
import Loading from '@/packages/ui/Loading';
import { Backdrop, Size } from '@/packages/types/common';
import RadioGroup from '@/packages/ui/RadioGroup';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as backdropHtml } from './docs/backdrop.md';
import { html as textHtml } from './docs/text.md';
import { html as fullscreenHtml } from './docs/fullscreen.md';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';
const sizeOptions = [
  { label: 'tiny', value: 'tiny' },
  { label: 'small', value: 'small' },
  { label: 'medium', value: 'medium' },
  { label: 'large', value: 'large' },
  { label: 'custom(100px)', value: '100' },
];

const backdropOptions = [
  { label: 'translucent', value: 'translucent' },
  { label: 'blur', value: 'blur' },
  { label: 'transparent', value: 'transparent' },
];

const fullscreenOptions = [
  { label: 'fullscreen', value: 'fullscreen' },
  { label: 'non-fullscreen', value: 'container' },
];

export default function LoadingPage() {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);
  const [size, setSize] = useState<Size>('medium');
  const [backdrop, setBackDrop] = useState<Backdrop>('translucent');
  const [fullscreen, setFullscreen] = useState<string>('container');

  return (
    <>
      <NavTitle title="Loading" sourceName="Loading" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Button
          onClick={() => {
            setLoading1(true);
            setTimeout(() => {
              setLoading1(false);
            }, 1500);
          }}>
          show loading
        </Button>
        <Loading show={loading1} text="loading..." />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <RadioGroup
          className="mb-2"
          options={sizeOptions}
          value={size}
          onValueChange={(value) => setSize(value as Size)}
        />
        <Button
          onClick={() => {
            setLoading2(true);
            setTimeout(() => {
              setLoading2(false);
            }, 1500);
          }}>
          show loading
        </Button>
        <Loading show={loading2} size={size} text="loading..." />
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          without text
        </Heading>
        <Button
          onClick={() => {
            setLoading3(true);
            setTimeout(() => {
              setLoading3(false);
            }, 1500);
          }}>
          show loading
        </Button>
        <Loading show={loading3} />
        <CodeView content={textHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          backdrop
        </Heading>
        <RadioGroup
          className="mb-2"
          options={backdropOptions}
          value={backdrop}
          onValueChange={(value) => setBackDrop(value as Backdrop)}
        />
        <Button
          onClick={() => {
            setLoading4(true);
            setTimeout(() => {
              setLoading4(false);
            }, 1500);
          }}>
          show loading
        </Button>
        <Loading show={loading4} backdrop={backdrop} text="loading..." />
        <CodeView content={backdropHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          fullscreen
        </Heading>
        <RadioGroup className="mb-2" options={fullscreenOptions} value="container" onValueChange={setFullscreen} />
        <div className="relative mb-3 p-2 border border-zinc-200 rounded-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <Loading show={loading5} fullscreen={fullscreen === 'fullscreen'} text="loading..." />
        </div>
        <Button
          onClick={() => {
            setLoading5(true);
            setTimeout(() => {
              setLoading5(false);
            }, 1500);
          }}>
          show loading
        </Button>
        <CodeView content={fullscreenHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
