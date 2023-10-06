const { Router } = require('express');
const { addUser } = require('../controllers/userController');

const router = Router();

router.post('/', addUser);
// router.post();

module.exports = router;
