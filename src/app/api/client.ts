import { useAuthStore } from "../../app/store/auth/auth.store";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function request(endpoint: string, options: RequestInit & { retry?: number, timeOut?: number } = {}) {
  const headers: HeadersInit = {
    ...(options.body ? { "Content-Type": "application/json" } : {}),
    ...options.headers,
  }

  //seperate retry, timeout and request headers
  const { retry = 0, timeOut = 1000 * 30, ...fetchOptions } = options

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), timeOut)

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...fetchOptions,
      credentials: "include",
      headers,
      signal: controller.signal
    })



    if (response.status === 401) {
      useAuthStore.getState().logout();
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
  } catch (error) {

    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error("Request timeout")
    }

    //retry if error and ignore when the error is 401(Unauthorized) and 403(Forbidden)
    if (retry > 0 && !(error instanceof Error && (error.message === "Unauthorized" || error.message === "Forbidden"))) {
      return request(endpoint, { ...options, retry: retry - 1 })
    }
    throw error
  } finally {
    clearTimeout(timeoutId)
  }
}



export function apiGET(url: string, options: RequestInit = {}) {
  return request(url, { ...options, method: "GET" })
}

export function apiPOST(url: string, options: RequestInit = {}) {
  return request(url, { ...options, method: "POST" })
}

export function apiDELETE(url: string, options: RequestInit = {}) {
  return request(url, { ...options, method: "DELETE" })
}

export function apiPATCH(url: string, options: RequestInit = {}) {
  return request(url, { ...options, method: "PATCH" })
}
