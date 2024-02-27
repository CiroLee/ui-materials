```ts
import Link from 'your path/Link';
export default function Demo() {
  return (
   <div className="flex items-center gap-3">
      <Link isBlock color="default" href="https://github.com">
        default
      </Link>
      <Link isBlock color="primary"  href="https://github.com">
        primary
      </Link>
      <Link isBlock color="success"  href="https://github.com">
        success
      </Link>
      <Link isBlock color="warn" href="https://github.com">
        warn
      <<Link isBlock color="danger" href="https://github.com">
        danger
      </Link>/Link>
  </div>
  )
}
```
