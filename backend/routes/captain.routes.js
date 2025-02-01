const captainController = require('../controllers/captain.controller')
const express = require('express');
const router = express.Router();
const { body } = require('express-validator')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength().withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be at least 3 charaters long'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Color must be at least 3 charaters long'),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage('Color must be at least 3 charaters long'),
    body('vehicle.vehicleType').isIn([ 'car', 'motorcycle', 'auto' ]).withMessage('Invalid vehicleType')
],
    captainController.registerCaptain
)

module.exports  = router;