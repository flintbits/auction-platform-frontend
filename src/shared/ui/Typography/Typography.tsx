import React from "react";

type TypographyElements =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"

type TypographyWeight = 'light' | 'normal' | 'medium' | 'bold';

interface TypograhyProps {
  as?: TypographyElements
  children: React.ReactNode,
  weight: TypographyWeight
}

export default function Typography({ as: Component = "p", children, weight = "normal" }: TypograhyProps) {
  return (
    <Component className={`
        typography
        typography--${weight}
      `}>{children}</Component>
  )
}
