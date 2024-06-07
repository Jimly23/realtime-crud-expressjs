import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ProductRoute from './routes/ProductRoute.js'
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(3000, () => {
    console.log(`Server running in port 3000`);
})