import { create } from "zustand";
// import { persist } from "zustand/middleware";

interface ButtonState {
  firstButtonValue: boolean;
  secondButtonValue: boolean;
  submitButtonValue: boolean;
  increaseFirstButton: () => void;
  increaseSecondButton: () => void;
  decreaseFirstButton: () => void;
  decreaseSecondButton: () => void;
  onSubmit: () => void;
}

const useBearStore = create<ButtonState>()(
  //   persist(
  (set) => ({
    firstButtonValue: false,
    increaseFirstButton: () => set(() => ({ firstButtonValue: true })),
    decreaseFirstButton: () => set(() => ({ firstButtonValue: false })),
    secondButtonValue: false,
    increaseSecondButton: () => set(() => ({ secondButtonValue: true })),
    decreaseSecondButton: () => set(() => ({ secondButtonValue: false })),
    submitButtonValue: false,
    onSubmit: () => set(() => ({ submitButtonValue: true })),
  })
  // {
  //   name: "button-storage",
  // }
);

export default useBearStore;
