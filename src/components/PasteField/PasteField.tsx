import { FC, HTMLAttributes, useRef, useState } from 'react';
import cn from 'classnames';

import styles from './PasteField.module.css';
import clear from './images/clear.svg';

interface PasteFieldProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  code: string;
}

const PasteField: FC<PasteFieldProps> = (props) => {
  const { className, code } = props;
  const [pasteCode, setPasteCode] = useState('');

  const handlePasteCode = () => {
    setPasteCode(code);
  };

  const handleClear = () => {
    setPasteCode('');
  };

  return (
    <div className={cn(styles.field, className)}>
      <div className={cn(styles.paste, { [styles.hidden]: pasteCode })} onClick={handlePasteCode}>
        Вставить
      </div>
      <div className={styles.code} dangerouslySetInnerHTML={{__html: pasteCode}}></div>
      <img 
        className={cn(styles.clear, { [styles.hidden]: !pasteCode })}
        onClick={handleClear}
        src={clear} 
        alt="×"
      />
    </div>
  );
};

export default PasteField;
