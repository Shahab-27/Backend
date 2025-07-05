import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
import connectDB from './DB/index.js';


connectDB();