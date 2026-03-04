import type { AuthFieldType } from "../types/auth.types";

export const LoginFormSchema: AuthFieldType[] = [
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    fieldValidators: [
      { type: "required" }
    ]
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    fieldValidators: [
      { type: "required" },
      { type: "minLength", constraints: { minLength: 8 } }
    ]
  }
]
