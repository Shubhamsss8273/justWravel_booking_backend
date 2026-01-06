# 🚀 Booking System API Server

A robust, production-ready backend service for managing reservations, built with **Node.js**, **Express**, and **Prisma ORM**.

---

## 🛠 Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/) (v18+)
- **Framework:** [Express.js](https://expressjs.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Database:** MySQL
- **ORM:** [Prisma](https://www.prisma.io/)
- **Deployment:** [Render](https://render.com/)

---

## ⚙️ Getting Started

### 1. Prerequisites

- A running **MySQL** instance.
- Node.js installed on your local machine.

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/Shubhamsss8273/justWravel_booking_backend

# Install dependencies
npm install

# if schema doesn't exist inside your database only then run this command otherwise skip to next one
npx prisma db push

# generate prisma client
npx prisma generate

# start the server
npm run start
```
