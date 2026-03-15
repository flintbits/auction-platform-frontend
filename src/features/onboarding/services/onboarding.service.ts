import { apiPOST } from "@app/api/client";

export async function sendOrganizerData(data: Record<string, string>) {
  await apiPOST("/organizers/onboarding", {
    body: JSON.stringify(data)
  });
}
