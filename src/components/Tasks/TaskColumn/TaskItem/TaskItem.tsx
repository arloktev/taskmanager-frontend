import React, { FC, useContext } from 'react';

import { TasksContext } from '@/components/Tasks/TasksContext';

import { TaskItemProps } from '../../types/TasksTypes';

import styles from './TaskItem.module.scss';

export const TaskItem: FC<TaskItemProps> = (data) => {
  const { name } = data;
  const { setDataModal, setOpenModal } = useContext(TasksContext);

  const onClickItem = () => {
    setDataModal(data);
    setOpenModal();
  };

  return (
    <div className={styles.root}>
      <p className={styles.title} onClick={onClickItem}>{name}</p>
    </div>
  );
};
