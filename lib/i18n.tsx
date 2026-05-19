"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "bn" | "en";
export type S = { en: string; bn: string };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: S) => string;
}

const LangContext = createContext<LangCtx>({
  lang: "bn",
  setLang: () => {},
  t: (s) => s.bn,
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("bn");

  useEffect(() => {
    const stored = localStorage.getItem("rh-lang") as Lang | null;
    if (stored === "en" || stored === "bn") {
      setLangState(stored);
      document.documentElement.lang = stored === "en" ? "en" : "bn";
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem("rh-lang", l);
    document.documentElement.lang = l === "en" ? "en" : "bn";
  }

  const t = (s: S) => s[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
