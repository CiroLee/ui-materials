import Checkbox, { CheckboxGroup, type CheckboxProps } from '@/packages/components/Checkbox';
import ShowBox from '@/components/ShowBox';
export default function CheckboxPage() {
  const checkboxGroup: CheckboxProps[] = [
    {
      value: 'apple',
      children: 'apple',
    },
    {
      value: 'banana',
      children: 'banana',
    },
    {
      value: 'orange',
      children: 'orange',
      disabled: true,
    },
  ];
  return (
    <>
      <div className="mb-4">
        <h2>Checkbox</h2>
      </div>
      <ShowBox className="mb-4">
        <h4 className="mb-2">basic</h4>
        <Checkbox checked value="apple" onCheckedChange={(checked, value) => console.log(checked, value)}>
          item 1
        </Checkbox>
      </ShowBox>
      <ShowBox className="mb-4">
        <h4 className="mb-2">disabled</h4>
        <div className="flex items-center [&>*]:mr-2">
          <Checkbox disabled>disabled</Checkbox>
          <Checkbox checked disabled>
            disabled
          </Checkbox>
        </div>
      </ShowBox>
      <ShowBox>
        <h4 className="mb-2">checkbox group</h4>
        <CheckboxGroup
          value="orange"
          className="flex [&>label]:mr-2"
          options={checkboxGroup}
          onCheckedChange={(list) => console.log('what you choose:', list)}
        />
      </ShowBox>
    </>
  );
}
