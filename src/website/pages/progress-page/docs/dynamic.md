```ts
import { useState } from 'react';
import Progress from 'your path/Progress';
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
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
    <div className="space-y-3">
    <div className="flex items-center">
        <Progress percent={percent} striped colors="primary" className="w-3/4 mr-2" />
        <span>{percent}%</span>
    </div>
    <ButtonGroup>
        <Button outline onClick={() => handleChangePercent(-10)}>-</Button>
        <Button outline onClick={() => handleChangePercent(10)}>+</Button>
    </ButtonGroup>
    </div>
  )
}
```
