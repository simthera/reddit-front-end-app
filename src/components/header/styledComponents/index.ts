import styled from "styled-components";
import { calculateRem } from "../../../utils/helpers";

const StyledHeader = styled.div`
  background-color: #f8f8f8;
  border: 1px solid #e7e7e7;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
const StyledHeaderLogoWrapper = styled.div``;
const StyledHeaderLogo = styled.img`
  width: ${calculateRem(220)};
  height: ${calculateRem(90)};
  padding: 10px;
`;

const StyledHeaderTitile = styled.h2`
  padding: ${calculateRem(10)};
`;

export {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderTitile,
  StyledHeaderLogoWrapper,
};
