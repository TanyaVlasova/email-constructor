import { useState } from 'react';

import ConstructedEmail from './components/ConstructedEmail';
import EmailElems from './components/EmailElems';
import Toast from './components/Toast';
import styles from './App.module.css';

import type { FC } from 'react';

const App: FC = () => {
  const [copiedCode, setCopiedCode] = useState('');
  const [visibleToast, setVisibleToast] = useState(false);
  const copyCode = (code: string) => {
    setCopiedCode(code);
    setVisibleToast(true);
    setTimeout(() => setVisibleToast(false), 2000);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ConstructedEmail className={styles.constructedEmail} copiedCode={copiedCode} />
        <EmailElems className={styles.emailElems} copyCode={copyCode} />
        <Toast className={styles.toast} text='Скопировано' visible={visibleToast} />
      </div>
    </div>
  );
};

export default App;
