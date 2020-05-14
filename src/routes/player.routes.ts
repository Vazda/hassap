import { Router } from 'express';
import passport from 'passport';
import player from '../controllers/player.controller';

const router = Router();

router
  .route('/')
  .get(player.getAllPlayers)
  .post(player.addNewPlayer);

router.route('/search/:query').get(player.searchPlayers);

router
  .route('/:playerId')
  .put(player.updatePlayer)
  .delete(player.deletePlayer);

export default router;
