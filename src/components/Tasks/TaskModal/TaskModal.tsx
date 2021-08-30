import React, {
  ChangeEvent, FC, useContext, useEffect, useState,
} from 'react';
import clsx from 'clsx';

import { TasksContext } from '@/components/Tasks/TasksContext';
import { TaskItemProps } from '@/components/Tasks/types/TasksTypes';
import { Popup } from '@/components/ui/Popup';
import { Textarea } from '@/components/ui/Textarea';

import styles from './TaskModal.module.scss';

const DEFAULT_DATA = {
  id: '',
  name: '',
  description: '',
};

export const TaskModal: FC = () => {
  const {
    openModal, setOpenModal, dataModal, setDataModal,
  } = useContext(TasksContext);
  const [data, setData] = useState<TaskItemProps>(DEFAULT_DATA);

  useEffect(() => {
    if (dataModal) {
      setData(dataModal);
    } else {
      setData({} as TaskItemProps);
    }
  }, [dataModal]);

  const onChangeTextarea = ({ target: { value, name } }: ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const onCloseModal = () => {
    setOpenModal(false);

    if (setDataModal) {
      setDataModal({} as TaskItemProps);
    }
  };

  return (
    <Popup
      className={styles.popup}
      renderTitle={<p className={styles.title}>Новая задача</p>}
      open={openModal}
      onClose={onCloseModal}
    >
      <div className={styles.content}>
        <Textarea
          className={styles.name}
          value={data.name}
          onChange={onChangeTextarea}
          name="name"
          placeholder="Название"
        />
        <Textarea
          className={styles.description}
          value={data.description}
          onChange={onChangeTextarea}
          name="description"
          placeholder="Описание"
        />
      </div>
      <div className={styles.footer}>
        <button className={clsx(styles.button, styles.buttonCancel)} type="button" onClick={onCloseModal}>
          Отменить
        </button>
        <button className={clsx(styles.button, styles.buttonSave)} type="button">
          Сохранить
        </button>
      </div>
    </Popup>
  );
};
