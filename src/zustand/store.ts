import create from "zustand";

interface StoreState {
  theme: boolean;
  setTheme: () => void;
}

export const useStore = create<StoreState>((set) => ({
  theme: true,
  setTheme: () => set((state) => ({ theme: !state.theme })),
}));
