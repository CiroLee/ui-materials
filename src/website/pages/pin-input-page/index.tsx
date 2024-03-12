import NavTitle from '@site/components/NavTitle';
import ShowBox from '@site/components/ShowBox';
import Heading from '@ui/Heading';
import PinInput from '@ui/PinInput';
import { useToast } from '@ui/Toast';

export default function PinInputPage() {
  const { toast } = useToast();
  return (
    <>
      <NavTitle title="PinInput" sourceName="PinInput" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <PinInput
          quantity={4}
          onCompleteChange={(val) => {
            toast(`value is: ${val}`);
            console.log('complete callback', val);
          }}
        />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          quantity
        </Heading>
        <div className="flex flex-col">
          <PinInput
            quantity={6}
            onCompleteChange={(val) => {
              console.log('complete callback', val);
            }}
          />
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          password
        </Heading>
        <PinInput type="password" quantity={4} />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          disabled
        </Heading>
        <PinInput quantity={4} disabled />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="flex flex-col gap-3">
          <PinInput quantity={4} size="tiny" />
          <PinInput quantity={4} size="small" />
          <PinInput quantity={4} size="medium" />
          <PinInput quantity={4} size="large" />
        </div>
      </ShowBox>
    </>
  );
}
