import { apiPOST } from "@app/api/client";
import { useAuthStore } from "@app/store/auth/auth.store";


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
  const data: LoginResponse = await apiPOST("/auth/login", {
    body: JSON.stringify({ email, password })
  });

  useAuthStore.getState().login(data.user);

  return data.user
}

//export async function register() {}

export async function logout() {
  useAuthStore.getState().logout();
  await apiPOST("/auth/logout", { method: "POST" });
}


//export async function refreshToken() {}
