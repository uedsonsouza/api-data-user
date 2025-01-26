const userService = require('../services/userService');

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    const newUser = userService.createUser(name, email, password);
    try {
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getAllUser = async (_, res) => {
    try {
        const users = userService.getAllUser();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = userService.getUserById(id);
    try {
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const updateUser = userService.updateUser(id, req.body);
    try {
        res.status(200).json(updateUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const deleteUser = userService.deleteUser(id);
    try {
        res.status(200).json(deleteUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = { createUser, getAllUser, getUserById, updateUser, deleteUser };