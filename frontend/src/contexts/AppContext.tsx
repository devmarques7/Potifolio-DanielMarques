import { createContext, useEffect, useState } from "react";
import { WEB_SITE_CONTENT_NL } from "../config/languages/NL";
import { WEB_SITE_CONTENT_PT } from "../config/languages/PT";
import { WEB_SITE_CONTENT } from "../config/website";
import { ContextsProps, IWebContent } from "../interfaces/ContextsProps";

interface IAppContext {
  language: string;
  handleLanguage: (event: any) => void;
  webContent: IWebContent;
  policy: boolean;
  handlePolicy: () => void;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

const AppContextProvider = ({ children }: ContextsProps) => {
  const [language, setLanguage] = useState("EN");
  const [webContent, setWebContent] = useState(WEB_SITE_CONTENT);
  const [policy, setPolicy] = useState(true);

  const handleLanguage = (event: any): void => {
    setLanguage(event.target.className);
  };

  const handlePolicy = () => {
    setPolicy(false);
  };

  useEffect(() => {
    switch (language) {
      case "EN":
        return setWebContent(WEB_SITE_CONTENT);
      case "PT":
        return setWebContent(WEB_SITE_CONTENT_PT);
      case "NL":
        return setWebContent(WEB_SITE_CONTENT_NL);
    }
  }, [language]);

  return (
    <AppContext.Provider
      value={{ language, handleLanguage, webContent, policy, handlePolicy }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
