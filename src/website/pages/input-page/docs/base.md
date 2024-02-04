```ts
import Input from 'your path';

export default function Demo() {
  const handler = (e, text: string) => {
    console.log(text, (e.target as HTMLInputElement).value);
  }
  return (
    <Input
      placeholder="input sth..."
      value="some texts"
      onInput={function(e) {
        handler(e, 'input')
      }}
      onChange={function(e) {
        handler(e, 'change')
      }}
      onBlur={function(e) {
        handler(e, 'blur')
      }}
      onFocus={function(e) {
        handler(e, 'focus')
      }}
    />
  )
}
```
