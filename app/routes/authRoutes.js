const router = require('express').Router();
const {register} = require('../controllers/authController');

router.post('/auth/register', register);
router.get('/auth/login', (req, res) => {
    res.send('Login');
});

module.exports = router;