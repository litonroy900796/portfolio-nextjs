import { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  type?: string;
}

function Button({ children, className = "", target, rel, ...rest }: ButtonProps) {
  return (
    <a
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      className={`
        flex items-center gap-2
        px-6 py-2 text-gray-300 font-medium
        rounded-[5px] cursor-pointer bg-transparent
        border border-gray-300 hover:text-white
        hover:bg-primary-color hover:border-primary-color
        transition-all duration-300 ease-in-out
        ${className}
      `}
      {...rest}
    >
      {children}
    </a>
  )
}

export default Button