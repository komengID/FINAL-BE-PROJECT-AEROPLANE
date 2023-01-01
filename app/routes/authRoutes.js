const router = require('express').Router();
// const { login, register, verify, getAllUsers, getProfile, loginGoogle, updateProfile } = require('../controllers/authController');
const { login, register, verify, getAllUsers, getProfile, updateProfile } = require('../controllers/authController');
const isAdmin = require('../../middleware/isAdmin');
// middleware
const auth = require('../../middleware/authentication');
const upload = require('../../libs/uploader');

router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/verify', verify);
router.get('/auth/allusers', auth, isAdmin, getAllUsers);
router.get('/auth/profile', auth, getProfile);
// router.get('/auth/google-login', loginGoogle);
router.put('/auth/profile', auth, upload.single('image'), updateProfile);

module.exports = router;