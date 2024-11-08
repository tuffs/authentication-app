import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = {
  default: "bg-primary text-white hover:bg-primary/90",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  ghost: "hover:bg-gray-100",
  link: "text-primary underline-offset-4 hover:underline",
};

const Button = React.forwardRef(
  ({ className, variant = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
