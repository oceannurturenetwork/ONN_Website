import { useEffect } from "react";

// Extending the window object type to include google and its methods
declare global {
  interface Window {
    google: any; // Use `any` or a more specific type if needed
    googleTranslateElementInit: () => void;
  }
}

const useGoogleTranslate = () => {
  useEffect(() => {
   

    const addGoogleTranslateScript = () => {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "fr,es,de,sw", // Add more languages if needed
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        "google_translate_element"
      );
    };

    addGoogleTranslateScript();
  }, []);

  
};

export default useGoogleTranslate;
