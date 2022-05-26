/*
 *
 * Header
 *
 */

import React, { FC, ReactElement } from "react";
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderLogoWrapper,
} from "./styledComponents";
import Logo from "../../assets/reddit_logo_new.png";

const Header: FC<{
  title: string;
  onGoHome: Function;
}> = ({ title, onGoHome }): ReactElement => {
  return (
    <StyledHeader>
      <StyledHeaderLogoWrapper>
        <div onClick={() => onGoHome()}>
          <StyledHeaderLogo src={Logo} alt="reddit logo" />
        </div>
      </StyledHeaderLogoWrapper>
    </StyledHeader>
  );
};

export default Header;
