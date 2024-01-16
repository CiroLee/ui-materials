import { useState } from 'react';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import CircleProgress from '@ui/CircleProgress';
import Button, { ButtonGroup } from '@ui/Button';
import { AlertTriangle } from 'lucide-react';
export default function ProgressPage() {
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
      <Heading as="h2" className="mb-4">
        CircleProgress
      </Heading>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <CircleProgress percent={20} />
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
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          colors
        </Heading>
        <div className="flex items-center [&_div]:mr-3">
          <CircleProgress percent={20} colors="primary" />
          <CircleProgress percent={20} colors="success" />
          <CircleProgress percent={20} colors="warn" />
          <CircleProgress percent={20} colors="danger" />
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          dynamic
        </Heading>
        <CircleProgress percent={percent} size="large">
          <span>{percent}%</span>
        </CircleProgress>
        <div>
          <ButtonGroup>
            <Button outline onClick={() => handlePercentChange(-10)}>
              -
            </Button>
            <Button outline onClick={() => handlePercentChange(10)}>
              +
            </Button>
          </ButtonGroup>
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          custom
        </Heading>
        <CircleProgress
          percent={60}
          className="square-[110px]"
          trackerClassName="stroke-[rgba(45,117,117,0.5)]"
          indicatorClassName="stroke-[#2558d0]"
          svgClassName="stroke-[3]">
          <AlertTriangle size={32} color="red" />
        </CircleProgress>
      </ShowBox>
    </>
  );
}
