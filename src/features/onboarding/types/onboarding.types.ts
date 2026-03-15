import type { FieldValidatorType, ValidatorFnType } from "@shared/validation-engine/types/rules.type"

//Used for Schema
export type OnboardingFieldType = {
  id: string,
  label: string,
  type: string,
  placeholder: string
  isPassword?: Boolean | undefined
  fieldValidators?: FieldValidatorType[]
}

//Used for attaching validator functions
export type OnboardingFieldValidatorType = Omit<OnboardingFieldType, "fieldValidators"> & { fieldValidators?: ValidatorFnType[] }
