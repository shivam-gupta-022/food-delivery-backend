//new changes
const cors = require('cors')
require('dotenv').config()
global.foodData = require('./db')(function call(err, data, CatData) {
  //  console.log(data)
    // console.log(CatData)
  if(err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
})
// new changes

const express = require('express')
const app = express()
app.use(cors({
  origin: 'https://playful-babka-3c6cd3.netlify.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
const port = process.env.PORT || 4000
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

