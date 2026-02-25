import { useAuthStore } from "../../app/store/auth/auth.store"

export default function Onboardingpage() {
  const user = useAuthStore(state => state.user)

  if (user?.role === "ORGANIZER") {
    return <div>Organizer onboarding form</div>
  }

  if (user?.role === "TEAM_ADMIN") {
    return <div>Team admin onboarding form</div>
  }

  return null
}
