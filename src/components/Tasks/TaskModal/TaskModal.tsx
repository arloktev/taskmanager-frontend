import React, {
  ChangeEvent, FC, useContext, useState,
} from 'react';
import clsx from 'clsx';

import { TasksContext } from '@/components/Tasks/TasksContext';
import { Popup } from '@/components/ui/Popup';
import { Textarea } from '@/components/ui/Textarea';

import styles from './TaskModal.module.scss';

export const TaskModal: FC = () => {
  const { openModal, setOpenModal } = useContext(TasksContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onChangeName = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setName(event.target.value);
  };

  const onChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <Popup
      className={styles.popup}
      renderTitle={<p className={styles.title}>Новая задача</p>}
      open={openModal}
      onClose={setOpenModal}
    >
      <div className={styles.content}>
        <Textarea className={styles.name} value={name} onChange={onChangeName} placeholder="Название" />
        <Textarea
          className={styles.description}
          value={description}
          onChange={onChangeDescription}
          placeholder="Описание"
        />
      </div>
      <div className={styles.footer}>
        <button className={clsx(styles.button, styles.buttonCancel)} type="button" onClick={setOpenModal}>
          Отменить
        </button>
        <button className={clsx(styles.button, styles.buttonSave)} type="button">
          Сохранить
        </button>
      </div>
    </Popup>
  );
};
