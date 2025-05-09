// import { create } from "zustand";

// interface LanguageStore {
//   language: "ar" | "fa" | "en";
//   direction: "rtl" | "ltr";
//   randomTimeout: number;
//   setLanguage: (lang: LanguageStore["language"]) => void;
// }

// const useStore = create<LanguageStore>((set) => ({
//   language: "ar",
//   direction: "rtl",
//   randomTimeout: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,

//   setLanguage: (lang) =>
//     set({
//       language: lang,
//       direction: lang === "en" ? "ltr" : "rtl",
//       randomTimeout: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
//     }),
// }));

// export default useStore;

import { create } from "zustand";

interface LanguageStore {
  language: "ar" | "fa" | "en";
  direction: "rtl" | "ltr";
  randomTimeout: number;
  isLoadingShow: boolean;
  setLanguage: (lang: LanguageStore["language"]) => void;
}

const useStore = create<LanguageStore>((set) => ({
  language: "ar",
  direction: "rtl",
  randomTimeout: Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000,
  isLoadingShow: false,

  setLanguage: (lang) => {
    set({ isLoadingShow: true });

    const newRandomTimeout =
      Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;

    setTimeout(() => {
      set({
        language: lang,
        direction: lang === "en" ? "ltr" : "rtl",
        randomTimeout: newRandomTimeout,
      });
    }, 300);

    setTimeout(() => {
      set({ isLoadingShow: false });
    }, newRandomTimeout + 200);
  },
}));

export default useStore;
