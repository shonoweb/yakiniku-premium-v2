"use client";

import type { ReactNode } from "react";
import { useReservation } from "@/components/ReservationProvider";

type ClearCourseLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

/**
 * Server Component化したセクションから、clearCourse()を必要とする
 * 予約導線リンクだけを切り出すための最小Client Island。
 */
export default function ClearCourseLink({ href, className, children }: ClearCourseLinkProps) {
  const { clearCourse } = useReservation();
  return (
    <a href={href} onClick={clearCourse} className={className}>
      {children}
    </a>
  );
}
