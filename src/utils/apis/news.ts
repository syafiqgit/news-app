/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Response } from "./types";

export const getTopHeadlines = async () => {
  try {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=d995d1d10e6f4fd2aea9dd4a3d9f1ff0"
    );
    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
