import { Router } from 'express';
import passport from 'passport';
import news from '../controllers/news.controller';

const router = Router();

router
  .route('/')
  .get(
    // passport.authenticate('jwt', { session: false }),
    news.getAllNews,
  )
  .post(passport.authenticate('jwt', { session: false }), news.addNewNews);

// router.route('/updateStatus/:id')
//     .put(
//         passport.authenticate('jwt', { session: false }),
//         news.updateStatus,
//     );
router.route('/saved').get(
  // passport.authenticate('jwt', { session: false }),
  news.getAllSavedNews,
);

router.route('/search/:query').get(news.searchAllNews);

router.route('/published').get(
  // passport.authenticate('jwt', { session: false }),
  news.getAllPublishedNews,
);

router
  .route('/:newsId')
  .get(
    // passport.authenticate('jwt', { session: false }),
    news.getNewsById,
  )
  .put(passport.authenticate('jwt', { session: false }), news.updateNews)
  .delete(
    // passport.authenticate('jwt', { session: false }),
    news.deleteNews,
  );

export default router;
