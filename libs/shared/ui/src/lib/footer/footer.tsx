export interface FooterProps {
  name: string;
}

export function Footer(props: FooterProps) {
  return (
    <footer className="flex sm:justify-center space-x-4">
      &copy; {new Date().getUTCFullYear()} {props.name}
    </footer>
  );
}

export default Footer;
