import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cyberButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow hover:shadow-glow-lg",
        hero: "bg-gradient-primary text-primary-foreground hover:scale-105 shadow-glow-lg hover:shadow-glow-lg border border-primary/20",
        cyber: "bg-surface border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/60 hover:shadow-glow",
        ghost: "text-primary hover:bg-primary/10 hover:text-primary",
        matrix: "bg-gradient-secondary text-secondary-foreground hover:scale-105 shadow-glow",
        outline: "border border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:border-primary/60",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-glow",
        terminal: "bg-muted font-mono text-sm border border-border hover:bg-muted/80 hover:border-primary/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CyberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cyberButtonVariants> {
  asChild?: boolean;
  glow?: boolean;
}

const CyberButton = React.forwardRef<HTMLButtonElement, CyberButtonProps>(
  ({ className, variant, size, asChild = false, glow = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          cyberButtonVariants({ variant, size }),
          glow && "animate-glow-pulse",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
CyberButton.displayName = "CyberButton";

export { CyberButton, cyberButtonVariants };