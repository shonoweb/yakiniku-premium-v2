"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type ReservationRequest = {
  /** 選択させたいコース名。空文字は「未選択のまま自由に選ばせる」を表す */
  course: string;
  /** 同じcourse値でも必ず変化を検知させるためのトークン */
  token: number;
};

type ReservationContextValue = {
  request: ReservationRequest;
  /** Menuの各コースボタンから呼び、そのコースを予約フォームに反映させる */
  selectCourse: (course: string) => void;
  /** Hero/Header/Footer/Accessの通常の予約導線から呼び、選択状態をリセットする */
  clearCourse: () => void;
};

const ReservationContext = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [request, setRequest] = useState<ReservationRequest>({ course: "", token: 0 });

  const value = useMemo<ReservationContextValue>(
    () => ({
      request,
      selectCourse: (course: string) =>
        setRequest((prev) => ({ course, token: prev.token + 1 })),
      clearCourse: () => setRequest((prev) => ({ course: "", token: prev.token + 1 })),
    }),
    [request]
  );

  return <ReservationContext.Provider value={value}>{children}</ReservationContext.Provider>;
}

export function useReservation() {
  const ctx = useContext(ReservationContext);
  if (!ctx) {
    throw new Error("useReservation must be used within a ReservationProvider");
  }
  return ctx;
}
