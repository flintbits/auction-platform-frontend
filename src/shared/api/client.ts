import { authStore } from "../../features/auth/auth.store";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function apiFetch(endpoint: string, options: RequestInit = {}) {

  console.log("code is here now")

  const headers: HeadersInit = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...options.headers,
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include",
    headers,
  })

  if (response.status === 401) {
    authStore.logout();
    throw new Error("Unauthorized");
  }

  if (!response.ok) {
    let messsage = "API request failed"
    try {
      const error = await response.json().catch(() => ({}))
      messsage = error.error || messsage
    } catch { }
    throw new Error(messsage)
  }

  return response.status === 204 ? null : response.json();
}
