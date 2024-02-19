```ts
// first, place the ToastProvider component at the root of your app.
import { ToastProvider } from 'your path';

export default function App() {
  return (
    <ToastProvider>
        <YourApp />
    </ToastProvider>
  );
}
```
