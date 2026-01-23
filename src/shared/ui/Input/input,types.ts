import type { ChangeEvent } from "react"

type OnChange = (e: ChangeEvent<HTMLInputElement>) => void

export interface InputProps {
    label?: string,
    id?: string,
    name?: string,
    type?: string,
    placeholder?: string
    value?: string
    required?: boolean
    onChange?: OnChange
    error?: string
}