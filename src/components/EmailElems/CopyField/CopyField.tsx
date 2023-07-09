import cn from 'classnames';

import styles from './CopyField.module.css';

import type { FC, HTMLAttributes, MouseEvent } from 'react';
import { EmailElemData } from '../../../data/emailElems';
import EmailElem from '../../EmailElem/EmailElem';

interface CopyFieldProps extends HTMLAttributes<HTMLTableElement> {
  className?: string
  elem: EmailElemData;
  copyCode: (code: string) => void;
}

const CopyField: FC<CopyFieldProps> = (props) => {
  const { className, elem, copyCode, ...restProps } = props;

  const handlePreventDefault = (event: MouseEvent) => {
    event.preventDefault();
  }

  return (
    <table 
      className={cn(styles.wrapper, className)} 
      border={0} 
      cellPadding={0} 
      cellSpacing={0}
      {...restProps}
    >
      <tbody>
        <tr className={styles.header}>
          <td className={styles.title}>{elem.title}</td>
          <td className={styles.copy} onClick={() => copyCode(elem.code)}>Копировать</td>
        </tr>
        <EmailElem className={styles.elem} code={elem.code} onClick={handlePreventDefault} />
      </tbody>
    </table>
  );
}

export default CopyField;
