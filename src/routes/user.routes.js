
const express = require('express');
const userRoutes = express.Router()
const services = require('../services/render')
const userController = require('../controllers/user.controller')


userRoutes.get('/', services.home_route);

userRoutes.get('/add-user', services.add_user_route);

userRoutes.get('/update-user', services.update_user_route);

//CRUD

userRoutes.post('/api/user/create', userController.create)
userRoutes.get('/api/user/fetchAll/:id?', userController.find)
userRoutes.put('/api/user/:id/update', userController.update)
userRoutes.delete('/api/user/:id/delete', userController.delete)

module.exports = userRoutes;