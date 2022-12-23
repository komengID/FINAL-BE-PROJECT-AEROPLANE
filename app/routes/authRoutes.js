const router = require('express').Router();
const {login, register, verify, getProfile, loginGoogle, updateProfile} = require('../controllers/authController');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth/verify', verify);
router.get('/auth/getProfile', getProfile);
router.get('/auth/google-login' , loginGoogle);
router.put('/auth/updateProfile', auth, upload.single('image'), updateProfile);

module.exports = router;