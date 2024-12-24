import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = req.body;
    
    // Validate that only the allowed fields are present
    const allowedFields = ['firstName', 'lastName', 'age'];
    const hasInvalidFields = Object.keys(user).some(key => !allowedFields.includes(key));

    if (hasInvalidFields) {
        return res.status(400).send('Invalid user data: Only firstName, lastName, and age are allowed.');
    }

    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
    // console.log(`User [${user.username}] added to the database.`);
    if (!foundUser || 
        !foundUser.firstName || 
        !foundUser.lastName || 
        foundUser.age === null) {
        return res.status(400).send('Invalid user data: firstName, lastName, and age must not be null.');
    }
}

export const getAllUsers = (req, res) => {
    console.log(`Users in the database: ${users}`);
    res.send(users)
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
    // res.send(req.params.id)
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id != id);
    res.send(`Users with ${id} deleted from the database.`);    
    // console.log(`user with id ${req.params.id} has been deleted`);    
    // users = users.filter((user) => user.id !== req.params.id);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id == id);
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(`User with id ${id} has been updated. `)
}

// OR

// export const updateUser =  (req,res) => {
//     const user = users.find((user) => user.id === req.params.id);
    
//     user.username = req.body.username;
//     user.age = req.body.age;

//     console.log(`username has been updated to ${req.body.username}.age has been updated to ${req.body.age}`)
// };