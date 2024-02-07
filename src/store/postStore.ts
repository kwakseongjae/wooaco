import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface PostState {
  title: string;
  lang: string;
  code: string;
  terminal: string;
  description: string;
  setTitle: (value: string) => void;
  setLang: (value: string) => void;
  setCode: (value: string) => void;
  setTerminal: (value: string) => void;
  setDescription: (value: string) => void;
}

const usePostStore = create<PostState>()(
  persist(
    (set) => ({
      title: " ",
      lang: "python",
      code: " ",
      terminal: " ",
      description: " ",
      setTitle: (value: string) => set(() => ({ title: value })),
      setLang: (value: string) => set(() => ({ lang: value })),
      setCode: (value: string) => set(() => ({ code: value })),
      setTerminal: (value: string) => set(() => ({ terminal: value })),
      setDescription: (value: string) => set(() => ({ description: value })),
    }),
    {
      name: "post-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePostStore;
