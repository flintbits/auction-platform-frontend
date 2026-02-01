
type AuthState = {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  user: {
    id: number;
    email: string;
    role: 'ORGANIZER' | 'TEAM_ADMIN';
    is_onboarded: boolean
  } | null
}

let authState: AuthState = {
  isAuthenticated: false,
  isOnboarded: false,
  user: null
}

export function getAuthState(): AuthState {
  return authState;
}

export function setAuthState(state: Partial<AuthState>) {
  authState = {
    ...authState,
    ...state,
  }
}

export function clearAuthState() {
  authState = {
    isAuthenticated: false,
    isOnboarded: false,
    user: null
  }
}
