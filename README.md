
# BookMyShow Backend

This is the backend of the BookMyShow clone application, built with **Node.js** and **Express**. The backend provides APIs for user authentication, event details, and ticket bookings. Data is stored in a **MongoDB Atlas** database.

## Tech Stack
- **Node.js** - JavaScript runtime for the backend
- **Express** - Framework for building RESTful APIs
- **MongoDB** - Database hosted on MongoDB Atlas
- **Render** - Deployment platform for backend services

## Features
- API for fetching event details
- User authentication and ticket booking functionality
- RESTful endpoints to manage CRUD operations for events and bookings
- Error handling and data validation for secure and efficient processing

## Setup and Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ritez-0x53/capstone_bookmyshow-backend.git
2. Navigate to the project directory:
   ```bash
   cd capstone_bookmyshow-backend
3. Install dependencies:
   ```bash
   npm install
4. Create a .env file in the root directory to set up environment variables:
   ```bash
   PORT=<desired-port>
   MONGODB_URI=<mongodb-atlas-connection-string>
5. Start the server:
   ```bash
   node app.js


Usage
The backend server will start at http://localhost:<PORT> (default port is specified in .env).
Test endpoints using tools like Postman or integrate it with the frontend.
Deployment
The backend is deployed on Render. To deploy:

Push the latest code to GitHub.
Connect the repository to Render.
Configure environment variables in Render to match those in your .env file.
Render will automatically deploy the latest changes.

