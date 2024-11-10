
# BookMyShow Backend

This is the backend of the BookMyShow clone application, built with **Node.js** and **Express**. The backend provides APIs for booking tickets for listed shows and fetching last booking. Data is stored in a **MongoDB Atlas** database.

## Tech Stack
- **Node.js** - JavaScript runtime for the backend
- **Express** - Framework for building RESTful APIs
- **MongoDB** - Database hosted on MongoDB Atlas
- **Render** - Deployment platform for backend services

## Features
- API for fetching booked shows and for booking shows as well
- RESTful endpoints to manage CRUD operations for bookings
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
   PORT=8080
   MONGODB_CONN_STRING=<mongodb-atlas-connection-string>
5. Start the server:
   ```bash
   node app.js


Usage
The backend server will start at http://localhost:8080 (default port is specified in .env).
Test endpoints using tools like Postman or integrate it with the frontend.
Deployment
The backend is deployed on Render. To deploy:

Push the latest code to GitHub.
Connect the repository to Render.
Configure environment variables in Render to match those in your .env file.
Render will automatically deploy the latest changes.


API Documentation 
API Endpoints
1. Create a Booking
Endpoint: POST /api/booking

Description: Creates a new booking for a specified movie, time slot, and seat categories.

URL: http://localhost:8080/api/booking

Method: POST

Request Body:

movieName (String): Name of the movie to book (required).
timeSlot (String): Time slot for the booking (required).
A1, A2, A3, A4, D1, D2 (Number): Optional. Number of seats booked in each category.
Example Request:

json
Copy code
{
  "movieName": "Inception",
  "timeSlot": "7:00 PM",
  "A1": 3,
  "A2": 2,
  "A3": 0,
  "A4": 1,
  "D1": 0,
  "D2": 1
}
Response:

Status Code: 201 Created
Example Response:
json
Copy code
{
  "msg": "show booked successfully.",
  "data": {
    "_id": "61e3c2cbe29b7c0015f2d8ec",
    "movieName": "Inception",
    "timeSlot": "7:00 PM",
    "A1": 3,
    "A2": 2,
    "A3": 0,
    "A4": 1,
    "D1": 0,
    "D2": 1,
    "__v": 0
  }
}
2. Retrieve All Bookings
Endpoint: GET /api/booking
Description: Retrieves all bookings from the database.
URL: http://localhost:8080/api/booking
Method: GET
Response:
Status Code: 200 OK
Example Response:
json
Copy code
[
  {
    "_id": "61e3c2cbe29b7c0015f2d8ec",
    "movieName": "Inception",
    "timeSlot": "7:00 PM",
    "A1": 3,
    "A2": 2,
    "A3": 0,
    "A4": 1,
    "D1": 0,
    "D2": 1
  },
  {
    "_id": "61e3c2fbe29b7c0015f2d8ef",
    "movieName": "Interstellar",
    "timeSlot": "9:00 PM",
    "A1": 2,
    "A2": 4,
    "A3": 1,
    "A4": 2,
    "D1": 0,
    "D2": 3
  }
]
Error Handling
The API handles errors gracefully and provides descriptive messages:

404 Not Found: If a request to an invalid endpoint or with incorrect data is made.
500 Internal Server Error: For unexpected errors on the server side.
Example error response:

json
Copy code
{
  "error": "An error occurred while processing your request."
}
Middleware
CORS: Cross-Origin Resource Sharing is enabled to allow requests from different origins.
Body Parsing: JSON and URL-encoded body parsing are enabled.
This README provides a comprehensive API documentation schema for setting up, using, and understanding the API functionality. Let me know if further modifications are needed!












