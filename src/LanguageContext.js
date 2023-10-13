import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(undefined);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");
return (
    <LanguageContext.Provider
    value={{
        language,
        handleLanguage: () => setLanguage(language === "fr" ? "en" : "fr"),
    }}
    >
        {children}
    </LanguageContext.Provider>
);
};

export const useLanguage = () => useContext(LanguageContext)