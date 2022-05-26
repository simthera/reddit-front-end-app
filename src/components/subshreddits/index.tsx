/*
 *
 * Subshreddits
 *
 */

import { type } from "os";
import React, { FC } from "react";
import moment from "moment";

import {
  StyledSubshreddits,
  StyledSubshredditsWrapper,
  StyledDescription,
  StyledBannerImage,
} from "./styledComponents";

interface SubshredditsProps {
  title: string;
  created: string;
  display_name_prefixed: string;
  public_description: string;
  handleLearnMore: Function;
  banner_img: string;
}

const Subshreddits: FC<SubshredditsProps> = ({
  title,
  created,
  display_name_prefixed,
  public_description,
  handleLearnMore,
  banner_img,
}) => {
  return (
    <StyledSubshreddits>
      <StyledSubshredditsWrapper
        onClick={() =>
          handleLearnMore({
            data: {
              title,
              created,
              display_name_prefixed,
              public_description,
              banner_img,
            },
          })
        }
      >
        <h2>
          {display_name_prefixed}:{title}
        </h2>
        <StyledBannerImage src={banner_img} alt="banner image" />
        <StyledDescription>{public_description}</StyledDescription>
        <p>Created: {moment(created).format("MMMM Do YYYY, h:mm:ss a")}</p>
        <p>Posted by: {display_name_prefixed} </p>
      </StyledSubshredditsWrapper>
    </StyledSubshreddits>
  );
};

export default Subshreddits;
