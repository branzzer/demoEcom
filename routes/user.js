const { Router } = require('express')
const { login, updateUserById, findUserById, signup, deleteUserById } = require('../controller/user')

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.patch('/updateUser/:id', updateUserById)
router.get('/:id', findUserById)
router.delete('/:id', deleteUserById)



module.exports = router;