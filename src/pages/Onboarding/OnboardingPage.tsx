import { getAuthState } from "../../auth/authStore"

export default function OnboardingPage() {
  const { user } = getAuthState()

  if (user?.role === "ORGANIZER") {
    return <div>Organizer onboarding form</div>
  }

  if (user?.role === "TEAM_ADMIN") {
    return <div>Team admin onboarding form</div>
  }

  return null
}
