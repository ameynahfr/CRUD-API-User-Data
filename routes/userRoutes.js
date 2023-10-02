import express from 'express'
import { createUser } from '../controllers/userControllers.js'
import { getAllUsers } from '../controllers/userControllers.js'
import { getUserById } from '../controllers/userControllers.js'
import { getUserByAge } from '../controllers/userControllers.js'
import { updateUser } from '../controllers/userControllers.js'
import { deleteUser } from '../controllers/userControllers.js'
const router = express.Router()

router.post('/new-user', createUser)
router.get('/all-users', getAllUsers)
router.get('/search-by-id/:id', getUserById)
router.get('/search-by-age/:age', getUserByAge)
router.put('/update-user/:id', updateUser)
router.delete('/delete-user/:id', deleteUser)
export default router