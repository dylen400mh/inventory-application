const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const departments = [
  { name: 'Fruits', description: 'All kinds of fresh fruits' },
  { name: 'Vegetables', description: 'Fresh and organic vegetables' },
  { name: 'Dairy', description: 'Dairy products like milk, cheese, etc.' },
  { name: 'Bakery', description: 'Freshly baked goods' },
  { name: 'Beverages', description: 'Drinks and beverages' },
];

const items = [
  { department_id: 1, name: 'Apple', price: 0.50, quantity: 100, description: 'Fresh red apples' },
  { department_id: 1, name: 'Banana', price: 0.30, quantity: 150, description: 'Fresh bananas' },
  { department_id: 2, name: 'Carrot', price: 0.20, quantity: 200, description: 'Organic carrots' },
  { department_id: 3, name: 'Milk', price: 1.50, quantity: 50, description: 'Whole milk' },
  { department_id: 4, name: 'Bread', price: 2.00, quantity: 30, description: 'Whole wheat bread' },
  { department_id: 5, name: 'Orange Juice', price: 3.00, quantity: 40, description: 'Freshly squeezed orange juice' },
];

const createTables = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS department (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await pool.query(`
    CREATE TABLE IF NOT EXISTS item (
      id SERIAL PRIMARY KEY,
      department_id INT REFERENCES department(id) ON DELETE SET NULL,
      name VARCHAR(255) NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      quantity INT NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

const populateDepartments = async () => {
  for (const department of departments) {
    await pool.query(
      'INSERT INTO department (name, description) VALUES ($1, $2)',
      [department.name, department.description]
    );
  }
};

const populateItems = async () => {
  for (const item of items) {
    await pool.query(
      'INSERT INTO item (department_id, name, price, quantity, description) VALUES ($1, $2, $3, $4, $5)',
      [item.department_id, item.name, item.price, item.quantity, item.description]
    );
  }
};

const populateDatabase = async () => {
  try {
    //await createTables();
    await populateDepartments();
    await populateItems();
    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    await pool.end();
  }
};

populateDatabase();
