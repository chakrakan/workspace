import { GetStaticProps } from 'next';
import './index.module.css';

/* eslint-disable-next-line */
export interface GetInTouchProps {
  name: string;
}

export function GetInTouch({ name }: GetInTouchProps) {
  return (
    <div>
      <h1>GetInTouch with {name}</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<GetInTouchProps> = async (
  context
) => {
  return {
    props: {
      name: 'Kanisk',
    },
  };
};

export default GetInTouch;
