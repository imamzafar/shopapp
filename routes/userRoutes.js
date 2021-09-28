import express from "express";
const router = express.Router();
import {
  // authUser,
  addUser,
  // getUserProfile,
  // updateUserProfile,
  getUsers,
  // deleteUser,
  // getUserById,
  // updateUser,
  getUsersAndSales,
} from "../controllers/userController.js";

router.route("/").post(addUser).get(getUsers);
router.route("/sales").get(getUsersAndSales);
// router.post('/login', authUser)
// router
//   .route('/profile')
//   .get(protect, getUserProfile)
//   .put(protect, updateUserProfile)
// router
//   .route('/:id')
//   .delete(protect, admin, deleteUser)
//   .get(protect, admin, getUserById)
//   .put(protect, admin, updateUser)

export default router;
