const users= require('../data')

module.exports={
     home:(req, res) =>{
   res.send('manager API')
},
getAllUsers :(req, res)=>{
    res.json({
        message:'fetched users succesfully',
        results:users
    })
 },
 getSingleUser :(req, res)=>{
    const id=req.params.id;
    const single_user=users.find(single_user =>single_user.id === parseInt(id))
    if(single_user){
        res.status(201).json({
            message:'fetched  single user succesfully',
            results:single_user})  
    } else{
        res.status(404).json({error: 'Single user not found'});
    }

 },

 getSignUp :(req, res)=>{
   res.json({
       message:'please signup',
      
   })
},

postSignUp : (req, res) =>{
 
const { name,email,username,password}=req.body;

if(!name || !email || !username || !password){
   return res.status(400).json({  error: 'Missing required fields'})
}
const existingUser=users.find((single_user) => single_user.username === username);
if(existingUser){
return res.status(409).json({error: 'Username already taken'})
}


const newUser={
   name,
   email,
   username,
   password
 };
 users.push(newUser);
 res.status(201).json({message: 'User created successfully'})
 
},

getLogin : (req, res)=>{
   res.json({
       message:'please Login',
      
   })
},
postLogin : (req, res) =>{
   const{username, password }=req.body;

   if(!username || !password){
      return res.status(400).json({error: 'Missing fields requird'})
   }

   const single_user=users.find((single_user) => single_user.username===username);

   if(!single_user){
      return res.status(401).json({ error: 'Invalid Username'})
   }
   if(single_user.password !== password){
      return res.status(401).json({error: 'Invalid Password'})
   }

   res.status(201).json({message: 'Login Succesful'})
},

updateUser :  (req, res) =>{
    const id = req.params.id;
    const single_user=users.find(single_user => single_user.id ===parseInt(id));
    if(single_user){
        single_user.username=req.body.username;
        single_user.email=req.body.email
        res.status(201).json({
            message:'updated   single user email and username succesfully',
            results:single_user
        })
    } else {
        res.status(404).json({error: 'User not found'})
    }
 },

 deleteUser :(req, res) =>{
    const id=req.params.id;
    const index=users.findIndex(single_user => single_user.id ===parseInt(id))
     if (index !== -1){
        const deletedSingle_user =users.splice(index, 1);
        res. status(201).json(deletedSingle_user[0]);
     } else{
        res.status(404).json({ error: 'User not found'})
     }

 }



}