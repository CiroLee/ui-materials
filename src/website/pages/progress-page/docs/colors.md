```ts
import Progress from 'your path/Progress';

export default function Demo() {
    return (
     <div className="space-y-3">
       <Progress percent={65} colors="primary" className="w-3/4" />
       <Progress percent={65} colors="success" className="w-3/4" />
       <Progress percent={65} colors="warn" className="w-3/4" />
       <Progress percent={65} colors="danger" className="w-3/4" />
      </div>
    )
}
```
