const { user } = require('../app/models');
const users = require('../app/models/users');

const isAdmin = async (req, res, next) => {
    try {
        const { user } = await users.findByPk(req.user.id);
        if (user.role === 0) {
            next();
        }
        throw new Error('You are not authorized to access this page');
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ 
            message: error.message
        });
    }
};
module.exports = isAdmin;