import { m, LazyMotion, domAnimation } from 'framer-motion';

export interface HeaderProps {
  name: string;
  index: number;
}

const splitAt = (index: number, xs: string) => [
  xs.slice(0, index),
  xs.slice(index),
];

export function Header(props: HeaderProps) {
  const [splitOne, splitTwo] = splitAt(props.index, props.name);
  return (
    <LazyMotion features={domAnimation}>
      <header className="flex justify-center">
        <m.h1
          initial={{ x: -1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-bold text-7xl inset-x-0 top-0"
        >
          {splitOne}
        </m.h1>
        <m.h1
          initial={{ x: 1500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="font-bold text-7xl inset-x-0 top-0"
        >
          {splitTwo}
        </m.h1>
      </header>
    </LazyMotion>
  );
}

export default Header;
