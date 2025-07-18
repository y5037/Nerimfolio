import { create } from "zustand";

interface TooltipState {
  message: string | null;
  show: boolean;
  showToast: (message: string) => void;
  hideToast: () => void;
}

export const useTooltipStore = create<TooltipState>((set) => ({
  message: null,
  show: false,
  showToast: (message) => set({ message, show: true }),
  hideToast: () => set({ message: null, show: false }),
}));
