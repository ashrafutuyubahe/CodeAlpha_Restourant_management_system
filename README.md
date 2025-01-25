# Restaurant Management System

## Overview

This project is a Restaurant Management System built using Express.js and Sequelize (Node.js). It provides an efficient way to manage:

## Orders: 
Process and track customer orders.

## Inventory: 
Monitor stock levels and manage item usage.

## Reservations: 
Handle table reservations for customers.

## Menu Items:
Manage menu details, availability, and pricing.

The system also includes robust user authentication and role-based access control.


## Features

1. Authentication and Authorization

 -> User registration and login.

-> Role-based access for admin and customer.

2. Order Management

->Create, update, and track orders.

-> Assign orders to specific tables.

3. Inventory Management

-> Add and update inventory items.

-> Track inventory usage for menu recipes.

4. Menu Management

-> Add, update, and delete menu items.

-> Categorize menu items (e.g., appetizers, mains, desserts).

5. Reporting

Generate reports for:

-> Sales and Inventory usage


## Technologies Used

1.Node.js: Runtime environment.

2.Express.js: Web framework.

3.Sequelize: ORM for database interaction.

4.PostgreSQL: Relational database.


## Installation

1.git clone https://github.com/ashrafutuyubahe/restaurant-management-system.git
cd restaurant-management-system


2.npm install

3. confgure your .env file
4. npm start dev

  ##  API Endpoints 

# Authentication

POST /auth/register: User registration.

POST /auth/login: User login.

# Users

GET /users: Fetch all users.

GET /users/:id: Fetch a user by ID.

PUT /users/:id: Update user details.

DELETE /users/:id: Delete a user.

# Menu

GET /menu: Fetch all menu items.

POST /menu: Add a new menu item.

PUT /menu/:id: Update a menu item.

DELETE /menu/:id: Delete a menu item.

## Orders

POST /orders: Create a new order.

GET /orders: Fetch all orders.

PUT /orders/:id: Update an order.

DELETE /orders/:id: Delete an order.

## Inventory

GET /inventory: Fetch all inventory items.

POST /inventory: Add a new inventory item.

PUT /inventory/:id: Update inventory details.

DELETE /inventory/:id: Delete an inventory item.


# License

This project is licensed under the MIT License.




