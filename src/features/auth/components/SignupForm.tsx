import useFormEngine from "@app/hooks/useFormEngine";
import { Button } from "@shared/ui/Button/Button";
import { TextField } from "@shared/ui/TextField/TextField";
import Typography from "@shared/ui/Typography/Typography";
import { Link } from "@tanstack/react-router";
import { SignupFormSchema } from "../Schema/auth.schema";
import styles from '../styles/LoginForm.module.css';
import type { AuthFieldType } from "../types/auth.types";

type Props = {}

export default function SignupForm({ }: Props) {
  const { formData, onChange, errors } = useFormEngine<AuthFieldType>(SignupFormSchema)



  return (
    <section className={styles.authcontainer}>
      <section>
        <Typography as="h1" weight="bold" >Create Your Account</Typography>
        {SignupFormSchema.map((field) => {
          return <TextField
            key={field.id}
            id={field.id}
            value={formData[field.id] ?? ""}
            type={field.type}
            style={{ marginTop: "12px" }}
            label={field.label}
            placeholder={field.placeholder}
            onChange={(e) => onChange(e, field.id)}
            LeftIcon={field.leftIcon}
            error={errors[field.id] ? true : false}
            helperText={errors[field.id] ? errors[field.id] : ""}
          />
        })}


      </section>

      <Button variant="primary" >Submit</Button>

      <Typography as="p" weight="light" size="text-md">Have an Account? <Link to="/login" className={styles.routelink}>Log In</Link></Typography>
    </section>
  )
}
