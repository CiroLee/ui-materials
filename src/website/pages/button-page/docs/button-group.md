```typescript
import Button, { ButtonGroup } from 'your path/Button';

export default function Demo() {
  return (
    <div className="flex flex-wrap space-x-3">
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
        <Button shape="pill" outline>
            apple
        </Button>
        <Button shape="pill" outline>
            banana
        </Button>
        <Button shape="pill" outline>
            orange
        </Button>
      </ButtonGroup>
      <ButtonGroup className="mb-2">
        <Button outline shape="pill">
            apple
        </Button>
        <Button outline shape="pill">
            banana
        </Button>
      </ButtonGroup>
    </div>
  )
}
```
