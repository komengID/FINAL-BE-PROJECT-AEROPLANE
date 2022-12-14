const {model} = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models').Users;

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({where: {email}});
        if (!user) return res.status(400).json({message: 'Email tidak terdaftar'});
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) return res.status(400).json({message: 'Password salah'});
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        res.status(200).json({message: 'Login berhasil', token});
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

const register = async (req, res) => {
    const {firstName, lastName, email, password, username, country_code, phone_number, address} = req.body;
    const user = await User.findOne({where: {email: email}});
    if (user) {
        return res.status(400).json({message: 'User already exists'});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        username,
        country_code,
        phone_number,
        address
    });
    const token = jwt.sign({id: newUser.id}, process.env.JWT_SECRET);
    res.status(201).json({message: 'User created successfully', token});
};

const verify = async (req, res) => {
    const {token} = req.body;
    if (!token) return res.status(400).json({message: 'Token tidak ada'});
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({where: {id: verified.id}});
        if (!user) return res.status(400).json({message: 'User tidak ada'});
        user.verified = true;
        await user.save();
        res.status(200).json({message: 'User berhasil diverifikasi'});
    } catch (error) {
        res.status(400).json({message : 'Token tidak valid'});
    }
};

const getProfile = async (req, res) => {
 const {id} = req.param;
 try {
    const profile = await User.findOne({where: {id}});
    res.status(200).json({
        profile
    });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message
        });
    }
 }

module.exports = {
    login, register, verify, getProfile
}