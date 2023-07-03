import Link from "next/link";
import { Button } from "./index";
import { ButtonProps } from "@mui/material/Button";
import { ReactNode } from "react";

type LinkButtonProps = {
  link: string;
  children: ReactNode | undefined | null;
} & ButtonProps;

export default function LinkButton({
  link,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <Link href={link}>
      <Button {...props}>{children}</Button>
    </Link>
  );
}
