import { create } from "zustand";

interface ButtonState {
  firstButton: boolean;
  secondButton: boolean;
  submitButton: boolean;
  toggleFirstButton: () => void;
  toggleSecondButton: () => void;
  toggleSubmitButton: () => void;
}

const useButtonStore = create<ButtonState>()((set) => ({
  firstButton: false,
  submitButton: false,
  secondButton: false,
  toggleFirstButton: () =>
    set((state) => ({ firstButton: !state.firstButton })),
  toggleSecondButton: () =>
    set((state) => ({ secondButton: !state.secondButton })),
  toggleSubmitButton: () =>
    set((state) => ({ submitButton: !state.submitButton })),
}));

export default useButtonStore;
