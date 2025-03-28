# User Profile Management API

A RESTful API for user profile management with authentication using Express.js, MongoDB, and JWT.

## Features

- **User Registration**: Allows users to register by providing name, email, password, and address.
- **User Login**: Allows users to log in and receive a JWT token for authentication.
- **Profile Management**: Allows users to view and update their profile.

## Tech Stack

- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **File Upload**: Multer for handling profile picture uploads
- **Security**: Helmet for HTTP header security, bcryptjs for password hashing

## Installation

### Prerequisites

- Node.js
- MongoDB (either local or a cloud instance like MongoDB Atlas)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Siri503/UserProfile.git
2. **Install dependencies**

    Make sure you have Node.js and npm installed. Then run:

    ```bash
    npm install
    ```

3. **Create a `.env` file**

    Copy the following template into a `.env` file in the root directory:

    ```
    MONGO_URI=<your_mongo_database_url>
    JWT_SECRET=<your_jwt_secret_key>
    PORT=5000
    ```

    - Replace `<your_mongo_database_url>` with your MongoDB connection string.
    - Replace `<your_jwt_secret_key>` with a secret key for JWT.

4. **Start the server**

    Run the development server using `nodemon`:

    ```bash
    npm run dev
    ```

    Or run it without `nodemon`:

    ```bash
    npm start
    ```

    The server will start on `http://localhost:5000` (or the port specified in the `.env` file).



