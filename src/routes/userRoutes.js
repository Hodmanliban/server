const express = require('express');
const router = express.Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser } = require('../controller/userController'); 

router.get("/", getAllUsers);               
router.get("/:user_id", getUserById);       
router.post("/", createUser);               
router.put("/:user_id", updateUser);       
router.delete("/:user_id", deleteUser);     

module.exports = router;




