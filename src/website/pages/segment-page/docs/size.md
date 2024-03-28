```ts
import Segment from 'your path/Segment';

export default function Demo() {
  return (
    <div className="flex items-center flex-wrap gap-3">
      <div>
        <p className="text-sm mb-1 ml-1">tiny:</p>
        <Segment size="tiny" options={options} />
      </div>
      <div>
        <p className="text-sm mb-1 ml-1">small:</p>
        <Segment size="small" options={options} />
      </div>
      <div>
        <p className="text-sm mb-1 ml-1">medium:</p>
        <Segment size="medium" options={options} />
      </div>
      <div>
        <p className="text-sm mb-1 ml-1">large:</p>
        <Segment size="large" options={options} />
      </div>
    </div>
  )
}
```
