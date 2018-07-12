const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path = require('path');
const alerts = require('./routes/api/alerts');
const upload = require('./routes/api/file-upload')
const app = express();


app.use(bodyParser.json());


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/over_dont")
.then(()=>console.log('MongoDB Connected'));

app.use('/api/alerts', alerts);
app.use('/api/file-upload', upload);

//server static assets if in production

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res)=>{
    rs.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}







const port=process.env.PORT || 8080;

app.listen(port, ()=> console.log('Listening on port ' + port));
