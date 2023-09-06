```typescript
import Button, { ButtonGroup } from 'your path';

export default Demo() {
  return (
    <div>
      <ButtonGroup className="mb-2">
        <Button>apple</Button>
        <Button>banana</Button>
        <Button>orange</Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2">
        <Button outline>apple</Button>
        <Button outline>banana</Button>
        <Button outline>orange</Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2">
        <Button shape="round" outline>
        apple
        </Button>
        <Button shape="round" outline>
        banana
        </Button>
        <Button shape="round" outline>
        orange
        </Button>
      </ButtonGroup>
    </div>
  )
}
```
