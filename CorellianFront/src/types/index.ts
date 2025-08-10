export type Task = {
  aliasId: any;
  id: string;
  title: string;
  status: TaskStatus;
};

export type TaskStatus = 'Pending' | 'Completed';