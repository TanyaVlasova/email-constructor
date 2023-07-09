import { FC, HTMLAttributes, useState } from 'react';
import cn from 'classnames';

import styles from './PasteField.module.css';
import clear from './images/clear.svg';
import EmailElem from '../../EmailElem/EmailElem';

interface PasteFieldProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  copiedCode: string;
}

const PasteField: FC<PasteFieldProps> = (props) => {
  const { className, copiedCode, ...restProps } = props;
  const [pasteCode, setPasteCode] = useState('');

  const handlePasteCode = () => {
    setPasteCode(copiedCode);
  };

  const handleClear = () => {
    setPasteCode('');
  };

  return (
    <tr 
      className={cn(styles.field, className, { [styles.empty]: !pasteCode })}
      {...restProps}
    >
      <td>
        <table border={0} cellPadding={0} cellSpacing={0}>
          <tbody>
            <tr>
              <td
                className={cn(styles.paste, { [styles.hidden]: pasteCode || copiedCode === '' })} 
                onClick={handlePasteCode}              
              >
                Вставить
              </td>
            </tr>
            <EmailElem code={pasteCode} />
            <tr>
              <td>
                <img 
                  className={cn(styles.clear, { [styles.hidden]: !pasteCode })}
                  onClick={handleClear}
                  src={clear} 
                  alt="×"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
};

export default PasteField;
