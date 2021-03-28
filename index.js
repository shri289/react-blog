const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://wot50withcode:helloreact123@cluster0.xqajh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {useNewUrlParser: true}).then(() => console.log('DB connected'))
                        .catch(err => console.error(err));

app.get('/',(req, res) => {
  res.send('hello world')
})



app.listen(5000);