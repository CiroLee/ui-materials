```ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <div className="flex flex-col gap-y-4">
      <Alert title="default" alertType="default" content="add contents here" />
      <Alert title="info" alertType="info" content="add contents here" />
      <Alert title="success" alertType="success" content="add contents here" />
      <Alert title="warn" alertType="warn" content="add contents here" />
      <Alert title="error" alertType="error" content="add contents here" />
    </div>
  )
}
```
