import { httpClient } from "../../core/axios/axios";
import { User } from "../../types/User";

export const getUsersRepository = async (): Promise<User[]> => {
  const response = await httpClient.get("/api/users");
  return response.data;
};
