
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

# API Documentation

This API provides functionalities to manage bookings for movie shows.

## Table of Contents
- [Introduction](#introduction)
- [Base URL](#base-url)
- [Authentication](#authentication)
- [Error Handling](#error-handling)
- [Endpoints](#endpoints)
  - [Create Booking](#1-create-booking-post-apibooking)
  - [Get All Bookings](#2-get-all-bookings-get-apibooking)
- [Database Schema](#database-schema)
- [Additional Notes](#additional-notes)

## Introduction
This API provides functionalities to manage bookings for movie shows. You can create new bookings and retrieve existing ones.

## Base URL
```
http://localhost:${PORT}
```
Replace `${PORT}` with the actual port number from your `.env` file.

## Authentication
This API currently does not require any specific authentication mechanisms.

## Error Handling
The API will respond with error codes in the following format:

- **400 (Bad Request):** Invalid request body format or missing required parameters
- **404 (Not Found):** Resource not found (e.g., trying to get a booking that doesn't exist)
- **500 (Internal Server Error):** Unexpected error occurred on the server side

## Endpoints

### 1. Create Booking (POST /api/booking)

**Description:** Creates a new booking for a show.

#### Request:
- **Method:** POST
- **Body:** (JSON format)

```json
{
  "movieName": "string", // (required) - Name of the movie
  "timeSlot": "string",  // (required) - Time slot for the show (e.g., "10:00 AM")
  "A1": "boolean",       // (optional) - Availability of seat A1
  "A2": "boolean",       // (optional) - Availability of seat A2
  "A3": "boolean",       // (optional) - Availability of seat A3
  "A4": "boolean",       // (optional) - Availability of seat A4
  "D1": "boolean",       // (optional) - Availability of seat D1
  "D2": "boolean"        // (optional) - Availability of seat D2
}
```

#### Response:

**Success:** (Status Code: 201)
```json
{
  "msg": "show booked successfully.",
  "data": {
    // Object containing the newly created booking details (same structure as request body)
  }
}
```

**Error:** (Status Code: 400 or 404)
```json
{
  "error": "Error message"
}
```

#### Example Request:
```http
POST http://localhost:8080/api/booking
Content-Type: application/json

{
  "movieName": "The Matrix",
  "timeSlot": "08:00 PM",
  "A1": true,
  "A2": true,
  "A3": false,
  "A4": true,
  "D1": false,
  "D2": false
}
```

### 2. Get All Bookings (GET /api/booking)

**Description:** Fetches all existing bookings (shows) from the database.

#### Request:
- **Method:** GET
- **Body:** No body required

#### Response:

**Success:** (Status Code: 200)
```json
[
  {
    // Object representing a booking (show) containing details like movieName, timeSlot, seat availabilities, etc.
  },
  {
    // Another booking object (show) details
  }
  // ... (more booking objects if available)
]
```

**Error:** (Status Code: 404)
```json
{
  "error": "Error message"
}
```

#### Example Request:
```http
GET http://localhost:8080/api/booking
```

## Database Schema
The API interacts with a MongoDB collection called `shows`. Each document in this collection represents a movie show with the following fields:

- `movieName`: String - Name of the movie
- `timeSlot`: String - Time slot for the show (e.g., "10:00 AM")
- `A1`, `A2`, `A3`, `A4`, `D1`, `D2`: Boolean - Seat availability status

