import type { IconType } from "react-icons";
import { useEffect, useEffectEvent, useRef } from "react";
import type { RefObject } from "react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";

type CapabilityBadgeProps = {
  label: string;
  accent: string;
  icon: IconType;
  className?: string;
  dragConstraints?: RefObject<HTMLElement | null>;
  onDragActiveChange?: (active: boolean) => void;
  resetDrag?: string;
  badgeId?: string;
};

function CapabilityBadge({
  label,
  accent,
  icon: Icon,
  className = "",
  dragConstraints,
  onDragActiveChange,
  resetDrag,
  badgeId,
}: CapabilityBadgeProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const itemRef = useRef<HTMLLIElement>(null);
  const finishDrag = useEffectEvent(() => {
    if (itemRef.current) itemRef.current.style.zIndex = "";
    onDragActiveChange?.(false);
  });
  useEffect(() => {
    x.stop();
    y.stop();
    x.set(0);
    y.set(0);
    finishDrag();
  }, [resetDrag, x, y]);
  return (
    <li
      data-badge-id={badgeId}
      ref={itemRef}
      className={`relative w-fit max-w-full ${className}`}
    >
      <motion.div
        className="flex max-w-full items-center gap-3 rounded-full border border-(--color-border) bg-(--color-canvas) px-(--space-4) py-(--space-3) text-[0.8125rem] text-(--color-ink-secondary) shadow-[0_4px_10px_rgb(15_23_42_/_0.1)]"
        style={{ x, y, cursor: dragConstraints ? "grab" : undefined, touchAction: dragConstraints ? "none" : undefined, userSelect: dragConstraints ? "none" : undefined }}
        drag={dragConstraints ? true : false}
        dragConstraints={dragConstraints}
        dragElastic={0}
        dragMomentum={false}
        dragSnapToOrigin
        dragTransition={reducedMotion
          ? { bounceStiffness: 1000000, bounceDamping: 10000 }
          : { bounceStiffness: 220, bounceDamping: 24 }}
        whileDrag={{ cursor: "grabbing" }}
        onDragStart={() => {
          if (itemRef.current) itemRef.current.style.zIndex = "10";
          onDragActiveChange?.(true);
        }}
        onDragTransitionEnd={() => { if (itemRef.current) itemRef.current.style.zIndex = ""; onDragActiveChange?.(false); }}
      >
      <span
        aria-hidden="true"
        className="inline-flex size-7 shrink-0 items-center justify-center rounded-full text-white"
        style={{ backgroundColor: accent }}
      >
        <Icon className="size-4" />
      </span>

      {label}
      </motion.div>
    </li>
  );
}

export default CapabilityBadge;
