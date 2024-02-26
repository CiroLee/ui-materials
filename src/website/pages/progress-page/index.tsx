import { useState } from 'react';
import ShowBox from '@site/components/ShowBox';
import NavTitle from '@site/components/NavTitle';
import Progress from '@ui/Progress';
import Heading from '@ui/Heading';
import Button, { ButtonGroup } from '@ui/Button';
import CodeView from '@site/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as colorsHtml } from './docs/colors.md';
import { html as stripedHtml } from './docs/striped.md';
import { html as dynamicHtml } from './docs/dynamic.md';
import { html as customHtml } from './docs/custom.md';
import ApiTable from '@site/components/ApiTable';
import { rows } from './api';
export default function ProgressPage() {
  const [percent, setPercent] = useState(10);
  const handleChangePercent = (value: number) => {
    const newVal = value + percent;
    if (newVal > 100) {
      setPercent(100);
    } else if (newVal < 0) {
      setPercent(0);
    } else {
      setPercent(newVal);
    }
  };
  return (
    <>
      <NavTitle title="Progress" sourceName="Progress" />
      <ShowBox className="mb-4">
        <Heading as="h2" className="mb-2">
          basic
        </Heading>
        <Progress percent={65} className="w-3/4" />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h2" className="mb-2">
          size
        </Heading>
        <div className="space-y-3">
          <Progress percent={65} size="small" className="w-3/4" />
          <Progress percent={65} size="medium" className="w-3/4" />
          <Progress percent={65} size="large" className="w-3/4" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h2" className="mb-2">
          color
        </Heading>
        <div className="space-y-3">
          <Progress percent={65} color="primary" className="w-3/4" />
          <Progress percent={65} color="success" className="w-3/4" />
          <Progress percent={65} color="info" className="w-3/4" />
          <Progress percent={65} color="warn" className="w-3/4" />
          <Progress percent={65} color="danger" className="w-3/4" />
        </div>
        <CodeView content={colorsHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h2" className="mb-2">
          striped
        </Heading>
        <div className="space-y-3">
          <Progress percent={65} striped color="primary" className="w-3/4" />
          <Progress percent={65} striped color="success" className="w-3/4" />
          <Progress percent={65} striped color="info" className="w-3/4" />
          <Progress percent={65} striped color="warn" className="w-3/4" />
          <Progress percent={65} striped color="danger" className="w-3/4" />
        </div>
        <CodeView content={stripedHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h2" className="mb-2">
          dynamic
        </Heading>
        <div className="space-y-3">
          <div className="flex items-center">
            <Progress percent={percent} striped color="primary" className="w-3/4 mr-2" />
            <span>{percent}%</span>
          </div>
          <ButtonGroup>
            <Button outline onClick={() => handleChangePercent(-10)}>
              -
            </Button>
            <Button outline onClick={() => handleChangePercent(10)}>
              +
            </Button>
          </ButtonGroup>
        </div>
        <CodeView content={dynamicHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h2" className="mb-2">
          custom
        </Heading>
        <Progress
          percent={65}
          className="w-3/4 bg-pink-400/20 h-[16px] rounded-[8px] [&_div]:bg-blue-600 [&_div]:rounded-none"
        />
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
