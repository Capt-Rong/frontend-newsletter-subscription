# Newsletter Subscription

## ✨ Overview

A responsive newsletter subscription form built with HTML, CSS, and JavaScript. Includes custom form validation, real-time error messages, and server integration using a simple Node.js backend.
[The frontend mentor link](
   https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv
)


## 👀 Preview
![Screenshot](./public/images/preview.jpg)

## 📁 Folder Structure

```
project-02-newsletter-subscription/
├── frontend/         # HTML, CSS, and JS for the form UI
│   ├── index.html
│   ├── style.css
│   ├── rwd.css
│   └── script.js
├── backend/          # Node.js + Express backend to receive email JSON
│   ├── server.js
│   └── package.json
```

## 🚀 Getting Started

1. Clone the repo
2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   node server.js
   ```
3. Open `frontend/index.html` in your browser

> Ensure CORS is allowed in development if testing from local HTML.

## 🔧 Built With

- HTML5
- CSS3 (including media queries)
- JavaScript (ES6+)
- Node.js + Express

## 📬 Features

- Custom email validation
- Live error messaging
- Success screen with dynamic email display
- Sends JSON data to backend via POST request
- Responsive layout across devices

## 🧪 Future Improvements

- Add real database storage (e.g., MongoDB, Supabase)
- Include loading state while sending
- Integrate with 3rd-party email marketing service


## 📄 License

This project is open-source and free to use.