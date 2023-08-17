import { ButtonHTMLAttributes } from "react";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "danger" | "warning";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  to?: string;
};
