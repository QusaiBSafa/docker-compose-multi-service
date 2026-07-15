# Docker Compose Multi-Service App

## Description
A simple multi-service application with a Node.js API and a MongoDB database, set up using Docker Compose.

## What's Built
- Node.js API with Express
- MongoDB for data storage

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/docker-compose-multi-service.git
   cd docker-compose-multi-service
   ```
2. Install dependencies:
   ```bash
   docker-compose up --build
   ```
3. Access the API at `http://localhost:3000/api/users`

## API Endpoints
- `GET /api/users` - Retrieve all users
- `POST /api/users` - Create a new user

## Environment Variables
- `MONGO_URI` - MongoDB connection string (default: `mongodb://mongo:27017/mydb`)
