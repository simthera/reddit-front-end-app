/*
 *
 * Details
 *
 */

import React, { FC } from "react";

import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { PAGE_TITLE_HOME } from "../../utils/constants";
import Header from "../../components/header";
import BackIcon from "../../components/backIcon";
import {
  StyledDetailsPageWrapper,
  StyledDetailsContent,
} from "../../components/subshreddits/styledComponents";

interface Data {
  data: {
    title: string;
    display_name_prefixed: string;
    public_description: string;
    created: string;
    banner_img: string;
  };
}

const Details: FC = () => {
  const history = useHistory();

  const handleGoback = () => {
    history.push("/");
  };
  const {
    state: {
      data: { title, public_description, banner_img },
    },
  } = useLocation<Data>();

  return (
    <>
      <Header title={PAGE_TITLE_HOME} onGoHome={() => null} />

      <StyledDetailsPageWrapper>
        <StyledDetailsContent>
          <h1>{title}</h1>
          <img src={banner_img} alt="banner" />
          <p>{public_description}</p>
          <BackIcon onGoHome={handleGoback} />
        </StyledDetailsContent>
      </StyledDetailsPageWrapper>
    </>
  );
};

export default Details;
