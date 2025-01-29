import axios from "axios";
import { User } from "../../../model/user/User";

const JP_API_URL = process.env.JP_API_URL;

export const getUserById = async (userId: string) => {
    const res = await axios.get(`${JP_API_URL}/users/${userId}`);
    return res.data as User;
}

export const getUsers = async () => {
    const res = await axios.get(`${JP_API_URL}/users`);
    return res.data as User[];
}