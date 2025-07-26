# ZIDIO

## Project Overview

ZIDIO is a full-stack job portal platform designed to connect jobseekers, recruiters, and administrators. The application provides a seamless experience for users to search and apply for jobs, manage profiles, and for recruiters to post and manage job listings. The platform also includes an admin dashboard for managing users, jobs, and categories.

---

## Project Screenshots

> Below are some screenshots to give you an overview of the application's look and feel. Replace the image paths with your actual screenshot filenames if needed.

### Landing Page

![Landing Page](https://github.com/manish-kumar0/ZIDIO/blob/main/images/Screenshot%2016565.png)

### Admin Dashboard

![Admin Dashboard](https://github.com/manishkumar632/ZIDIO/blob/33c38f1985eebee684fd2ded72f70a16e20ae0c1/images/Screenshot%202025-06-24%20170031.png)

### Jobseeker Profile

![Jobseeker Profile](https://github.com/manishkumar632/ZIDIO/blob/49890ccf082e28a4dc94e1c5c51694f1838f4f4c/images/Screenshot%202025-06-24%20170559.png)

### Recruiter Dashboard

![Recruiter Dashboard](https://github.com/manishkumar632/ZIDIO/blob/5b2f62c3d1ebe11d7719622d07ebdc73936de534/images/Screenshot%202025-06-24%20165154.png)

### Apply For Job Page

![Recruiter Dashboard](https://github.com/manishkumar632/ZIDIO/blob/1931b7f78776058ce0b228cfb5621f928921d66c/images/Screenshot%202025-06-24%20172430.png)

### Apply For Hackathons Page

![Recruiter Dashboard](https://github.com/manishkumar632/ZIDIO/blob/d525151ebecc37bf55b05f0457bcf92614b3645e/images/Screenshot%202025-06-24%20172840.png)

---

## Features

### Frontend

- **Modern Landing Page**: Engaging landing page with hero section, testimonials, job categories, and latest jobs.
- **Authentication**: User login and signup with form validation.
- **Role-Based Dashboards**:
  - **Admin Dashboard**: View metrics, manage users, jobs, and categories.
  - **Jobseeker Dashboard**: Profile management, experience, education, certificates, and project tracking.
  - **Recruiter Dashboard**: Manage job postings and company profiles.
- **Job Search & Application**: Search for jobs, view job details, and apply directly.
- **Responsive UI**: Built with React, Tailwind CSS, and Radix UI for a modern, accessible, and responsive experience.
- **Notifications**: Real-time notifications for job updates and application statuses.

### Backend

- **RESTful API**: Built with Spring Boot, providing endpoints for authentication, job management, user profiles, and admin operations.
- **Role-Based Access Control**: Secure endpoints for jobseekers, recruiters, and admins.
- **MongoDB Integration**: Stores user, job, and application data.
- **File Uploads**: Support for uploading resumes, certificates, and other documents.
- **Admin Analytics**: Aggregated metrics for users, jobs, and categories.
- **Dockerized Deployment**: Multi-stage Dockerfile for efficient builds and production-ready deployment.

---

## Technologies Used

### Frontend

- **React** (with Vite)
- **Tailwind CSS** (utility-first CSS framework)
- **Radix UI** (accessible UI primitives)
- **MUI (Material UI)** (component library)
- **Axios** (HTTP client)
- **React Router** (routing)
- **ESLint** (linting)

### Backend

- **Java 21**
- **Spring Boot 3.5**
- **Spring Security** (authentication & authorization)
- **Spring Data MongoDB** (database integration)
- **ModelMapper** (object mapping)
- **Docker** (containerization)
- **Maven** (build tool)

---

## Project Structure

```
ZIDIO/
├── backend/
│   └── employara/
│       ├── src/
│       │   └── main/
│       │       ├── java/com/manish/employara/...
│       │       └── resources/
│       ├── pom.xml
│       └── Dockerfile
├── frontend/
│   └── employara/
│       ├── src/
│       │   ├── api/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── context/
│       │   ├── hooks/
│       │   ├── Layout/
│       │   └── utils/
│       ├── package.json
│       ├── vite.config.js
│       └── tailwind.config.js
└── README.md
```

---

## Setup & Running Locally

### Prerequisites

- Node.js (v18+ recommended)
- Java 21
- Maven
- Docker (optional, for containerized deployment)
- MongoDB (local or cloud instance)

### Frontend

1. Navigate to the frontend directory:
   ```sh
   cd frontend/employara
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Backend

1. Navigate to the backend directory:
   ```sh
   cd backend/employara
   ```
2. Build and run with Maven:

   ```sh
   ./mvnw spring-boot:run
   ```

   The API will be available at `http://localhost:8080`.

3. **Or** build and run with Docker:

   ```sh
   docker build -t employara-backend .
   docker run -p 8080:8080 employara-backend
   ```

4. Ensure MongoDB is running and accessible as configured in `application.properties`.

---

## License

This project is for demonstration purposes.

---
