# 🍔 Foodies — Full-Stack Food Delivery Application

A modern full-stack food delivery application built with **React, Spring Boot, MongoDB, Spring Security, JWT Authentication, and Razorpay**.

Foodies provides a complete food-ordering experience for customers along with a dedicated admin dashboard for managing food items and orders.

## 🚀 Features

### 👤 Customer Application

- User registration and login
- JWT-based authentication
- Browse food items
- Explore food by category
- View food details
- Add and remove items from cart
- Cart management
- Place orders
- View order history
- Responsive user interface

### 👨‍💼 Admin Dashboard

- Admin authentication
- Add food items
- View and manage food menu
- View customer orders
- Manage orders

### 🔐 Security

- Spring Security
- JWT authentication
- Protected REST APIs
- Role-based access control
- Sensitive configuration excluded from Git

### 💳 Payment

- Razorpay payment integration
- Order and payment workflow

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- React Router
- Context API
- CSS
- Vite

### Backend
- Java 17
- Spring Boot 3
- Spring Security
- JWT
- Spring Data MongoDB
- REST APIs
- Maven

### Database
- MongoDB

### Cloud & Services
- AWS S3
- Razorpay

### Tools
- Git
- GitHub
- IntelliJ IDEA
- VS Code
- Postman
- Maven

## 🏗️ Project Architecture

```text
Foodies
│
├── foodies
│   └── React Customer Application
│
├── adminpanel
│   └── React Admin Dashboard
│
└── Foodapplication
    └── Spring Boot REST API
        ├── Controllers
        ├── Services
        ├── Repositories
        ├── Security / JWT
        └── MongoDB 
