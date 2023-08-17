import { FC, ReactElement } from "react";
import { TButtonProps } from "./types";
import clsx from "clsx";
import { P, match } from "ts-pattern";
import { Link } from "react-router-dom";

export const Button: FC<TButtonProps> = ({
  variant = "primary",
  size = "md",
  ...props
}): ReactElement => {
  const variantButton = clsx("text-white", {
    "bg-blue-500": variant === "primary",
    "bg-purple-500": variant === "secondary",
    "bg-red-500": variant === "danger",
    "bg-yellow-500": variant === "warning",
  });

  const sizeButton = clsx("px-4 py-2 rounded-lg", {
    "text-sm": size === "sm",
    "text-base": size === "md",
    "text-lg": size === "lg",
  });

  const { className = `${variantButton} ${sizeButton}`, loading = false, ...rest } = props;

  return match({
    link: props?.to,
    loading,
  })
    .with(
      {
        link: P.union(P.string, P.not(P.nullish)),
        loading: P.union(P.nullish, false),
      },
      () => (
        <Link role="link" to={`${props?.to}`}>
          <button role="button" className={className} {...rest}>
            {props.children}
          </button>
        </Link>
      ),
    )
    .with({ link: P.nullish, loading: P.union(P.nullish, false) }, () => (
      <button role="button" className={className} {...rest}>
        {props.children}
      </button>
    ))
    .with(
      {
        loading: true,
      },
      () => (
        <button role="button" className={className} {...rest}>
          Loading...
        </button>
      ),
    )
    .exhaustive();
};
