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