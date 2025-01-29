import { Request, Response } from "express";
import { NOT_FOUND, UNKNOWN_SERVER_ERROR } from "../../../utils/controllerConsts";
import * as userService from "../../service/user/userService";

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.params.id;

    const user = await userService.getUserById(userId);

    if (!user) {
      res.status(404).json({ message: NOT_FOUND });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: UNKNOWN_SERVER_ERROR });
  }
};
