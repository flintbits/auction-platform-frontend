import styles from './button.module.css';

export type ButtonSize = "sm" | "md" | "lg"

export type ButtonVariant = "primary" | "secondary" | "danger" | "outline"

interface ButtonProps {
    children: React.ReactNode,
    size?: ButtonSize,
    variant: ButtonVariant,
    disabled?: boolean,
    block?: boolean,
    type?: "button" | "submit" | "reset",
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const SIZE_MAP: Record<ButtonSize, React.CSSProperties> = {
    sm: {
        padding: "var(--space-xs) var(--space-sm)",
        fontSize: "var(--font-size-xs)",
    },
    md: {
        padding: "var(--space-sm) var(--space-md)",
        fontSize: "var(--font-size-sm)",
    },
    lg: {
        padding: "var(--space-md) var(--space-lg)",
        fontSize: "var(--font-size-md)",
    },
};


const VARIANT_MAP: Record<
    ButtonVariant,
    React.CSSProperties
> = {
    primary: {
        backgroundColor: "var(--color-primary)",
        border: "1px solid var(--color-primary)",
        color: "#fff",
    },
    secondary: {
        backgroundColor: "var(--color-accent)",
        color: "var(--color-text-primary)",
    },
    danger: {
        backgroundColor: "var(--color-danger)",
        color: "#fff",
    },
    outline: {
        border: "1px solid var(--color-primary)",
        color: "var(--color-text-primary)",
    }
};

console.log(
    getComputedStyle(document.documentElement)
        .getPropertyValue('--color-primary')
)

export default function Button({ children, size = "md", variant = "primary", disabled = false, block = false, type = "button", onClick }: ButtonProps) {

    const sizeStyles = SIZE_MAP[size]
    const variantStyles = VARIANT_MAP[variant]

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={styles.btn}
            style={{
                ...sizeStyles,
                ...variantStyles,
                width: block ? "100%" : "auto",
                fontFamily: "var(--font-family-base)",
                fontWeight: "var(--font-weight-thin)",
                letterSpacing: "var(--letter-spacing-wide)",
                lineHeight: "var(--line-height-normal)",
            }}
        >
            {children}
        </button>
    )
}
