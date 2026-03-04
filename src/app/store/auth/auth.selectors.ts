import type { AuthState } from "../../../features/auth/types/auth.types";

export const selectIsAuthenticated = (s: AuthState) => s.isAuthenticated;

export const selectIsOnboarded = (s: AuthState) => s.isOnboarded;

