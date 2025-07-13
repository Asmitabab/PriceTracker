# 🛒 Price Tracker

Track Amazon product prices effortlessly and get **email alerts** when the price drops below your desired threshold!  
A fullstack app built with **React**, **Node.js**, **Express**, **Puppeteer**, and **Nodemailer**.  

---

## 🚀 Features

- 🔗 Submit any Amazon product URL  
- 💰 Set your desired price threshold  
- 📧 Receive email notifications when price drops  
- 🤖 Automated scraping using Puppeteer  
- ⏱ Periodic price checks every 30 minutes to 1 hour  
- 🔐 Secure environment variable handling for email credentials  
- 🌐 Ready for deployment on platforms like Render and Netlify  

---

## 🛠 Tech Stack

- **Frontend:**  
  🔹 React.js  
  🔹 Axios

- **Backend:**  
  🔹 Node.js  
  🔹 Express.js

- **Tools & Libraries:**  
  🔹 Puppeteer (Web Scraping)  
  🔹 Nodemailer (Email)  
  🔹 dotenv (Environment Variables)  
  🔹 cors (Cross-Origin Resource Sharing)  
  🔹 nodemon (Development)

---


---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Asmitabab/pricetracker.git
cd pricetracker
```

### 2. Backend Setup

- Install Dependencies

```bash
npm install
```

- Create a .env file in the project root with your email credentials and port

```bash
email=your-email@gmail.com
password=your-app-password
```

- Start the backend server

```bash
nodemon index.js
```

---

## 🧩 Future Improvements
- User authentication & dashboards
- Store tracked products & price history in a database (MongoDB)
- Visualize price trends with charts
- Support multiple e-commerce websites

---

## 👩‍💻 Author
**Asmita Babchhede**

🎓 B.Tech Electrical Engineering | IIT BHU
