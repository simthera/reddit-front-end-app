import styled from "styled-components";

const StyledSubshreddits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSubshredditsWrapper = styled.a`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  width: 60%;
  padding: 10px;

  :hover {
    background-color: lightblue;
    cursor: pointer;
  }

  h2 {
    color: #337ab7;
    font-weight: normal;
  }

  p {
    font-size: 13px;
  }
`;

const StyledDescription = styled.p`
  background-color: #ccc;
  padding: 10px;
  border-radius: 10px;
`;
const StyledBannerImage = styled.img`
  width: 100%;
`;
const StyledDetailsPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StyledDetailsContent = styled.div``;

export {
  StyledSubshreddits,
  StyledSubshredditsWrapper,
  StyledDescription,
  StyledBannerImage,
  StyledDetailsPageWrapper,
  StyledDetailsContent,
};
