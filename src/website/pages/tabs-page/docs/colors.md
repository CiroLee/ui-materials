```typescript
import Tabs, { TabPanel } from 'your path/Tabs';

const colors = ['info', 'primary', 'success', 'warn', 'danger'] as const;
export default function Demo() {
  return (
    <div className="flex gap-4 flex-wrap">
      {colors.map((color) => (
        <Tabs key={color} colors={color} className="w-[200px]">
          <TabPanel value="npm" label="npm">
            npm install tailwindcss -D
          </TabPanel>
          <TabPanel value="yarn" label="yarn">
            yarn add tailwindcss -D
          </TabPanel>
          <TabPanel value="pnpm" label="pnpm">
            pnpm add tailwindcss -D
          </TabPanel>
        </Tabs>
      ))}
    </div>
  )
}
```
