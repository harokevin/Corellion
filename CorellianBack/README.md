# CorellianBack

## Overview

An ASP.NET Core backend that provides a GraphQL API for managing tasks. It uses Entity Framework Core with SQLite for data persistence and HotChocolate for GraphQL.

## Features

- **Task Management:** Create, update, and query tasks (id, title, description, status).
- **GraphQL API:** Flexible queries and mutations for tasks.
- **Persistence:** Data stored in a local SQLite database (`tasks.db`).

## Getting Started

### Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/download)
- (Optional) [DB Browser for SQLite](https://sqlitebrowser.org/) for viewing the database

### Setup

1. Clone the repository.
2. Restore dependencies:
   ```sh
   dotnet restore
   ```
3. Build the project:
   ```sh
   dotnet build
   ```
4. Run the backend:
   ```sh
   dotnet run
   ```

### Accessing GraphQL

- Open [http://localhost:5144/graphql](http://localhost:5144/graphql) in your browser to use the GraphQL IDE.

## Example GraphQL Operations

### Create a Task

```graphql
mutation {
  createTask(
    title: "Sample Task"
    description: "This is a sample task."
    status: "Pending"
  ) {
    id
    title
    description
    status
  }
}
```

### Update a Task

```graphql
mutation {
  updateTaskStatus(
    id: 1
    status: "Completed"
  ) {
    id
    title
    description
    status
  }
}
```

### Get All Tasks

```graphql
query {
  getAllTasks {
    id
    title
    description
    status
  }
}
```

## Database

- Tasks are stored in `tasks.db` in the project root.
- You can view or edit tasks using any SQLite database viewer.