const express =require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const routes=require('./routes');
const app =express();
const port=process.env.PORT || 8080;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


if(process.env.NODE_ENV ==='production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res)=>{
    rs.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/secondChance")
.then(()=>console.log('MongoDB Connected'));


//server static assets if in production


app.listen(port, ()=> console.log('Listening on port ' + port));
