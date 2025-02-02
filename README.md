# Task Manager - Node.js Application 🚀

![Music Bar Logo](src/public/images/favicon.ico)


[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Overview 📖

**Task Manager** is a full-stack web application built using **Node.js**, **Express.js**, **EJS**, and **Tailwind CSS**. The application enables users to manage their tasks effectively, providing features for creating, viewing, editing, updating, and deleting tasks. This simple yet powerful solution can be extended to meet the requirements of more complex task management systems.

## Live Project Link

[Task Manager Live](https://task-manager-nwrr.onrender.com) 🔗


## GitHub Project Link

[Task Manager GitHub Repository](https://github.com/Sumit0134/Task-Manager) 🔗


### Features ✨:
- 📝 Create new tasks
- 👀 View and edit tasks
- 🗑️ Delete tasks
- 📱 Responsive UI designed with Tailwind CSS
- 🛠️ Persistent task storage (local file-based)

## Table of Contents 🗂️
1. [Installation](#installation)
2. [Usage](#usage)
3. [API Endpoints](#api-endpoints)
4. [Technology Stack](#technology-stack)
5. [Contributing](#contributing)
6. [License](#license)

## Installation 🔧

To get started with the project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Sumit0134/Task-Manager.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Task-Manager
   ```

3. **Install the required dependencies**:

   The project uses npm for dependency management. Install all dependencies using:

   ```bash
   npm install
   ```

4. Create a .env file:

   You need to define your environment variables in a .env file. Here is a sample .env configuration:

   ```bash
   APP_NAME=Task Manager
   ```

5. **Usage** 🎮

Start the application:

Run the development server using:

   ```bash
   npm run dev
   ```

This will start the application on http://localhost:3000.

6. **Access the Task Manager UI**:

   Open a browser and navigate to http://localhost:3000 to start managing your tasks.

7. **API Endpoints** 🛠️
  
   **GET /**

Displays all tasks stored on the server.

   **POST /create**

Creates a new task. Requires a title and description in the body.

   **GET /tasks/:taskName**

Displays the task details of a specific task.

   **POST /update/:taskName**

Updates an existing task. Requires a newTitle and description in the body.

   **POST /delete/:taskName**

Deletes a task based on the task name.

**Technology Stack ⚙️**

**Node.js** - JavaScript runtime for building the backend.

**Express.js** - Web application framework for Node.js


**EJS** - Embedded JavaScript templating engine for rendering views.

**Tailwind CSS** - Utility-first CSS framework for styling

**FS** (File System) - Node.js module for interacting with the file system.

**Contributing 🤝**

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

Fork the repository.

Create a new branch (git checkout -b feature-name).

Make your changes and commit them (git commit -am 'Add feature-name').

Push to the branch (git push origin feature-name).
Open a pull request.

**License 📄**

This project is licensed under the ISC License. See the LICENSE file for more details.
