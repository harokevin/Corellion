import { useLazyLoadQuery } from 'react-relay';
import { getAllTasksQuery } from '../graphql/queries';
import TaskItem from './TaskItem';
import { useEffect } from 'react';

interface TaskListProps {
  setTaskList: (getAllTasks: any) => void;
  taskList: any[];
}

const TaskList: React.FC<TaskListProps> = (props) => {
  const data = useLazyLoadQuery(
    getAllTasksQuery,
    {},
    { fetchPolicy: 'store-or-network' }
  );

  useEffect(() => {
    if (data) {
      props.setTaskList(data.getAllTasks);
    }
  }, [data]);

  if (!data || !data.getAllTasks) {
    return <div>No tasks found.</div>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {props.taskList.map((task: any) => (
          <TaskItem key={task.aliasId} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;