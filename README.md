# Huntley's Sauces

**Status:** Live

[Website](https://huntleysauce.com)

## Screenshot

![Screenshot](frontend/public/images/homeherov2.png)

## Overview

A full-stack MERN e-commerce site built for Huntley's Sauces, a condiment business based in Maryland. Customers can browse the sauce collection, view product details, add items to a cart, register and log in, and complete checkout with real payments through PayPal. The site includes a full admin dashboard for managing products, orders, and users, plus a contact form that emails the business directly.

## Features

- Browse products and view individual product details
- Persistent shopping cart with quantity selection
- User registration and login with JWT authentication (HTTP-only cookies)
- Multi-step checkout: shipping, payment method, place order
- Live PayPal and credit/debit card payments
- Order history and user profile
- Admin dashboard: create/edit/delete products, manage users, mark orders delivered
- Product image uploads via Cloudinary
- Contact form with email delivery to the business
- Responsive design for mobile and desktop

## Technologies Used

- React
- React Router
- Redux Toolkit + RTK Query
- Node.js / Express
- MongoDB / Mongoose
- JWT authentication
- PayPal API
- Cloudinary (image hosting)
- Resend (transactional email)
- CSS
- Vite
