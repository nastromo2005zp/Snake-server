const express = require('express');
require('dotenv').config();
const userRouter = require('./routes/user.routes');
const scoreRouter = require('./routes/score.routes');
const PORT = process.env.PORT || 8080;

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use('/api', userRouter);


app.listen(PORT, () => console.log(`server started on port ${PORT}`));