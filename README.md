<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Remind-Me-Later - MERN Stack Reminder App</title>
</head>
<body>
  <h1>📌 Remind-Me-Later - A MERN Stack Reminder Application</h1>

  <h2>📝 Overview</h2>
  <p>
    <strong>Remind-Me-Later</strong> is a full-stack web application built with the <strong>MERN stack</strong> 
    (MongoDB, Express, React, Node.js) that allows users to schedule reminders via email or SMS. 
    The app features a clean, responsive UI with real-time updates and comprehensive error handling.
  </p>

  <h2>✨ Features</h2>
  <ul>
    <li>Create reminders with custom messages</li>
    <li>Flexible scheduling with date/time picker</li>
    <li>Multiple notification methods (Email & SMS)</li>
    <li>Real-time updates of upcoming reminders</li>
    <li>Responsive design works on all devices</li>
    <li>Error handling with user-friendly notifications</li>
    <li>Modern UI with Material-UI components</li>
  </ul>

  <h2>🛠️ Tech Stack</h2>

  <h3>Frontend</h3>
  <ul>
    <li>React.js</li>
    <li>Material-UI</li>
    <li>React Hook Form</li>
    <li>date-fns</li>
    <li>Axios</li>
  </ul>

  <h3>Backend</h3>
  <ul>
    <li>Node.js</li>
    <li>Express</li>
    <li>MongoDB (Mongoose)</li>
    <li>Nodemailer (for email reminders)</li>
    <li>CORS</li>
  </ul>

  <h2>🚀 Getting Started</h2>

  <h3>Prerequisites</h3>
  <ul>
    <li>Node.js (v14+)</li>
    <li>MongoDB</li>
    <li>Git</li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/your-username/remind-me-later.git
cd remind-me-later</code></pre>

    <li>Set up backend:</li>
    <pre><code>cd backend
npm install
touch .env</code></pre>
    
    <p><strong>Add to <code>.env</code> file:</strong></p>
    <pre><code>MONGODB_URI=mongodb://localhost:27017/remindme
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
PORT=5000</code></pre>

    <li>Set up frontend:</li>
    <pre><code>cd ../frontend
npm install</code></pre>
  </ol>

  <h3>Running the Application</h3>
  <ol>
    <li>Start backend server:</li>
    <pre><code>cd backend
npm run dev</code></pre>

    <li>Start frontend development server:</li>
    <pre><code>cd ../frontend
npm start</code></pre>

    <li>Open your browser at: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li>
  </ol>

  <h2>🔧 Configuration</h2>

  <h3>Email Setup</h3>
  <ul>
    <li>For Gmail, enable "Less secure apps" or create an App Password</li>
    <li>Configure your email provider in <code>backend/services/emailService.js</code></li>
  </ul>

  <h3>SMS Setup (Optional)</h3>
  <ul>
    <li>To enable SMS reminders:</li>
    <ol>
      <li>Sign up for Twilio or another SMS provider</li>
      <li>Add credentials to <code>.env</code></li>
      <li>Uncomment SMS code in <code>reminderWorker.js</code></li>
    </ol>
  </ul>

  <hr>
  <p><strong>💡 Tip:</strong> Use tools like Postman to test API routes during development.</p>
</body>
</html>
