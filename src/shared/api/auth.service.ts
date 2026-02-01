import { setAuthState } from "../../auth/authStore";
import { apiFetch, clearAccessToken, setAccessToken } from "./client";

type LoginResponse = {
  token: string,
  user: {
    id: number,
    email: string,
    role: 'ORGANIZER' | 'TEAM_ADMIN'
    is_onboarded: boolean
  }
}

export async function login(email: string, password: string) {
  const data: LoginResponse = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  setAccessToken(data.token);

  setAuthState({
    isAuthenticated: true,
    isOnboarded: data.user.is_onboarded ?? false,
    user: data.user
  })

  return data.user
}

//export async function register() {}

export function logout() {
  clearAccessToken();
}


//export async function refreshToken() {}
