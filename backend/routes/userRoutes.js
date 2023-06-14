import express from 'express';
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  createNote,
  getNote,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/note')
.post(protect, createNote)
.get(protect, getNote);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
