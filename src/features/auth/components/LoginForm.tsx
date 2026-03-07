import useFormEngine from "@app/hooks/useFormEngine";
import { Button } from "@shared/ui/Button/Button";
import { TextField } from "@shared/ui/TextField/TextField";
import Typography from "@shared/ui/Typography/Typography";
import { Link, useNavigate } from "@tanstack/react-router";
import Divider from "../../../shared/ui/Divider/Divider";
import { LoginFormSchema } from "../Schema/auth.schema";
import { login } from "../services/auth.service";
import styles from '../styles/AuthForm.module.css';
import type { AuthFieldType } from "../types/auth.types";

type Props = {}

export default function LoginForm({ }: Props) {
  const { formData, onChange, errors, checkAllFields } = useFormEngine<AuthFieldType>(LoginFormSchema)
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = checkAllFields()
    if (Object.values(validationErrors).some(Boolean)) return

    try {
      const user = await login(formData.email, formData.password);
      navigate({ to: user.is_onboarded ? "/dashboard" : "/onboarding" })
    } catch (err: any) {
      // setError(err.message || "Login Failed");
    } finally {
      // setLoading(false)
    }
  }

  return (
    <section className={styles.authcontainer}>
      <p>use: test5@mail.com and 12345678</p>
      <Typography as="h1" weight="bold" >Access Your Account</Typography>
      <Divider />
      <form onSubmit={handleLogin} className={styles.form}>
        {LoginFormSchema.map((field) => {
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


      <Typography as="p" weight="light" size="text-md">Dont have an Account? <Link to="/signup" className={styles.routelink}>Sign up</Link></Typography>
    </section>
  )
}
