import React from 'react';
import { useMutation } from 'react-relay';
import { ToggleButton } from '@adobe/react-spectrum';
import { updateTaskStatusMutation } from '../graphql/mutations';
import type { Task } from '../types';

interface TaskListProps {
  task: Task
}

const TaskItem: React.FC<TaskListProps> = (props) => {
  const [commitToggle] = useMutation(updateTaskStatusMutation);
  const [_task, setTask] = React.useState(props.task);

  const handleToggle = () => {
    commitToggle({
      variables: { id: _task.aliasId, status: _task.status === 'Pending' ? 'Completed' : 'Pending' },
      onCompleted: (_response: any, errors: any) => {
        if (errors) {
          console.error(errors);
        } else {
          setTask({ ..._response.updateTaskStatus, id: _response.updateTaskStatus.aliasId });
         }
      },
    });
  };

  return (
    <div style={{ marginBottom: '5px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{flex: 1}}>{_task.title}</span>
        <div style={{flex: 1}}>
          <ToggleButton
            isSelected={_task.status === 'Completed'}
            onChange={handleToggle}
          >
            {_task.status}
          </ToggleButton>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;