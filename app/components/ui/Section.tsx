import { motion } from "framer-motion";
import type { ReactNode } from "react";
export const container = "max-w-6xl mx-auto px-4";

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Section({
  id,
  children,
  className = "",
}: {
  readonly id?: string;
  readonly children: ReactNode;
  readonly className?: string;
}) {
  return (
    <section id={id} className={className}>
      <div className={container}>{children}</div>
    </section>
  );
}
export function H2({
  children,
  sub,
}: {
  readonly children: ReactNode;
  readonly sub?: ReactNode;
}) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
        {children}
      </h2>
      {sub && <p className="text-sm text-zinc-400 mt-1">{sub}</p>}
    </div>
  );
}

export const MotionDiv = motion.div;
