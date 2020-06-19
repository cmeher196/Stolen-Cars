const express = require('express');
const app = express();
const bodyParse = require('body-parser')
const cors = require('cors')

const PORT = 8080 || process.env.PORT
const users = require('./routes/users')

app.use(cors());  /// cross operation... CORS.
app.use(express.static('public'))
app.use(bodyParse.json())
app.use('/users',users)
app.listen(PORT, () => console.log(`listening at PORT ${PORT}`))