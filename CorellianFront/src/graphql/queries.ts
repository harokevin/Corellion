import { graphql } from 'react-relay';

export const getAllTasksQuery = graphql`
  query queriesGetAllTasksQuery {
    getAllTasks {
      aliasId: id
      title
      description
      status
    }
  }
`;