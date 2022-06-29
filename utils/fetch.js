import Axios from "axios";
import BASE_URL from "./baseUrl";

export const publicFetch = Axios.create({ baseURL: BASE_URL });
