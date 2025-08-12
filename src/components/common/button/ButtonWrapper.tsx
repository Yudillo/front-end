import type { PropsWithChildren } from 'react';
import { buttonWrapper } from './ButtonWrapper.css';

export default function ButtonWrapper({ children }: PropsWithChildren) {
  return <div className={buttonWrapper}>{children}</div>;
}
