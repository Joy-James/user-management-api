const express= require('express');
const app=express();

const { router } = require('./routes/usersRoutes');
app.use(express.json())
const port=2000;

app.use(express.json())

 app.use('/', router)

 
 

app.listen(port,()=>console.log(`server running on port${port}`));