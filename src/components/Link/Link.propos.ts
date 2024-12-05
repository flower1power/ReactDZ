import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  isActive?: boolean;
  children?: ReactNode;
}
