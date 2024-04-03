import NavTitle from '@site/components/NavTitle';
import Heading from '@ui/Heading';
import ShowBox from '@site/components/ShowBox';
import Slider from '@ui/Slider';

export default function SliderPage() {
  return (
    <>
      <NavTitle title="Slider" sourceName="Slider" />
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          basic
        </Heading>
        <Slider defaultValue={[10]} className="w-[76%]" />
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          size
        </Heading>
        <div className="space-y-3 w-[76%]">
          <Slider size="tiny" defaultValue={[10]} />
          <Slider size="small" defaultValue={[10]} />
          <Slider size="medium" defaultValue={[10]} />
          <Slider size="large" defaultValue={[10]} />
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          colors
        </Heading>
        <div className="space-y-3 w-[76%]">
          <Slider colors="primary" defaultValue={[10]} />
          <Slider colors="info" defaultValue={[10]} />
          <Slider colors="success" defaultValue={[10]} />
          <Slider colors="warn" defaultValue={[10]} />
          <Slider colors="danger" defaultValue={[10]} />
        </div>
      </ShowBox>
      <ShowBox className="mb-4">
        <Heading as="h4" className="mb-2">
          direction
        </Heading>
        <div className="h-[300px] flex gap-x-8">
          <Slider size="tiny" direction="vertical" defaultValue={[30]} />
          <Slider size="small" direction="vertical" defaultValue={[30]} />
          <Slider direction="vertical" defaultValue={[30]} />
          <Slider size="large" direction="vertical" defaultValue={[30]} />
        </div>
      </ShowBox>
      <ShowBox className="mb-4 pb-10">
        <Heading as="h4" className="mb-2">
          marks
        </Heading>
        <Slider
          size="medium"
          direction="vertical"
          defaultValue={[10]}
          className="h-[320px]"
          marks={{ 20: '20%', 40: '40%', 60: '60%', 80: '80%' }}
        />
      </ShowBox>
    </>
  );
}
