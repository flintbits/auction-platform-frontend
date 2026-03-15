import useFormEngine from '../../../app/hooks/useFormEngine'
import { Button } from '../../../shared/ui/Button/Button'
import { TextField } from '../../../shared/ui/TextField/TextField'
import { organizerFormSchema } from '../schema/onboarding.schema'
import { sendOrganizerData } from '../services/onboarding.service'
import styles from '../styles/OnboardingForm.module.css'
import type { OnboardingFieldType } from '../types/onboarding.types'

type Props = {}

export default function OnboardingForm({ }: Props) {
  const { formData, onChange, errors, checkAllFields } = useFormEngine<OnboardingFieldType>(organizerFormSchema)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = checkAllFields()
    if (Object.values(validationErrors).some(Boolean)) return

    try {
      const user = await sendOrganizerData(formData);
      // navigate({ to: user.is_onboarded ? "/dashboard" : "/onboarding" })
    } catch (err: any) {
      // setError(err.message || "Login Failed");
    } finally {
      // setLoading(false)
    }
  }
  return (
    <section className={styles.wrapper}>
      <form onSubmit={handleLogin} className={styles.container}>
        {organizerFormSchema.map((field) => {
          return <TextField
            key={field.id}
            id={field.id}
            value={formData[field.id] ?? ""}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            isPassword={field.isPassword ? true : false}
            onChange={(e) => onChange(e, field.id)}
            LeftIcon={field.leftIcon}
            RightIcon={field.rightIcon}
            error={errors[field.id] ? true : false}
            helperText={errors[field.id] ? errors[field.id] : ""}
          />
        })}

        <Button variant="primary" type="submit">Submit</Button>
      </form>
    </section>
  )
}
