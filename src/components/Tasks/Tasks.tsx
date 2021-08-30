import React, { FC, useState } from 'react';

import { TaskColumn } from '@/components/Tasks/TaskColumn';
import { TaskModal } from '@/components/Tasks/TaskModal';
import { TasksContextProvider } from '@/components/Tasks/TasksContext';

import { TaskItemProps } from './types/TasksTypes';

import styles from './Tasks.module.scss';

const TASKS_DATA: TaskItemProps[] = [
  {
    id: '1',
    name: 'Новая задача',
    description: 'Описание новой задачи',
  },
  {
    id: '2',
    name: 'Новая задача 2',
  },
];

export const Tasks: FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<TaskItemProps>({} as TaskItemProps);

  const handleOpenModal = (value: boolean) => {
    setOpen(value);
  };

  const handleSetDataModal = (value: TaskItemProps) => {
    setData(value);
  };

  return (
    <TasksContextProvider
      openModal={open}
      setOpenModal={(value) => handleOpenModal(value)}
      dataModal={data}
      setDataModal={(value) => handleSetDataModal(value)}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <TaskColumn title="В работе" tasks={TASKS_DATA} />
        </li>
        <li className={styles.item}>
          <TaskColumn title="Готово" />
        </li>
      </ul>
      <TaskModal />
    </TasksContextProvider>
  );
};
