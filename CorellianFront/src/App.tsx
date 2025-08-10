import React from 'react';
import { Provider as SpectrumProvider, defaultTheme, Heading, View } from '@adobe/react-spectrum';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

  const [taskList, setTaskList] = React.useState([]);

  return (
    <SpectrumProvider theme={defaultTheme}>
        <View padding="size-400">
          <Heading level={1}>Task Manager</Heading>
          <TaskForm taskList={taskList} setTaskList={setTaskList} />
          <TaskList taskList={taskList} setTaskList={setTaskList} />
        </View>
    </SpectrumProvider>
  );
}

export default App;