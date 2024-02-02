import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface ButtonState {
  firstButton: number;
  secondButton: number;
  submitButton: number;
  increaseFirstButton: () => void;
  increaseSecondButton: () => void;
  onSubmit: () => void;
}

const useBearStore = create<ButtonState>()(
  //   persist(
  (set) => ({
    firstButton: 0,
    increaseFirstButton: () =>
      set((state) => ({ firstButton: state.firstButton + 1 })),
    secondButton: 0,
    increaseSecondButton: () =>
      set((state) => ({ secondButton: state.secondButton + 1 })),
    submitButton: 0,
    onSubmit: () => set((state) => ({ submitButton: state.submitButton + 1 })),
  })
  // {
  //   name: "button-storage",
  // }
);

export default useBearStore;
