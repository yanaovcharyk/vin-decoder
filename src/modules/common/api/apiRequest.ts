import { config } from "@/common/config";

export async function apiRequest<T>(pathEndpoint: string): Promise<T> {
  const response = await fetch(`${config.baseUrl}${pathEndpoint}`);

  if (!response.ok) {
    throw new Error("Request failed");
  }

  return response.json();
}
