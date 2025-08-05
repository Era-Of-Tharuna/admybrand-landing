import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const buttonVariants = cva(
  // Glassmorphism + animation + modern typography
  "inline-flex items-center justify-center rounded-xl text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background backdrop-blur-md bg-white/30 shadow-md hover:shadow-xl hover:scale-[1.03]",
  {
    variants: {
      variant: {
        default: "bg-primary/80 text-primary-foreground hover:bg-primary/90",
        destructive: "bg-red-500/80 text-white hover:bg-red-600/90",
        outline: "border border-input bg-white/20 hover:bg-accent/30 hover:text-accent-foreground",
        secondary: "bg-secondary/80 text-secondary-foreground hover:bg-secondary/90",
        ghost: "bg-transparent hover:bg-accent/20 hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary bg-transparent shadow-none",
      },
      size: {
        default: "h-11 py-2 px-6",
        sm: "h-9 px-4 rounded-lg",
        lg: "h-13 px-10 rounded-2xl text-lg",
        icon: "h-11 w-11 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = ({
  className,
  variant,
  size,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </button>
  );
};

export { Button, buttonVariants };