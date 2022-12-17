const router = require('express').Router();
const {login, register, verify, getProfile, loginGoogle} = require('../controllers/authController');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth/verify', verify);
router.get('/auth/getProfile', getProfile);
router.get('/auth/google-login' , loginGoogle);
module.exports = router;