// import { setAuthState } from "../../auth/authStore";
import { authStore } from "../../features/auth/auth.store";
import { apiFetch } from "./client";

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
  console.log("code is here")
  const data: LoginResponse = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });

  authStore.login(data.user)

  return data.user
}

//export async function register() {}

export async function logout() {
  await apiFetch("/auth/logout", { method: "POST" });
  authStore.logout()
}


//export async function refreshToken() {}
