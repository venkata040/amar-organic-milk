# 🥛 Amar Organic Milk

A full-stack e-commerce web application for an organic milk delivery business.

The project allows customers to browse dairy products, add products to a shopping cart, place orders, and manage their accounts. An authenticated admin dashboard provides product, order, customer, payment, and customer-message management.

---

## 🚀 Live Project

> Deployment coming soon.

---

## 📌 Project Overview

Amar Organic Milk was developed as a full-stack application to demonstrate practical software development and DevOps skills.

The application includes:

- Customer-facing e-commerce website
- Product catalogue
- Shopping cart
- Checkout and order placement
- Customer registration and login
- JWT-based authentication
- Role-based admin authorization
- Admin dashboard
- Product management
- Order management
- Customer management
- Payment records
- Customer contact messages
- MySQL database integration
- RESTful APIs

---

# ✨ Features

## 👤 Customer Features

### Home Page

- Premium responsive navigation
- Hero section
- Featured products
- Why choose us section
- Subscription plans
- Customer testimonials
- About section
- Contact section
- Footer

### Products

Customers can:

- View available products
- View product prices
- Add products to cart
- Increase/decrease quantities
- Remove products from cart

### Shopping Cart

The cart provides:

- Product summary
- Quantity management
- Subtotal calculation
- Total calculation
- Checkout navigation

### Checkout

Customers can provide:

- Full name
- Phone number
- Email address
- Delivery address
- City
- Postal code
- Payment method

Orders are submitted to the backend and stored in MySQL.

---

# 🔐 Authentication & Authorization

The application uses JWT-based authentication.

### Customer

Authenticated customers can access customer functionality but cannot access the admin dashboard.

### Administrator

Administrators have access to protected administrative functionality.

Admin authorization is implemented using:

- JWT authentication middleware
- Admin role middleware
- Protected React routes

---
# 📸 Application Screenshots

## 🏠 Customer Homepage

![Customer Homepage](screenshots/homepage.png)

## 🥛 Products

![Products Page](screenshots/products.png)

## 🛒 Shopping Cart

![Shopping Cart](screenshots/cart.png)

## 📊 Admin Dashboard

![Admin Dashboard](screenshots/admin-dashboard.png)

## 📦 Admin Orders

![Admin Orders](screenshots/admin-orders.png)

## 👥 Admin Customers

![Admin Customers](screenshots/admin-customers.png)

# 🛠️ Admin Dashboard

The admin dashboard provides management functionality for:

### 📊 Dashboard

Displays business statistics such as:

- Total orders
- Today's orders
- Revenue
- Customers
- Other business metrics

### 🥛 Products

Administrators can:

- Add products
- Edit products
- Delete products
- View products

### 📦 Orders

Administrators can:

- View customer orders
- View order details
- Update order status

### 👥 Customers

Administrators can:

- View registered customers
- Search customer information
- View customer roles

### 💳 Payments

Administrators can view:

- Payment records
- Payment methods
- Payment amounts
- Revenue information

### 📩 Messages

Administrators can:

- View customer enquiries
- View contact information
- Mark messages as read/unread

---

# 🏗️ Technology Stack

## Frontend

- React
- React Router
- JavaScript
- HTML5
- CSS3
- Fetch API

## Backend

- Node.js
- Express.js
- REST APIs
- JWT Authentication
- CORS
- dotenv

## Database

- MySQL

## Development Tools

- Git
- GitHub
- Visual Studio Code
- MySQL Workbench
- npm

## Cloud / DevOps

The project is designed for deployment using AWS services such as:

- EC2
- RDS
- Application Load Balancer
- Route 53
- S3
- IAM
- CloudWatch

---

# 🏛️ Application Architecture

```text
                    ┌──────────────────────┐
                    │      Customer        │
                    │      Browser         │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React Frontend     │
                    │                      │
                    │ Products             │
                    │ Cart                 │
                    │ Checkout             │
                    │ Authentication       │
                    └──────────┬───────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌──────────────────────┐
                    │   Node.js / Express  │
                    │      Backend         │
                    │                      │
                    │ Routes               │
                    │ Controllers          │
                    │ Middleware           │
                    │ JWT Authentication   │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │    MySQL Database    │
                    │                      │
                    │ Users                │
                    │ Products             │
                    │ Orders               │
                    │ Order Items          │
                    │ Payments             │
                    │ Messages             │
                    └──────────────────────┘