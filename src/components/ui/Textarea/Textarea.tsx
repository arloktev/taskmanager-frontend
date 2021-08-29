import React, { ChangeEvent, FC } from 'react';
import clsx from 'clsx';

import styles from './Textarea.module.scss';

type TextareaProps = {
  className?: string;
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

export const Textarea: FC<TextareaProps> = ({
  className, value, placeholder, onChange,
}) => (
  <textarea className={clsx(styles.textarea, className)} value={value} placeholder={placeholder} onChange={onChange}>
    {value}
  </textarea>
);
