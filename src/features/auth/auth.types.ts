export type User = {
  id: number;
  email: string;
  role: 'ORGANIZER' | 'TEAM_ADMIN';
  is_onboarded: boolean;
}

export type AuthState = {
  isAuthenticated: boolean;
  isOnboarded: boolean;
  user: User | null;
  initialized: boolean;
}
