/*
 *
 * BackIcon
 *
 */

import React, { FC } from "react";
import { StyledBackIcon, StyledBackIconWrapper } from "./styledComponents";
import BackIconImage from "../../assets/back-icon.svg";

const BackIcon: FC<{ onGoHome: Function }> = ({ onGoHome }) => {
  return (
    <StyledBackIconWrapper>
      <StyledBackIcon
        src={BackIconImage}
        alt="Back Icon"
        onClick={() => onGoHome()}
      />
      <span>Back</span>
    </StyledBackIconWrapper>
  );
};

export default BackIcon;
