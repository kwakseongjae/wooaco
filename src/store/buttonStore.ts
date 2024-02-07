import { create } from "zustand";

interface ButtonState {
  firstButton: boolean;
  secondButton: boolean;
  toggleFirstButton: () => void;
  toggleSecondButton: () => void;
}

const useButtonStore = create<ButtonState>()((set) => ({
  firstButton: false,
  secondButton: false,
  submitButton: false,
  toggleFirstButton: () =>
    set((state) => ({ firstButton: !state.firstButton })),
  toggleSecondButton: () =>
    set((state) => ({ secondButton: !state.secondButton })),
}));

export default useButtonStore;
