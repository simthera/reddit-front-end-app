import styled from "styled-components";
const StyledBackIconWrapper = styled.div`
  display: flex;
  max-width: 120px;
  cursor: pointer;
  font-weight: bold;

  span {
    position: relative;
    top: 10px;
    left: 10px;
  }
`;
const StyledBackIcon = styled.img`
  width: 40px;
`;

export { StyledBackIcon, StyledBackIconWrapper };
