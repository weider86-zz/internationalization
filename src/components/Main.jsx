import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import uk_flag from "../assets/images/uk-flag.png";
import brazil_flag from "../assets/images/brazil-flag.png";
import spanish_flag from "../assets/images/spanish-flag.png";

const linkProjectRepo = "https://github.com/weider86/internationalization";

export const Main = () => {
  const [translate, i18n] = useTranslation("common");
  return (
    <div>
      <h1>{translate("title", { project: "Internacionalization " })} app</h1>
      <Button
        active={i18n.language === "default_en"}
        onClick={() => i18n.changeLanguage("default_en")}
      >
        <img src={uk_flag} alt="English version" />
      </Button>
      <Button
        active={i18n.language === "default_pt_br"}
        onClick={() => i18n.changeLanguage("default_pt_br")}
      >
        <img src={brazil_flag} alt="Portuguese-Brazil version" />
      </Button>
      <Button
        active={i18n.language === "default_es"}
        onClick={() => i18n.changeLanguage("default_es")}
      >
        <img src={spanish_flag} alt="Spanish version" />
      </Button>
      <p>{translate("text")}</p>
      <p>
        {`${translate("repo_access")}: `}
        <a href={linkProjectRepo} target="_blank">
          Github
        </a>
      </p>
    </div>
  );
};
