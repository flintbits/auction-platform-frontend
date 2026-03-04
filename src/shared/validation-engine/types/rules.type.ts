export type ValidatorFnType = (value: string, fieldName: string) => string | null


export type FieldValidatorType =
  | { type: "required" }
  | { type: "minLength", constraints: { minLength: 8 } }


export type BaseField = {
  id: string
  fieldValidators: FieldValidatorType[]
}


export type ValidatorFactory = (constraints?: any) => ValidatorFnType

export type MinLengthConstraints = {
  minLength: number
}
