```ts
import Alert from 'your path/Alert'；
export default function Demo() {
  return (
    <Alert
      title={<p className="italic font-bold">custom title</p>}
      alertType="warn"
      isPlain
      content={<Alert className="mt-2" content="nest alert" />}
    />
}
```
