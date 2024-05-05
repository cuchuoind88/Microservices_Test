import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

router.post('/api/users/signout', (req:any, res:any) => {
  req.session = null;

  res.send({});
});

export { router as signoutRouter };
