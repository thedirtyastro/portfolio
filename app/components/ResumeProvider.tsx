"use client";

import { createContext, useContext, useState, useCallback } from "react";
import ResumeModal from "./ResumeModal";

const ResumeContext = createContext<{ openResume: () => void }>({
  openResume: () => {},
});

export function useResume() {
  return useContext(ResumeContext);
}

export default function ResumeProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const openResume = useCallback(() => setOpen(true), []);

  return (
    <ResumeContext.Provider value={{ openResume }}>
      {children}
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </ResumeContext.Provider>
  );
}
