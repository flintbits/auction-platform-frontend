
import type { ButtonProps } from './button.types'

export default function Button({ children }: ButtonProps) {
    return (
        <button>{children}</button>
    )
}
