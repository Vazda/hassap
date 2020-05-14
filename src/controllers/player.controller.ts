import { Request, Response } from 'express';
import _ from 'lodash';
import { generateError, generateResponse } from '../adapters/response';

import Player from '../models/player.model';

const getAllPlayers = async (req: Request, res: Response) => {
  try {
    const allPlayers = await Player.find();
    return res.send(allPlayers);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Players'), error: e });
  }
};

const addNewPlayer = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    'firstName',
    'rank',
    'lastName',
    'country',
    'team',
    'playerNo',
  ]);

  try {
    const newPlayer = new Player(newBody);
    await newPlayer.save();
    return res.send(newPlayer);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving Player'), error: e });
  }
};

const updatePlayer = async (req: Request, res: Response) => {
  const { playerId } = req.params;

  try {
    const player = await Player.findOneAndUpdate(
      { _id: playerId },
      { $set: req.body },
      { new: true },
    );

    return res.send(player);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Player'), error: e });
  }
};

const deletePlayer = async (req: Request, res: Response) => {
  const { playerId } = req.params;

  try {
    const player = await Player.findOneAndDelete({ _id: playerId });

    return res.send(player);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing Player'), error: e });
  }
};

const searchPlayers = async (req: Request, res: Response) => {
  const { query } = req.params;

  try {
    const filteredPlayers = await Player.find({
      $or: [
        { firstName: { $regex: query, $options: 'i' } },
        { lastName: { $regex: query, $options: 'i' } },
        { country: { $regex: query, $options: 'i' } },
      ],
    });

    return res.send(filteredPlayers);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error searching Players'), error: e });
  }
};

const PlayerController = {
  deletePlayer,
  updatePlayer,
  addNewPlayer,
  getAllPlayers,
  searchPlayers,
};

export default PlayerController;
