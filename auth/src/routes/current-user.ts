import express from 'express';
import { Request, Response } from 'express';
import { currentUser } from '@sgtickets/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req:any, res:any) => {
  res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
