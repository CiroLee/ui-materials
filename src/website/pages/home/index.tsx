import { FC } from 'react';
import Heading from '@ui/Heading';
const Home: FC = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <Heading as="h2" className="text-3xl font-bold">
        react components based on radix-ui
      </Heading>
    </div>
  );
};

export default Home;
