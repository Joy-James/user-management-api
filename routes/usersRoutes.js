const express= require('express');
const router=express.Router();
const{ home, getAllUsers, getSingleUser, getSignUp, postSignUp, getLogin, postLogin, updateUser, deleteUser,}= require('../controllers/usersController')

home
router.get('/', home)

//list all the users
router.get ('/users',getAllUsers)
 //list a single user 
 router.get('/users/:id', getSingleUser)


// sign-up end point
router.get ('/signup', getSignUp)
router.post ('/signup', postSignUp)

//Login endpoint
router.get ('/login',getLogin)
router.post('/login', postLogin)

 
 //PUT (Update ) a user

 router.put('/users/:id', updateUser)
 // delete a user 
 router.delete('/users/:id', deleteUser)









module.exports={
    router
}