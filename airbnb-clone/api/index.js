const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');
require('dotenv').config();

app.use(express.json());

const bcryptSalt  = bcrypt.genSaltSync(12);

mongoose.connect(process.env.MONGO_URL);




app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

app.get('/test', (req, res) => {
  res.json('test ok');
  
});

app.post('/register', async (req,res) => {
  console.log("bkbjh");
  const {name,email,password} = req.body;
  
  try {
    
    const userDoc = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password,bcryptSalt),
    });
    
    res.json({userDoc});
  } catch (e) {
    res.status(422).json(e);
  }
  

});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });
  if (userDoc) {
    const isPasswordValid = await bcrypt.compare(password, userDoc.password);
    if (isPasswordValid) {
      res.json('login successful');
    } else {
      res.status(401).json('invalid credentials');
    }
  } else {
    res.status(404).json('user not found');
  }
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});
