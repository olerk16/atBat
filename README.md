Baseball Stats App
A real-time baseball analytics application that helps coaches evaluate player performance using live data. Built with Angular, Node.js, GraphQL, RxJS, and D3.js for powerful data visualization and real-time updates.

Features
Player Performance Visualization: Bar charts showing player stats using D3.js.
Real-Time Updates: WebSocket integration for live updates.
GraphQL API: Efficient data retrieval and manipulation.
Modular Architecture: Clean separation of frontend and backend.
Responsive Design: Optimized for various devices.
Tech Stack
Frontend:
Angular: For building the user interface.
RxJS: For managing real-time updates.
D3.js: For creating dynamic and interactive charts.
Backend:
Node.js: Server-side runtime.
Express: Lightweight web framework.
GraphQL: Query and mutation API.
WebSockets: Real-time communication.
Database:
MongoDB: For storing player statistics and analytics.
Prerequisites
Node.js (v16 or later)
Angular CLI (v15 or later)
MongoDB (Ensure it's running locally or provide a connection URI)
Git (optional, for version control)
Setup
Clone the Repository
bash
Copy code
git clone https://github.com/your-username/baseball-stats-app.git
cd baseball-stats-app
Install Dependencies
Frontend:
bash
Copy code
cd baseball-stats-app
npm install
Backend:
Navigate to the backend folder (if separate) and install dependencies:

bash
Copy code
cd backend
npm install
Running the Application
Start MongoDB
Make sure MongoDB is running locally or remotely.

Start Backend
bash
Copy code
cd backend
node server.js
Start Frontend
bash
Copy code
cd baseball-stats-app
ng serve
Open your browser and visit http://localhost:4200.
