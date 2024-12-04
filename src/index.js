const express = require('express')
const cors = require('cors')
const connectDB = require('./configs/db')
require('dotenv').config()

const userRoutes = require('./routes/userRoutes');
const handleErrors = require('./middleware/errorHandler');

const app = express()
const PORT = process.env.PORT || 3000

console.log('Starting server setup...');

connectDB()

app.use(cors())
app.use(express.json())


app.use('/api/users', userRoutes);

app.use(handleErrors);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })

 

