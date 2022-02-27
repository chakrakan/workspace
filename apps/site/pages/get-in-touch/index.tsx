import { GetStaticProps } from 'next';
export interface GetInTouchProps {
  name: string;
}

export function GetInTouch({ name }: GetInTouchProps) {
  return (
    <div>
      <h1>Get in touch with {name}</h1>
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
