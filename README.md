# Bike Servicing Management

This is a modular service management backend system designed for bike service centers. Built with **Node.js**, **Express**, **Typescript**, **Prisma ORM**, and **PostgreSQL**, it manages customer details, bike information, and tracks service requests efficiently.

## 🚀 Deployment

🔗 **Live API URL:** [https://your-app-name.vercel.app](https://your-app-name.vercel.app)

## Key Features

-   **Customer Management:**

    -   Create, read, update, and delete customer.
    -   Display details for individual cutomer.

-   **Bike Management:**

    -   Create, read, update, and delete bike.
    -   Display details for individual bike.

-   **Service Management:**

    -   Create, read, update, and delete service.

## Technologies Used

-   **Node.js** – JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express** – Web application framework for Node.js.
-   **TypeScript** – A superset of JavaScript that adds static types.
-   **Prisma ORM** – ORM (Object Relational Mapper) for PostgreSQL.
-   **PostgreSQL** – SQL database used to store customers, bike and services.

## Requirements

Before running the project locally, make sure you have the following installed:

-   **Node.js** – Version 16.x or higher
-   **PostgreSQL** – Database (you can use Docker too)
-   **Prisma CLI** – ORM setup

## Setting Up the Project Locally

### 1. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/theMorshed/Bike_Servicing_Management.git
```

### 2. Install Dependencies

Navigate to the project directory and install all required dependencies:

```bash
cd Bike_Servicing_Management
npm install
```

### 3. Configure Environment Variables

Edit .env file in the root directory of the project, and set the DATABASE_URL

```bash
DATABASE_URL="postgresql://username:password@localhost:5432/db_name?schema=public"
```

-   **DATABASE_URL:** – Your MongoDB connection URL (can be a local MongoDB instance or a MongoDB Atlas connection string).

### 4. Run the Application

Start the development server by running the following command:

```bash
npm run dev
```

This will start the server on the port specified in your .env file (default: 5000).

### 5. Access the Application

Once the server is running, you can access the application API at:

```bash
http://localhost:3000
```

## Development & Contribution

-   Fork the repository to your own GitHub account.
-   Clone your fork to your local machine.
-   Create a new branch for your changes.
-   Make your changes and commit them.
-   Push your changes and create a pull request.

We welcome contributions and improvements! If you have suggestions, feel free to open an issue or submit a pull request.