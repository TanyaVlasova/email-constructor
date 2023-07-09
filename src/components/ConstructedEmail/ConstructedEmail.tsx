import { useMemo } from 'react';
import cn from 'classnames';

import PasteField from './PasteField';
import styles from './ConstructedEmail.module.css';

import type { FC, HTMLAttributes } from 'react';

interface ConstructedEmailProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  copiedCode: string;
}

const ConstructedEmail: FC<ConstructedEmailProps> = (props) => {
  const { className, copiedCode, ...restProps } = props;
  const fields = useMemo(() => {
    return [...new Array(8)];
  }, []);

  return (
    <div className={cn(styles.wrapper, className)} {...restProps}>
      <div className={styles.container}>
        <table 
          className={styles.table}
          border={0}
          cellPadding={0}
          cellSpacing={0}
        >
          <tbody>
            {fields.map((field, index) => <PasteField copiedCode={copiedCode} key={index} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ConstructedEmail;
