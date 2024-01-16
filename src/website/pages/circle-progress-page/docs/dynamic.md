```ts
import { useState } from 'react';
import CircleProgress from 'your path';

export default function Demo() {
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
    <div>
      <CircleProgress percent={percent} size="large">
      <span>{percent}%</span>
      </CircleProgress>
      <ButtonGroup>
        <Button outline onClick={() => handlePercentChange(-10)}>-</Button>
        <Button outline onClick={() => handlePercentChange(10)}>+</Button>
      </ButtonGroup>
    </div>
    )
}
```
