import useFormEngine from "@app/hooks/useFormEngine";
import { Button } from "@shared/ui/Button/Button";
import { TextField } from "@shared/ui/TextField/TextField";
import Typography from "@shared/ui/Typography/Typography";
import { Link, useNavigate } from "@tanstack/react-router";
import Divider from "../../../shared/ui/Divider/Divider";
import { SignupFormSchema } from "../Schema/auth.schema";
import styles from '../styles/AuthForm.module.css';
import type { AuthFieldType } from "../types/auth.types";

type Props = {}

export default function SignupForm({ }: Props) {
  const { formData, onChange, checkAllFields, errors } = useFormEngine<AuthFieldType>(SignupFormSchema)

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = checkAllFields()
    if (Object.values(validationErrors).some(Boolean)) return

    // try {
    //   const user = await login(formData.email, formData.password);
    //   navigate({ to: user.is_onboarded ? "/dashboard" : "/onboarding" })
    // } catch (err: any) {
    //   // setError(err.message || "Login Failed");
    // } finally {
    //   // setLoading(false)
    // }
  }

  return (
    <section className={styles.authcontainer}>
      <Typography as="h1" weight="bold" >Create Your Account</Typography>
      <Divider />
      <form onSubmit={handleSignup} className={styles.form}>
        {SignupFormSchema.map((field) => {
          return <TextField
            key={field.id}
            id={field.id}
            value={formData[field.id] ?? ""}
            type={field.type}

            label={field.label}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e, field.id)}
            LeftIcon={field.leftIcon}
            error={errors[field.id] ? true : false}
            helperText={errors[field.id] ? errors[field.id] : ""}
          />
        })}
        <Button variant="primary" type="submit">Submit</Button>
      </form>

      <Typography as="p" weight="light" size="text-md">Have an Account? <Link to="/login" className={styles.routelink}>Log In</Link></Typography>
    </section >
  )
}
