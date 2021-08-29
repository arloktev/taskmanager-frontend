import React, { FC, useContext } from 'react';

import { TaskItem } from '@/components/Tasks/TaskColumn/TaskItem';
import { TasksContext } from '@/components/Tasks/TasksContext';
import { PlusIcon } from '@/icons';

import { TaskItemProps } from '../types/TasksTypes';

import styles from './TaskColumn.module.scss';

type TaskColumnProps = {
  title: string;
  tasks?: TaskItemProps[];
};

export const TaskColumn: FC<TaskColumnProps> = ({ title, tasks }) => {
  const { setOpenModal } = useContext(TasksContext);

  const onAddTaskHandle = () => {
    setOpenModal();
  };

  return (
    <div className={styles.root}>
      <div className={styles.wrapperTitle}>
        <p className={styles.title}>{title}</p>
        <button type="button" onClick={onAddTaskHandle}>
          <PlusIcon />
        </button>
      </div>
      {tasks && (
        <ul className={styles.list}>
          {tasks.map((task) => (
            <li className={styles.item} key={task.id}>
              <TaskItem {...task} />
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};
