import express from 'express';
import { handleSignIn, handleSignUp } from '../controllers/authController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/signup', handleSignUp);
router.post('/signin', handleSignIn);


router.get("/profile", verifyToken, (req, res) => {
    res.json({ message: "Protected route accessed!", user: req.user });
});

export default router;