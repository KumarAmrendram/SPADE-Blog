import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
const app = express();

dotenv.config();

const PORT = 8000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));

const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
// console.log(USERNAME, PASSWORD);

Connection(USERNAME, PASSWORD);