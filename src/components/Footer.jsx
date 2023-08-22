import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="h-[5rem] grid place-items-center">
      <a href="https://github.com/bentekku" target="_blank">
        <FontAwesomeIcon icon={faCodeBranch} className="text-lg" />
      </a>
    </div>
  );
};

export default Footer;
