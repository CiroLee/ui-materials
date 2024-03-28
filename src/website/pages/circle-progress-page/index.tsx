import { useState } from 'react';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import CircleProgress from '@ui/CircleProgress';
import Button, { ButtonGroup } from '@ui/Button';
import { RiAlertLine } from '@remixicon/react';
import CodeView from '@/website/components/CodeView';
import { html as baseHtml } from './docs/base.md';
import { html as sizeHtml } from './docs/size.md';
import { html as colorsHtml } from './docs/colors.md';
import { html as dynamicHtml } from './docs/dynamic.md';
import { html as customHtml } from './docs/custom.md';
import NavTitle from '@/website/components/NavTitle';
import ApiTable from '@/website/components/ApiTable';
import { rows } from './api';
import Description from '@site/components/Description';

export default function CircleProgressPage() {
  const [percent, setPercent] = useState(20);
  const handlePercentChange = (value: number) => {
    const newVal = value + percent;
    if (newVal < 0) {
      setPercent(0);
    } else if (newVal > 100) {
      setPercent(100);
    } else {
      setPercent(newVal);
    }
  };
  return (
    <>
      <NavTitle title="CircleProgress" sourceName="CircleProgress" />
      <Description>A component to display progress width circle shape</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <CircleProgress percent={20} />
        <CodeView content={baseHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex items-center [&_div]:mr-3">
          <CircleProgress percent={20} size="small" />
          <CircleProgress percent={20} size="medium" />
          <CircleProgress percent={20} size="large" />
        </div>
        <CodeView content={sizeHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          color
        </Heading>
        <div className="flex items-center gap-x-3">
          <CircleProgress percent={20} color="primary" />
          <CircleProgress percent={20} color="success" />
          <CircleProgress percent={20} color="info" />
          <CircleProgress percent={20} color="warn" />
          <CircleProgress percent={20} color="danger" />
        </div>
        <CodeView content={colorsHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          dynamic
        </Heading>
        <CircleProgress percent={percent} size="large">
          <span>{percent}%</span>
        </CircleProgress>
        <ButtonGroup>
          <Button outline onClick={() => handlePercentChange(-10)}>
            -
          </Button>
          <Button outline onClick={() => handlePercentChange(10)}>
            +
          </Button>
        </ButtonGroup>
        <CodeView content={dynamicHtml} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom
        </Heading>
        <CircleProgress
          percent={60}
          className="w-[110px] h-[110px]"
          trackerClassName="stroke-[rgba(45,117,117,0.5)]"
          indicatorClassName="stroke-[#2558d0]"
          svgClassName="stroke-[3]">
          <RiAlertLine size={34} color="red" />
        </CircleProgress>
        <CodeView content={customHtml} />
      </ShowBox>
      <Heading as="h2" className="mb-4">
        API
      </Heading>
      <ApiTable rows={rows} />
    </>
  );
}
