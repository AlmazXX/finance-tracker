import axios from "axios";

export const axiosApi = axios.create({baseURL: 'https://attractortrainingbase-js17-default-rtdb.europe-west1.firebasedatabase.app/finance-tracker'})