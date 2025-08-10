import { useState } from 'react';
import { useMutation } from 'react-relay';
import { addTaskMutation } from '../graphql/mutations';
import { TextField, Button, Flex } from '@adobe/react-spectrum';

interface TaskFormProps {
    setTaskList: (tasks: any) => void;
    taskList: any[];
}

const TaskForm = (props : TaskFormProps) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [commit] = useMutation(addTaskMutation);

    const handleSubmit = () => {
        if (taskTitle.trim()) {
            commit({
                variables: {
                    title: taskTitle,
                    description: "Your description here",
                    status: "Pending"
            },
                    onCompleted: (_response: any, errors: any) => {
                        setTaskTitle('');
                        if (errors) {
                            console.error(errors);
                        } else {
                            props.setTaskList([...props.taskList, { ..._response.createTask, id: _response.createTask.aliasId }]);
                    }
                },
                onError: (err: any) => {
                    console.error(err);
                },
            });
        }
    };

    return (
        <Flex direction="row" gap="size-200" alignItems="end">
            <TextField
                label="Task Title"
                value={taskTitle}
                onChange={setTaskTitle}
                isRequired
            />
            <Button type="submit" variant="cta" onPress={handleSubmit}>Add Task</Button>
        </Flex>
    );
};

export default TaskForm;