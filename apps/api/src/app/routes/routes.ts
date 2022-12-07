import { Router } from 'express';
import tagsController from '../controllers/tag.controller';
import articlesController from '../controllers/article.controller';
import authController from '../controllers/auth.controller';
import profileController from '../controllers/profile.controller';

const api = Router()
  .use(tagsController)
  .use(articlesController)
  .use(profileController)
  .use(authController);

export default Router().use('/api', api);
