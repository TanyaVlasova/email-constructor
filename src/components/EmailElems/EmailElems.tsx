import cn from 'classnames';

import CopyField from './CopyField';
import emailElems from '../../data/emailElems';
import styles from './EmailElems.module.css';

import type { FC, HTMLAttributes } from 'react';

interface EmailElemsProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  copyCode: (code: string) => void;
}

const EmailElems: FC<EmailElemsProps> = (props) => {
  const { className, copyCode, ...restProps } = props;

  return (
    <div className={cn(styles.wrapper, className)} {...restProps}>
      <table className={styles.table} border={0} cellPadding={0} cellSpacing={0}>
        <tbody className={styles.tbody}>
          {emailElems.map((elem, index) => (
            <tr>
              <td>
                <CopyField className={styles.copyField} elem={elem} copyCode={copyCode} key={index} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmailElems;
