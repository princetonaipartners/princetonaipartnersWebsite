import AnimatedBorderTrail from "@/components/animata/container/animated-border-trail";
import { cn } from "@/lib/utils";

interface EnhancedBadgeProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * EnhancedBadge - Badge with animated border trail
 * Uses brand gradient colors for the trail effect
 */
export default function EnhancedBadge({ children, className }: EnhancedBadgeProps) {
  return (
    <AnimatedBorderTrail
      duration="8s"
      trailColor="rgb(10, 132, 255)"
      trailSize="sm"
      className={cn("rounded-full", className)}
      contentClassName="px-4 py-2 text-sm font-medium bg-gradient-to-r from-brand-light to-white"
    >
      <span className="bg-gradient-to-r from-brand-primary to-accent-purple bg-clip-text text-transparent">
        {children}
      </span>
    </AnimatedBorderTrail>
  );
}
