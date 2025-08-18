# Corellian Task Manager

## Overview

This project is a full-stack task management application built to demonstrate rapid development using agentic AI tools. It features an ASP.NET Core backend with GraphQL, a React frontend using Adobe React Spectrum and Relay, and is fully dockerized for easy deployment.

---

## Architecture & Design Choices

- **Backend:**  
  - ASP.NET Core with HotChocolate for GraphQL.
  - Entity Framework Core with SQLite for persistence.
  - GraphQL schema exposes a `Task` type (`id`, `title`, `description`, `status`).
  - Mutations: `createTask`, `updateTaskStatus`.
  - Query: `getAllTasks`.
  - Dockerized for portability.

- **Frontend:**  
  - React with TypeScript.
  - UI built using Adobe React Spectrum for accessibility and design consistency.
  - Data fetching and mutations via Relay GraphQL client.
  - Users can add new tasks and toggle their status between "Pending" and "Completed".
  - Dockerized for easy orchestration.

- **Dockerization:**  
  - Both backend and frontend have their own Dockerfiles.
  - Docker Compose orchestrates both services.
  - SQLite database is managed by the backend container (no separate DB container required).

---

## Quick Start

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)

### Running Locally

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd Corellian
   ```

2. **Start all services:**
   ```sh
   docker compose up --build
   ```

3. **Access the app:**
   - **Frontend:** [http://localhost:5173](http://localhost:5173)
   - **Backend GraphQL:** [http://localhost:5001/graphql](http://localhost:5001/graphql)

---

## Features

- **Task CRUD:**  
  - Add new tasks.
  - Toggle status between "Pending" and "Completed".
  - View all tasks.

- **Modern UI:**  
  - Responsive and accessible design using Adobe React Spectrum.

- **GraphQL API:**  
  - Flexible queries and mutations for efficient data handling.

- **Relay Integration:**  
  - Optimized data fetching and cache management.

---

## AI Tools Used

- **GitHub Copilot:**  
  - Assisted with code scaffolding, mutation/query generation, and Dockerfile creation.
- **ChatGPT:**  
  - Provided architectural guidance, code reviews, and troubleshooting.
- **Relay Compiler & HotChocolate CLI:**  
  - Automated GraphQL schema and type generation.

---

## Notes

- The SQLite database file is stored in the backend container and persists tasks.
- CORS is enabled on the backend for frontend-backend communication.
- The project is designed for rapid prototyping and demonstration purposes.

---

**Thank you for reviewing this


## Adding New Models to Corellian

To extend the data model (for example, adding procurement features), follow these general steps:

1. **Create Model Classes**  
   - Add new C# classes in the `CorellianBack` folder (e.g., `Vendor.cs`, `Product.cs`, `PurchaseOrder.cs`, etc.).
   - Define properties and relationships using navigation properties and data annotations.

2. **Register Models in AppDbContext**  
   - Open `AppDbContext.cs`.
   - Add a `DbSet<YourModel>` property for each new model.
   - Configure relationships in `OnModelCreating` if needed.

3. **(Optional) Update GraphQL Schema**  
   - Add new types, queries, or mutations in your GraphQL setup (e.g., in `Query.cs` or `Mutation.cs`) to expose the new models via the API.

4. **Create and Apply Entity Framework Migrations**  
   - In the `CorellianBack` directory, run:
     ```sh
     dotnet ef migrations add <MigrationName>
     dotnet ef database update
     ```
   - This updates the SQLite database schema to match your new models.

5. **Verify**  
   - Use a SQLite browser or query tool to confirm new tables exist.
   - Test your API endpoints or GraphQL queries/mutations for the new models.

**Tip:**  
If you encounter migration errors (e.g., table already exists), you may need to delete the `tasks.db` file and re-run migrations during development.

---

## Undoing Migrations (Development Tips)

During development, you may want to undo or redo migrations if you make a mistake or want to reset your schema changes. Here’s how:

1. **Remove the Last Migration (without affecting the database):**
   ```sh
   dotnet ef migrations remove
   ```
   This deletes the last migration file but does not change the database.

2. **Revert the Database to a Previous Migration:**
   ```sh
   dotnet ef database update <PreviousMigrationName>
   ```
   Replace `<PreviousMigrationName>` with the name of the migration you want to revert to. This will roll back the database schema.

3. **Delete All Migrations and Start Fresh (Development Only):**
   - Delete all files in the `Migrations/` folder.
   - Optionally, delete the `tasks.db` file to reset the database.
   - Recreate your initial migration:
     ```sh
     dotnet ef migrations add InitialCreate
     dotnet ef database update
     ```

**Note:**  
These steps are intended for development. In production, always use migrations carefully to avoid data loss.

---