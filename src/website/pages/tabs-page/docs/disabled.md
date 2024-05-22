```typescript
import Tabs, { TabPanel } from 'your path/Tabs';

export default function Demo() {
  return (
    <Tabs>
      <TabPanel value="npm" label="npm">
        npm install tailwindcss -D
      </TabPanel>
      <TabPanel value="yarn" label="yarn">
        yarn add tailwindcss -D
      </TabPanel>
      <TabPanel value="pnpm" label="pnpm" disabled>
        pnpm add tailwindcss -D
      </TabPanel>
    </Tabs>
  )
}
```
