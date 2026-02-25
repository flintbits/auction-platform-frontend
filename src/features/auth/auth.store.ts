import { apiFetch } from "../../shared/api/client";
import type { AuthState, User } from "./auth.types";


class AuthStore {
  private state: AuthState = {
    isAuthenticated: false,
    isOnboarded: false,
    user: null,
    initialized: false,
  }

  get isAuthenticated() {
    return this.state.isAuthenticated;
  }

  get isOnboarded() {
    return this.state.isOnboarded;
  }

  get user() {
    return this.state.user;
  }

  get initialized() {
    return this.state.initialized;
  }

  get snapshot(): AuthState {
    return { ...this.state };
  }


  async init() {
    if (this.state.initialized) return;

    try {
      const user: User = await apiFetch("/auth/me")
      this.state = {
        user,
        isAuthenticated: true,
        isOnboarded: user.is_onboarded,
        initialized: true
      };
    } catch {
      this.clear();
    }
  }

  login(user: User) {
    this.state = {
      user,
      isAuthenticated: true,
      isOnboarded: user.is_onboarded,
      initialized: true
    }
  }

  logout() {
    this.clear()
  }

  private clear() {
    this.state = {
      user: null,
      isAuthenticated: false,
      isOnboarded: false,
      initialized: true
    }
  }
}

export const authStore = new AuthStore();


/*
Global 401 → auto logout
Silent session refresh
Viewer (no-login) mode
Auth error boundaries
*/
