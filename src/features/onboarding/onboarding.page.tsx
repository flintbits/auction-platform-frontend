import { authStore } from "../auth/auth.store"

export default function Onboardingpage() {
  const { user } = authStore

  if (user?.role === "ORGANIZER") {
    return <div>Organizer onboarding form</div>
  }

  if (user?.role === "TEAM_ADMIN") {
    return <div>Team admin onboarding form</div>
  }

  return null
}
