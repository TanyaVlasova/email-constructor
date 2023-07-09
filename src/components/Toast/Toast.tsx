import cn from 'classnames';

import styles from './Toast.module.css';

import type { FC, HTMLAttributes } from 'react';

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  text: string;
  visible?: boolean;
}

const Toast: FC<ToastProps> = (props) => {
  const { className, text, visible = false, ...restProps } = props;

  return (
    <div 
      className={cn(styles.toast, className, { [styles.visible]: visible })}
      {...restProps}
    >
      {text}
    </div>
  );
}

export default Toast;
