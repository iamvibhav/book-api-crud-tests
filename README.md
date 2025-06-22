
# 📚 Book API CRUD Tests

A simple and modern **Node.js** + **Express API** for managing books, fully tested with **Jest and Supertest**. 

---
## 📸 CLI Test Output

All CRUD routes were successfully tested using Jest and Supertest in a test environment.


![Screenshot 2025-06-22 193210](https://github.com/user-attachments/assets/cdd37c23-87a9-4f69-874a-49d602d66aa9)

---



## 🚀 Features

- RESTful CRUD operations for books
- MongoDB integration with Mongoose
- Structured project setup with Express
- Environment-based MongoDB configuration
- Full API test coverage using Jest + Supertest
- Clean code with modular routes and models

---

## 🛠 Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB, Mongoose
- **Testing:** Jest, Supertest
- **Environment Management:** dotenv

---

## 📁 Project Structure

```

book-api-crud-tests/
│
├── models/          # Mongoose schemas
│   └── Book.js
│
├── routes/          # API routes
│   └── bookRoutes.js
│
├── tests/           # Jest test suite
│   └── book.test.js
│
├── .env             # Environment variables
├── index.js         # Entry point
└── package.json

````

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/iamvibhav/book-api-crud-tests.git
cd book-api-crud-tests
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup `.env`

Create a `.env` file in the root directory:

```env
MONGO_URI=mongodb://localhost:27017/book-api
MONGO_URI_TEST=mongodb://localhost:27017/book-api-test
```

---

## ▶️ Running the Server

```bash
npm start
```

> Runs on `http://localhost:5000`

---

## 🧪 Running Tests

```bash
# Set environment to 'test' and run tests
$env:NODE_ENV="test"    # (PowerShell on Windows)
npm test
```

> All tests are written using Jest and Supertest.
> CRUD routes are fully covered.

---

## ✅ Sample API Routes

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/books`     | Get all books  |
| POST   | `/api/books`     | Add a new book |
| PUT    | `/api/books/:id` | Update a book  |
| DELETE | `/api/books/:id` | Delete a book  |

---

## 👨‍💻 Author

* [Vibhav](https://github.com/iamvibhav)

