const express = require("express");

// // var cors = require('cors')

// DATACONNECT
// Import the MongoDB driver
const mongoose = require('mongoose');

// Connect to the MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/prepfusion' ); 
//specify database for unique email

// Listen for the 'open' event to know when the connection is successful
mongoose.connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Listen for the 'error' event to know when the connection fails
mongoose.connection.on('error', (err) => {
  console.log('MongoDB database connection failed:', err);
});




const app = express()
const port = 5000


// //middleware
// // app.use(cors())
app.use(express.json());  //orelse will return undefined on req.body

// // //Available routes
app.use('/auth', require('./routes/auth'))
// // app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Notify listening on port ${port}`)
})


