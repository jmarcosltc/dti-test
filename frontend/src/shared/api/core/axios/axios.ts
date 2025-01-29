import axios from "axios";

import env from "../../../env/env";

export const httpClient = axios.create({
    baseURL: env.BE_API_URL,
});