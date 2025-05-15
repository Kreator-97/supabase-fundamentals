import type { FC, InputHTMLAttributes } from "react";


export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  className,
  ...props
}) => {

  return (
    <input
      className={`border-2 border-gray-300 rounded-md p-2 focus:outline-none  ${className}`}
      {...props}
    />
  )
}
