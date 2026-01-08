# ToDo-APP Core

RESTful microservice to manage tasks (ToDo App) using **Node.js**, **Express**, **MongoDB**, and **Docker**. Includes documentation with **Swagger (OpenAPI)**.

---

## Features

- Task CRUD (`GET`, `POST`, `PUT`, `DELETE`)
- MongoDB database
- Docker and Docker Compose support
- Swagger UI documentation (`/api-docs`)
- Ready for development and production

## Requirements

- [Node.js](https://nodejs.org/) (v24+)
- [Docker](https://www.docker.com/)

---

## Docker Installation

```bash
# Clone the repository
git clone https://github.com/dalthonmh/todoapp-core.git
cd todoapp-core

# Build and start the services
docker compose up -d --build
```
