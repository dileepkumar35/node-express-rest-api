import express from 'express';
import { createUser, getAllUsers, getUser, updateUser, deleteUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);

// users/2 => req.params { id:2 }
router.get('/', getAllUsers);

router.get('/:id', getUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;