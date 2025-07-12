import * as React from "react";
import { cn } from "@/lib/utils";

interface ServiceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  children: React.ReactNode;
}

const ServiceButton = React.forwardRef<HTMLButtonElement, ServiceButtonProps>(
  (
    { className, variant = "secondary", size = "large", children, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(
          "flex justify-center items-center shrink-0 border rounded-[30px] border-solid font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          {
            "h-14 px-[60px] py-[18px] text-xl leading-5 max-sm:h-12 max-sm:px-10 max-sm:py-3.5 max-sm:text-lg":
              size === "large",
            "border-white text-white hover:bg-white hover:text-black":
              variant === "secondary" && className?.includes("border-white"),
            "border-black text-black hover:bg-black hover:text-white":
              variant === "secondary" && className?.includes("border-black"),
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ServiceButton.displayName = "ServiceButton";

export { ServiceButton };
