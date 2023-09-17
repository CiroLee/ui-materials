import ShowBox from '@/components/ShowBox';
import RadioGroup, { type RadioOption } from '@/packages/ui/RadioGroup';
const options: RadioOption[] = [
  {
    value: 'apple',
    label: 'apple',
  },
  {
    value: 'banana',
    label: 'banana',
  },
  {
    value: 'orange',
    label: 'orange',
    disabled: true,
  },
];
export default function RadioPage() {
  return (
    <>
      <h2 className="mb-4">Radio Group</h2>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <RadioGroup options={options} value="orange" />
      </ShowBox>
    </>
  );
}
