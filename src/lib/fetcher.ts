import { HOST_API } from "../constants";
import { Response } from "../types/reponse";

export async function fetcher<T>(url: string, options?: RequestInit): Promise<Response<T>> {
  try {
    const response = await fetch(HOST_API + url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return { message: "Có lỗi xảy ra" };
  }
}
