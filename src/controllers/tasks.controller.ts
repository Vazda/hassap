import { Request, Response } from "express";
import _ from "lodash";
import { generateError, generateResponse } from "../adapters/response";
import Tasks from "../models/tasks.model";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const allTasks = await Tasks.find();
    return res.send(allTasks);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Tasks"), error: e });
  }
};

const addNewTask = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    "title",
    "category",
    "description",
    // 'date',
    "time"
    // 'location',
  ]);
  try {
    const newTasks = new Tasks(newBody);
    await newTasks.save();
    return res.send(newTasks);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error saving Tasks"), error: e });
  }
};

const getTaskById = async (req: Request, res: Response) => {
  const { taskId } = req.params;

  try {
    const tasks = await Tasks.findOne({ _id: taskId });
    return res.send(tasks);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Tasks"), error: e });
  }
};

const updateTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;
  const newBody = _.pick(req.body, [
    "title",
    "category",
    "description",
    // 'date',
    "time",
    "status"
    // 'location',
  ]);
  try {
    const task = await Tasks.findOneAndUpdate(
      { _id: taskId },
      { $set: newBody },
      { new: true }
    );

    return res.send(task);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error updating Task"), error: e });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  const { taskId } = req.params;

  try {
    const task = await Tasks.findOneAndDelete({ _id: taskId });

    return res.send(task);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error removing Task"), error: e });
  }
};

const TaskController = {
  deleteTask,
  updateTask,
  getTaskById,
  addNewTask,
  getAllTasks
};

export default TaskController;
