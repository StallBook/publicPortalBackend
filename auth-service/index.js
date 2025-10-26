import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import cors from 'cors'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.AUTH_MONGODB_URI)
    .then(() => console.log('Connected to Auth MongoDB'))
    .catch(err => console.error(err));


PORT = process.env.AUTH_PORT || 5001;
app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`))