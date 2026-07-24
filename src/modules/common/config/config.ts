import { requireEnv } from "./requireEnv";

export const config = {
  baseUrl: requireEnv("VITE_API_BASE_URL"),
};
