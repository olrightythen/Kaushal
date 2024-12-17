<h1 align="center">Kaushal</h1>
<p align="center">
<strong>Skill-to-Job Connector Platform</strong>
</p>

<p align="center">
A web-based platform designed to streamline the process of connecting skilled professionals with users seeking their services. Admins manage bookings, ensuring smooth and trusted service delivery.
</p>

---

## 🚀 **Features**

### 🎯 **User Features**
- 📅 **Service Booking**: Book professionals for specific tasks.
- 🔍 **Booking Tracking**: Monitor the status of your bookings.

### 👨‍🔧 **Professional Features**
- 📝 **Form Submission**: Submit details for verification.
- ✅ **Manual Verification**: Admin verifies and adds details to the database.

### 🔐 **Admin Features**
- 📊 **Admin Dashboard**: Manage bookings and professionals.
- ⚙️ **Booking Assignment**: Assign professionals to services.
- 🧾 **Professional Management**: Add and verify professionals manually.

---

## 🛠️ **Technologies Used**

<table>
  <tr>
    <th>Category</th>
    <th>Technologies</th>
  </tr>
  <tr>
    <td>Frontend</td>
    <td>React.js, React Router, Axios</td>
  </tr>
  <tr>
    <td>Backend</td>
    <td>Node.js, Express.js</td>
  </tr>
  <tr>
    <td>Database</td>
    <td>MySQL (Sequelize ORM)</td>
  </tr>
  <tr>
    <td>Other</td>
    <td>Nodemon, CORS, Body-Parser</td>
  </tr>
</table>

---

## 📂 **Folder Structure**

```plaintext
Kaushal/
│
├── backend/                # Backend server code
│   ├── config/             # Database configuration
│   ├── controllers/        # Controller logic
│   ├── models/             # Sequelize models
│   ├── routes/             # API routes
│   ├── migrations/         # Sequelize migrations
│   ├── .env                # Environment variables
│   ├── app.js              # Main entry file
│   └── package.json        # Backend dependencies
│
├── frontend/               # React.js frontend code
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page-level components
│   │   ├── services/       # API calls (Axios)
│   │   ├── App.js          # Main React file
│   │   ├── index.js        # Entry point
│   └── package.json        # Frontend dependencies
│
└── README.md               # Documentation
