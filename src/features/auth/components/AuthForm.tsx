import useFormEngine from "@app/hooks/useFormEngine";
import { useAuthStore } from "@app/store/auth/auth.store";
import { Button } from "@shared/ui/Button/Button";
import Divider from "@shared/ui/Divider/Divider";
import { TextField } from "@shared/ui/TextField/TextField";
import Typography from "@shared/ui/Typography/Typography";
import { useMutation } from "@tanstack/react-query";
import { Link, useNavigate } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { login, signup } from "../services/auth.service";
import styles from '../styles/AuthForm.module.css';
import type { AuthFieldType } from "../types/auth.types";

type AuthFormProps = {
  schema: (AuthFieldType & { leftIcon?: LucideIcon, rightIcon?: LucideIcon })[]
  formType: string
}

export default function AuthForm({ schema, formType }: AuthFormProps) {
  const { formData, onChange, errors, checkAllFields } = useFormEngine<AuthFieldType>(schema)
  const navigate = useNavigate();

  const loginMutation = useMutation({ mutationFn: login })
  const signupMutation = useMutation({ mutationFn: signup })

  const isLogin = formType === "login"
  const mutation = isLogin ? loginMutation : signupMutation

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const validationErrors = checkAllFields()
    if (Object.values(validationErrors).some(Boolean)) return

    mutation.mutate(
      {
        email: formData.email,
        password: formData.password,
        role: formData.role ?? "ORGANIZER"
      },
      {
        onSuccess: (data) => {
          const user = data.user

          if (formType === "login") {
            useAuthStore.getState().login(user)

            navigate({
              to: user.is_onboarded
                ? "/dashboard"
                : "/onboarding",
              replace: true,
            })
          }

          if (formType === "signup") {
            navigate({ to: "/login", replace: true, })
          }
        },
        onError: (err: any) => {
          console.log(err.message)
        }
      }
    )
  }

  return (
    <section className={styles.authcontainer}>
      <p>use: test5@mail.com and 12345678</p>
      <Typography as="h1" weight="bold" >Access Your Account</Typography>
      <Divider />
      <form onSubmit={handleLogin} className={styles.form}>
        {schema.map((field) => {
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


      {formType === "login" ?
        <Typography as="p" weight="light" size="text-md">Dont have an Account? <Link to="/signup" className={styles.routelink}>Sign up</Link></Typography> :
        <Typography as="p" weight="light" size="text-md">Have an Account? <Link to="/login" className={styles.routelink}>Log In</Link></Typography>}
    </section>
  )
}
