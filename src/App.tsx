import { useMemo, useState } from 'react';

import PasteField from './components/PasteField';
import emailElems from './data/emailElems';
import styles from './App.module.css';

import type { FC } from 'react';

const App: FC = () => {
  const [code, setCode] = useState('');
  const fields = useMemo(() => {
    return [...new Array(6)];
  }, []);

  const copyHTML = (code: string) => {
   setCode(code);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => copyHTML(emailElems.hello)}>
            Приветствие
          </button>
          <button className={styles.button} onClick={() => copyHTML(emailElems.howAreYou)}>
            Как дела?
          </button>
          <button className={styles.button} onClick={() => copyHTML(emailElems.story)}>
            История
          </button>
        </div>
        <div className={styles.output}>
          {fields.map((field, index) => <PasteField code={code} key={index} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
