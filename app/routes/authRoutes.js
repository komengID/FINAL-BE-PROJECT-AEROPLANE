const router = require('express').Router();
const {login, register, verify, getProfile} = require('../controllers/authController');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth/verify', verify);
router.get('/auth/getProfile', getProfile);

module.exports = router;