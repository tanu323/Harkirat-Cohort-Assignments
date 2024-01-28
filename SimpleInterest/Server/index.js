import express from 'express';
import { simpleInterestRouter } from './Routes/simpleInterest.js';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors());

// Define a basic route
app.use("/", simpleInterestRouter);
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});