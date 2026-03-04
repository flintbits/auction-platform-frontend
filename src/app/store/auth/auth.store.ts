import { create } from "zustand";
import type { AuthState, User } from "../../../features/auth/types/auth.types";
import { apiFetch } from "../../../shared/api/client";

type AuthStore = AuthState & {
  init: () => Promise<void>;
  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  isAuthenticated: false,
  isOnboarded: false,
  user: null,
  initialized: false,

  init: async () => {
    if (get().initialized) return;

    try {
      const user: User = await apiFetch("/auth/me");
      set({
        user,
        isAuthenticated: true,
        isOnboarded: user.is_onboarded,
        initialized: true,
      });
    } catch {
      set({
        user: null,
        isAuthenticated: false,
        isOnboarded: false,
        initialized: true,
      });
    }
  },

  login: (user) =>
    set({
      user,
      isAuthenticated: true,
      isOnboarded: user.is_onboarded,
      initialized: true,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isOnboarded: false,
      initialized: true,
    }),
}));
