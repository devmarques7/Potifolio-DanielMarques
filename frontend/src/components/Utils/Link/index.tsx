import { ReactNode } from "react";

interface ILink {
  children?: ReactNode;
  href: string;
  className?: string;
  id?: string;
  onClick?: (event: any) => void;
}

const Link = ({ href, className, onClick, children, id }: ILink) => {
  return (
    <a href={href} className={className} onClick={onClick} id={id}>
      {children}
    </a>
  );
};

export default Link;
