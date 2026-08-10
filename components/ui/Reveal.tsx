"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "li";
};

/**
 * ビューポートに入った際にふわりと立ち上がるスクロールリビール。
 * 「動きを減らす」設定は globals.css 側の .reduce-motion [data-reveal] で
 * inline style を !important 上書きして保証する（layout.tsx の同期スクリプト参照）。
 * framer-motion の useReducedMotion はSSR初期値に固定されハイドレーション後も
 * 更新されないことがあるため、ここでは使用しない。
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  as = "div",
}: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;

  return (
    <Component
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}
