import { Router } from 'express';
import passport from 'passport';
import tasks from '../controllers/tasks.controller';

const router = Router();

router
  .route('/')
  .get(tasks.getAllTasks)
  .post(passport.authenticate('jwt', { session: false }), tasks.addNewTask);

router
  .route('/:taskId')
  .get(tasks.getTaskById)
  .put(tasks.updateTask)
  .delete(tasks.deleteTask);

export default router;
