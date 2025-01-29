import { getUsersRepository } from "../../repository/user/userRepository";
import { User } from "../../types/User";

export const getUsersService = async (): Promise<User[]> => {
    return getUsersRepository();
};