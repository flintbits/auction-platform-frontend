import React from "react";
import styles from './Typography.module.css';

type TypographyElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "label"

type TypographyWeight = 'light' | 'normal' | 'medium' | 'bold';

type TypographySize = "text-base" | "text-md" | "text-sm" | "text-xs"

interface TypograhyProps {
  as?: TypographyElements
  children: React.ReactNode,
  weight?: TypographyWeight
  size?: TypographySize
  className?: string
  style?: React.CSSProperties
}

export default function Typography({ as: Component = "p", children, weight = "normal", size, className, style }: TypograhyProps) {

  const classNames = [
    styles.typography,
    styles[`typography-weight--${weight}`],
    size ? styles[`typography-size--${size}`] : "",
    className]
    .filter(Boolean)
    .join(" ");


  return (
    <Component className={classNames} style={style}>
      {children}
    </Component>
  )
}
