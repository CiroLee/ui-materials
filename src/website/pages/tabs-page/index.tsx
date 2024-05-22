import NavTitle from '@site/components/NavTitle';
import Description from '@site/components/Description';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import Tabs, { TabPanel } from '@ui/Tabs';
const colors = ['info', 'primary', 'success', 'warn', 'danger'] as const;
export default function TabsPage() {
  return (
    <>
      <NavTitle title="Tabs" sourceName="Tabs" />
      <Description>Tabs simply used to alternate between views within the same context</Description>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Tabs>
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
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
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
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled all
        </Heading>
        <Tabs disabled>
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
        <ShowBox className="mb-4">
          <Heading as="h4" className="mb-2">
            colors
          </Heading>
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
        </ShowBox>
      </ShowBox>
    </>
  );
}
