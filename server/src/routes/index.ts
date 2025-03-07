
import express from 'express';
const router = express.Router();
import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

// serve up react front-end in production
// router.use((_req: Request, res: Response) => {
//   res.sendFile(path.join(__dirname, '../../../client/dist/index.html'));
// });

export default router;
