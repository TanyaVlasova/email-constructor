import cn from 'classnames';

import styles from './EmailElem.module.css';

import type { FC, HTMLAttributes } from 'react';

interface EmailElemProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string;
  code: string;
};

const EmailElem: FC<EmailElemProps> = (props) => {
  const { className, code, ...restProps } = props;

  return (
    <tr
      className={cn(styles.elem, className)}
      dangerouslySetInnerHTML={{__html: code}}
      {...restProps}
    />
  );
}

export default EmailElem;
