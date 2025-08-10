import { graphql } from 'react-relay';

export const addTaskMutation = graphql`
  mutation mutationsAddTaskMutation($title: String!, $description: String!, $status: String!) {
    createTask(title: $title, description: $description, status: $status) {
      aliasId: id
      title
      description
      status
    }
  }
`;

export const updateTaskStatusMutation = graphql`
  mutation mutationsUpdateTaskStatusMutation($id: Int!, $status: String!) {
    updateTaskStatus(id: $id, status: $status) {
      aliasId: id
      title
      description
      status
    }
  }
`;