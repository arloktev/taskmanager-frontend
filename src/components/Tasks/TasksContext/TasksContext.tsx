import React, { createContext, FC } from 'react';

import { TaskItemProps } from '../types/TasksTypes';

type TasksContextProps = {
  openModal: boolean,
  setOpenModal: () => void;
  dataModal?: TaskItemProps;
  setDataModal: (data: TaskItemProps) => void;
};

const TasksContextDefaultValue = {
  openModal: false,
  setOpenModal: () => null,
  setDataModal: () => null,
};

export const TasksContext = createContext<TasksContextProps>(TasksContextDefaultValue);

export const TasksContextProvider: FC<TasksContextProps> = (props) => {
  const {
    children,
    ...rest
  } = props;

  return (
    <TasksContext.Provider value={{ ...rest }}>
      {children}
    </TasksContext.Provider>
  );
};
