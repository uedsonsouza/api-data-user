let users = [];

const createUser = (name, email, password) => {
    const newUser = { id: Date.now().toString(), name, email, password };
    users.push(newUser);
    return newUser;
};

const getAllUser = () => {
    return users;
};

const getUserById = (id) => {
    return users.find((user) => user.id === id);
};

const updateUser = (id, body) => {
    const index = users.findIndex((user) => user.id === id);
    users[index] = { id, ...body };
    try {
        return users[index];
    } catch (error) {
        console.log(error.message);
    }
    //return users[index];
};

const deleteUser = (id) => {
    const initialLength = users.length;
    users = users.filter((user) => user.id !== id);
    return users.length < initialLength;
};

module.exports = { createUser, getAllUser, getUserById, updateUser, deleteUser };