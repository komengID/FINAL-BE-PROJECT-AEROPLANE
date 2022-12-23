const router = require('express').Router();
const {login, register, verify, getProfile, loginGoogle, updateProfile} = require('../controllers/authController');

// middleware
const auth = require('../../middleware/authentication');
const upload = require('../../libs/uploader');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth/verify', verify);
router.get('/auth/profile', auth, getProfile);
router.get('/auth/google-login' , loginGoogle);
router.put('/auth/profile', auth, upload.single('image'), updateProfile);

module.exports = router;