import { attachValidators } from "@shared/validation-engine/attachValidators"
import type { BaseField, ValidatorFnType } from "@shared/validation-engine/types/rules.type"
import { useState } from "react"


type CompiledField<T extends BaseField> =
  Omit<T, "fieldValidators"> & { fieldValidators: ValidatorFnType[] }

export default function useFormEngine<T extends BaseField>(formSchema: T[]) {
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [errors, setErrors] = useState<Record<string, string>>({})

  //returns a new schema witht the field level validators attached
  const compiledSchema = formSchema.map(attachValidators)

  const getFieldSchema = (fieldId: string) => {
    return compiledSchema.find((field) => field.id === fieldId)
  }

  const validateFields = (value: string, fieldSchema: CompiledField<T>) => {
    let error = "";

    for (let validator of fieldSchema.fieldValidators!) {
      const result = validator(value, fieldSchema.id)

      if (result) {
        error = result
        break
      }
    }
    return error
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, fieldId: string) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, [fieldId]: val }));

    const fieldSchema = getFieldSchema(fieldId);

    if (!fieldSchema) return

    const error = validateFields(val, fieldSchema);

    setErrors((prev) => ({ ...prev, [fieldId]: error }))
  }

  return { formData, onChange, errors }
}
