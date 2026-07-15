import express from 'express';
import mongoose from 'mongoose';
import { userRouter } from './routes/api';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/mydb';

app.use(express.json());

app.use('/api/users', userRouter);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error(err));