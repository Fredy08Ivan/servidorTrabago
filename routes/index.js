import routesx from 'express-promise-router';

import personaRouter from './persona.routes';
import postRouter from './post.routes'

const router=routesx();

router.use('/persona',personaRouter);
router.use('/post',postRouter)

export default router;