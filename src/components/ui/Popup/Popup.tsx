import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';

import { useEscape } from '@/hooks/useEscape';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { CrossIcon } from '@/icons';

import styles from './Popup.module.scss';

export type PopupProps = {
  className?: string;
  title?: string;
  renderTitle?: ReactNode;
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Popup: FC<PopupProps> = ({
  className,
  title,
  renderTitle,
  children,
  open,
  onClose,
}) => {
  const popupRef = useOnClickOutside<HTMLDivElement>(onClose);

  const onCloseHandle = () => {
    onClose();
  };

  useEscape(onCloseHandle);

  return (
    open ? (
      <div className={styles.overlay}>
        <div className={clsx(styles.root, className)} ref={popupRef}>
          {renderTitle || (
          <div className={styles.wrapperTitle}>
            <h2 className={styles.title}>{title}</h2>
            <button className={styles.buttonClose} type="button" onClick={onCloseHandle}>
              <CrossIcon />
            </button>
          </div>
          )}
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    ) : null
  );
};
